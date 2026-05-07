# Deploying the Landing Page to Cloudflare Pages

## Overview
This guide walks you through publishing the static landing page (the contents of the `landing/` folder) to **Cloudflare Pages** and adding real‑time traffic monitoring.

---

## Prerequisites
1. A **GitHub**, **GitLab**, or **Bitbucket** account (Cloudflare Pages pulls the site from a Git repository).
2. The `landing/` folder with your HTML, CSS, JS, and assets already committed to a repository.
3. A Cloudflare account (free tier works fine).

---

## Step‑by‑step Instructions

### 1. Push the landing folder to a Git repo
```bash
# Inside the project root (where the .git folder lives)
cd "C:\Users\PC\Desktop\30-day Life Reset Project"
# If the landing folder is not yet tracked:
git add landing
git commit -m "Add landing page for Cloudflare Pages"
# Push to a remote (replace with your remote URL)
git push origin main
```
> **Tip:** If you only want the landing page on Pages, you can keep it in its own repo; otherwise the whole repo works fine.

### 2. Create a Cloudflare Pages project
1. Log in to the Cloudflare dashboard → **Pages** → **Create a project**.
2. Click **Connect to Git** and select the provider (GitHub/GitLab/Bitbucket).
3. Authorize Cloudflare to access the repository that contains `landing/`.
4. **Configure the project**:
   - **Project name** – e.g., `life-reset-landing`.
   - **Production branch** – `main` (or whatever branch you pushed to).
   - **Root directory** – `landing` (this tells Pages to serve files from that sub‑folder).
   - **Build command** – *Leave blank* (no build needed for pure static files).
   - **Build output directory** – *Leave blank* (defaults to the root directory you set).
5. Click **Save and Deploy**. Cloudflare will clone the repo, detect that it’s a static site, and publish it.

### 3. Verify the deployment
- After the build finishes, Cloudflare provides a preview URL, e.g., `https://life-reset-landing.pages.dev`.
- Open that URL in a browser and confirm the landing page renders correctly.
- If you see missing assets, double‑check that the paths in your HTML are relative (e.g., `src="images/logo.png"`).

### 4. Add real‑time traffic analytics
You have three easy options. Choose one and follow the snippet insertion steps.

#### a) Cloudflare Web Analytics (privacy‑first, free)
1. In the Cloudflare dashboard, go to **Analytics → Web Analytics**.
2. Click **Create a Web Analytics instance** and give it a name.
3. Copy the generated `<script>` tag.
4. Insert the script just before the closing `</head>` tag of `landing/index.html` (or any HTML file you use as the entry point).
```html
<head>
  ...
  <!-- Cloudflare Web Analytics -->
  <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'></script>
</head>
```
5. Commit the change and let Cloudflare Pages rebuild (push the commit or trigger a redeploy from the Pages UI).
6. Real‑time visitors appear under **Analytics → Web Analytics**.

#### b) Google Analytics 4 (GA4)
1. Create a GA4 property at <https://analytics.google.com>.
2. Copy the **Global Site Tag** (the `<script>` block).
3. Paste it into `landing/index.html` right after the opening `<head>` tag.
4. Commit & redeploy. Real‑time data shows in the GA4 **Realtime** panel.

#### c) Plausible (lightweight, GDPR‑compliant)
1. Sign up at <https://plausible.io> and add a new site.
2. Copy the provided `<script>` (usually `https://plausible.io/js/plausible.js`).
3. Insert it before `</head>`:
```html
<script defer data-domain="your-domain.com" src="https://plausible.io/js/plausible.js"></script>
```
4. Commit & redeploy. Live traffic appears in Plausible’s dashboard.

### 5. (Optional) Use a custom domain
1. In the Cloudflare dashboard, go to **Pages → your project → Settings → Custom domains** and click **“Set up a custom domain”**.
2. Enter the domain you own (e.g., `www.reset30days.com` or the apex `reset30days.com`) and press **Continue**.
3. **DNS configuration**:
   - **If the domain is already managed in Cloudflare**: Cloudflare will automatically add a **CNAME** record that points to `life-reset-landing.pages.dev`. Ensure the record is proxied (orange cloud).
   - **If the domain is managed elsewhere** (GoDaddy, Namecheap, etc.):
     - Create a **CNAME** record for the subdomain (`www`) that points to `life-reset-landing.pages.dev`.
     - For the apex domain, create an **ALIAS**, **ANAME**, or use Cloudflare’s **CNAME flattening** to point to `life-reset-landing.pages.dev`. If your registrar does not support this, you can set a URL redirect from `example.com` to `www.example.com`.
4. Return to the **Custom domains** panel; Cloudflare will verify the CNAME. Once the check passes, the status will turn **Active**.
5. **SSL/TLS**: Cloudflare automatically provisions a Universal SSL certificate for the custom domain (usually ready within minutes). Ensure the SSL mode is set to **Full (strict)**.
6. (Optional) Set up a redirect so that `example.com` forwards to `www.example.com` using a **Page Rule**:
   - Rule: `example.com/*` → **Forwarding URL (301)** → Destination `https://www.example.com/$1`.
7. Test the custom domain in a browser (`https://www.reset30days.com`). The lock icon should appear and the page should load the same content as the `*.pages.dev` preview.

---

## Troubleshooting
| Issue | Fix |
|-------|-----|
| **404 for assets** | Ensure asset URLs are relative (no leading `/` unless you host them at the root). |
| **Analytics not showing data** | Verify the script is present in the final HTML (use *View page source*). Check the network tab for a request to the analytics endpoint. |
| **Deploy stuck** | In the Pages UI, click **Retry Build**. Make sure the `landing` folder is present in the branch you selected. |
| **Custom domain not resolving** | Confirm the DNS records match the values shown in Cloudflare Pages and that Cloudflare’s SSL/TLS is set to **Full** or **Full (strict)**. |

---

## Quick command cheat‑sheet
```bash
# 1. Commit & push landing folder
cd "C:\Users\PC\Desktop\30-day Life Reset Project"
git add landing
git commit -m "Prepare landing for Cloudflare Pages"
git push origin main

# 2. After adding analytics snippet, push again
git add landing/index.html
git commit -m "Add Cloudflare Web Analytics script"
git push origin main
```

---

**You’re done!** Your static landing page now lives on Cloudflare Pages with live traffic monitoring. Whenever you need to update content, just edit the files in `landing/`, commit, and push – Cloudflare Pages will redeploy automatically.
