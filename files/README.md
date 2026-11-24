# Cybersecurity portfolio

## Files
- `index.html` – page structure
- `css/styles.css` – all styling and colours (change the variables at the top of `:root`)
- `js/config.js` – **the only file you normally edit**: name, bio, projects, certifications, GitHub, email
- `js/main.js` – behaviour (animations, GitHub API, contact form)
- `images/` – project thumbnails
- `robots.txt` – search engine rules

## Change name, bio, GitHub
Edit `name`, `title`, `intro`, `tagline`, `about`, and `github` (username only). Links and the repo list update automatically.

## Add a project
Add an object to `projects`:
```js
{title:"Port scanner", description:"Python TCP scanner for my home lab.",
 tech:["Python","Linux"], image:"images/scanner.jpg",
 github:"https://github.com/you/port-scanner", demo:""}
```
Remove it to delete it. When the list is empty, the "coming soon" message shows. Put images in an `images/` folder next to `index.html`.

## Add a certification
Add to `certifications`: `{title:"Name", issuer:"Issuer", date:"2026", link:"https://verify-url"}`. Only add what you have earned.

## Contact form and professional email
1. Create a mailbox on your domain (Zoho Mail free tier, Google Workspace, Proton, etc.). Put it in `email`.
2. Sign up at formspree.io, create a form that sends to that address, and copy its ID.
3. Set `formEndpoint` to `https://formspree.io/f/<your id>`.
4. In Formspree, enable reCAPTCHA or its spam filter. A hidden honeypot field is already in the form.
No secret keys are in the page; the Formspree ID is public by design.

## Deploy
Drag the folder onto Netlify Drop, or push to GitHub and enable GitHub Pages or Cloudflare Pages.

## Custom domain
Buy a domain, add it in your host's dashboard, then create the DNS records the host shows (usually a CNAME for `www` and A/ALIAS for the root). HTTPS is automatic.
Set the same domain in your mail provider (MX records) so `contact@yourdomain` works.
