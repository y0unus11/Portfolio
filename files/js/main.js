const $=s=>document.querySelector(s),C=CONFIG;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safeUrl=u=>/^https?:\/\//.test(u)?u:"#";
document.title=C.name+" – Cybersecurity Portfolio";
["#brand","#name","#fbrand"].forEach(s=>$(s).textContent=C.name);
$("#title").textContent=C.title;$("#intro").textContent=C.intro;$("#tag").textContent=C.tagline;
$("#mail").textContent=C.email;$("#mail").href="mailto:"+C.email;
const ghUrl="https://github.com/"+C.github;
$("#ghBtn").href=ghUrl;$("#fgh").href=ghUrl;$("#ghLine").textContent="@"+C.github;
$("#copy").textContent="© "+new Date().getFullYear()+" "+C.name+". All rights reserved.";
$("#aboutGrid").innerHTML=C.about.map(a=>`<div class="card"><h3>${esc(a.t)}</h3><p>${esc(a.d)}</p></div>`).join("");
$("#skillGrid").innerHTML=C.skills.map(s=>`<div class="card"><h3>${esc(s.n)}</h3><p>${esc(s.d)}</p><div class="tags">${(s.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div></div>`).join("");
$("#projGrid").innerHTML=C.projects.length?C.projects.map(p=>`<article class="card"><div class="thumb">${p.image?`<img src="${esc(p.image)}" alt="" loading="lazy">`:"🛡️"}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="tags">${(p.tech||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div><div class="cardbtns">${p.github?`<a class="btn sec" target="_blank" rel="noopener" href="${esc(safeUrl(p.github))}">GitHub</a>`:""}${p.demo?`<a class="btn pri" target="_blank" rel="noopener" href="${esc(safeUrl(p.demo))}">Live demo</a>`:""}</div></article>`).join(""):`<div class="card empty"><h3>Projects coming soon</h3><p>I’m currently building, learning, and experimenting. Stay tuned!</p></div>`;
$("#certGrid").innerHTML=C.certifications.length?C.certifications.map(c=>`<div class="card"><h3>${esc(c.title)}</h3><p>${esc(c.issuer)} · ${esc(c.date)}</p>${c.link?`<div class="cardbtns"><a class="btn sec" target="_blank" rel="noopener" href="${esc(safeUrl(c.link))}">Verify</a></div>`:""}</div>`).join(""):`<div class="card empty"><h3>Learning in progress</h3><p>Certifications and milestones will appear here as I earn them.</p></div>`;
/* GitHub repos */
if(C.showRepos&&C.github&&C.github!=="your-github-username"){
  fetch(`https://api.github.com/users/${encodeURIComponent(C.github)}/repos?sort=updated&per_page=6`).then(r=>r.ok?r.json():[]).then(rs=>{
    $("#repoGrid").innerHTML=rs.filter(r=>!r.fork).map(r=>`<a class="card" style="text-decoration:none" target="_blank" rel="noopener" href="${esc(r.html_url)}"><h3>${esc(r.name)}</h3><p>${esc(r.description||"No description yet.")}</p><div class="tags">${r.language?`<span class="tag">${esc(r.language)}</span>`:""}<span class="tag">★ ${+r.stargazers_count}</span></div></a>`).join("");
  }).catch(()=>{});
}
/* nav */
const burger=$("#burger"),links=$("#links");
burger.onclick=()=>{const o=links.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
links.onclick=e=>{if(e.target.tagName==="A"){links.classList.remove("open");burger.setAttribute("aria-expanded",false)}};
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
/* robot eyes follow pointer */
const pupils=[...document.querySelectorAll(".pupil")],robot=$("#robot");
addEventListener("pointermove",e=>{const r=robot.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),d=Math.hypot(dx,dy)||1,k=Math.min(5,d/60);
  pupils.forEach(p=>p.style.transform=`translate(${dx/d*k}px,${dy/d*k}px)`)},{passive:true});
/* theme toggle */
const LT=()=>document.documentElement.dataset.theme==="light";
const tb=$("#theme");
function paintToggle(){const l=LT();tb.textContent=l?"☾":"☀";tb.setAttribute("aria-pressed",l);tb.setAttribute("aria-label",l?"Switch to dark mode":"Switch to light mode")}
tb.onclick=()=>{const n=LT()?"dark":"light";document.documentElement.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}paintToggle();if(typeof reduce!=="undefined"&&reduce)draw()};
paintToggle();
/* network background */
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,cv=$("#net"),cx=cv.getContext("2d");let W,H,pts=[];
function size(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;pts=Array.from({length:Math.min(70,Math.floor(W/16))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))}
function draw(){cx.clearRect(0,0,W,H);
  for(const p of pts){if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
    cx.fillStyle=LT()?"rgba(31,111,235,.55)":"rgba(212,175,55,.7)";cx.beginPath();cx.arc(p.x,p.y,1.6,0,7);cx.fill()}
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y);
    if(d<130){cx.strokeStyle=`rgba(${LT()?"31,111,235":"76,201,255"},${.22*(1-d/130)})`;cx.beginPath();cx.moveTo(pts[i].x,pts[i].y);cx.lineTo(pts[j].x,pts[j].y);cx.stroke()}}
  if(!reduce)requestAnimationFrame(draw)}
size();draw();addEventListener("resize",()=>{size();if(reduce)draw()});
/* contact form */
$("#form").addEventListener("submit",async e=>{
  e.preventDefault();const f=e.target,st=$("#status"),b=$("#send"),d=new FormData(f);
  st.className="";
  if(d.get("_gotcha"))return;                       // honeypot: bots fill this hidden field
  if(!f.checkValidity()||!/^\S+@\S+\.\S+$/.test(d.get("email"))){st.className="err";st.textContent="Please fill in every field with a valid email address.";return}
  if(C.formEndpoint.includes("YOUR_FORM_ID")){st.className="err";st.textContent="Form not configured yet. See README, step “Contact form”.";return}
  b.disabled=true;b.textContent="Sending…";
  try{const r=await fetch(C.formEndpoint,{method:"POST",body:d,headers:{Accept:"application/json"}});
    if(!r.ok)throw 0;f.reset();st.className="ok";st.textContent="Message sent. Thank you, I’ll reply soon."}
  catch{st.className="err";st.textContent="Message not sent. Please try again or email "+C.email+"."}
  b.disabled=false;b.textContent="Send message"});