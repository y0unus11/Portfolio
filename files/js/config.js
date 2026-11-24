/* ============ CONFIG: edit everything here ============ */
const CONFIG={
  name:"Your Name",
  title:"Cybersecurity Enthusiast | Aspiring Security Analyst | Ethical Hacking",
  intro:"[Write 1–2 sentences about why you love cybersecurity and what you want to learn next.]",
  tagline:"Curious by nature. Careful by design.",
  email:"contact@yourdomain.com",            // shown on the page and used for mailto fallback
  github:"y0unus11",             // GitHub username; links and repos update automatically
  showRepos:true,                            // list public repos from the GitHub API
  formEndpoint:"https://formspree.io/f/YOUR_FORM_ID", // Formspree form ID, see README
  about:[
    {t:"Background",d:"[Where you come from and what led you to tech.]"},
    {t:"Cybersecurity interests",d:"[Topics you enjoy, e.g. network defence, web security.]"},
    {t:"Technical journey",d:"[What you have studied or practised so far.]"},
    {t:"Goals and ambitions",d:"[Roles, certifications or skills you are aiming for.]"},
    {t:"Professional interests",d:"[What you want to work on or learn from others.]"}
  ],
  skills:[
    {n:"Cybersecurity",d:"Core concepts, threats and defences",tags:["CIA triad","Risk"]},
    {n:"Network Security",d:"Protecting traffic and infrastructure",tags:["Firewalls","IDS"]},
    {n:"Linux",d:"Command line and system basics",tags:["Bash","Permissions"]},
    {n:"Python",d:"Scripting and automation",tags:["Scripting"]},
    {n:"Ethical Hacking",d:"Authorised testing methods",tags:["Recon","Labs"]},
    {n:"Security Fundamentals",d:"Cryptography, authentication, hardening",tags:["Crypto","IAM"]},
    {n:"Web Security",d:"Common web vulnerabilities",tags:["OWASP Top 10"]},
    {n:"Networking",d:"Protocols and how data moves",tags:["TCP/IP","DNS"]},
    {n:"Programming",d:"Writing and reading code",tags:["Git"]},
    {n:"Digital Forensics",d:"Evidence and incident analysis",tags:["Logs"]}
  ],
  /* Add a project by copying one block. Leave the array empty to show the "coming soon" message.
  {title:"Project name",description:"What it does.",tech:["Python","Linux"],image:"images/p1.jpg",github:"https://github.com/you/repo",demo:""} */
  projects:[],
  /* Add earned items only: {title:"Name",issuer:"Issuer",date:"2026",link:""} */
  certifications:[]
};
/* ======================================================= */