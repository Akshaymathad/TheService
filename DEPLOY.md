# Deployment Instructions (OSS Only)

## 1. Push to GitHub

Run these commands to deploy your open-source site:

```bash
# Add all new files
git add .

# Commit changes
git commit -m "Upgrade to OSS-only stack"

# Force push (overwrites previous history to ensure clean state)
git push -f origin main
```

## 2. Verify GitHub Pages

1. Go to **Settings > Pages**.
2. Source: **GitHub Actions** (Since we added `.github/workflows/pages-deploy.yml`).
   - *Note: If you don't see "GitHub Actions", select "Deploy from a branch" -> "main" -> "/" first, then switch if needed. But usually, the presence of the workflow file automatically switches it.*
3. Custom Domain: Ensure `theservice.co.in` is set.
4. Enforce HTTPS: **Check**.

## 3. DNS Configuration (Zero Dependency)

Ensure your DNS provider (GoDaddy/Namecheap) has these **exact** records. No forwarding, no masking.

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 1h |
| A | @ | 185.199.109.153 | 1h |
| A | @ | 185.199.110.153 | 1h |
| A | @ | 185.199.111.153 | 1h |
| CNAME | www | akshaymathad.github.io | 1h |

## 4. Verification Commands

Run these to verify everything is correct:

```bash
# Check Apex Domain (Should return 4 IPs)
dig +short A theservice.co.in

# Check WWW Redirect (Should return your github.io address)
dig +short CNAME www.theservice.co.in

# Check Headers (Look for HTTP/2 200)
curl -I https://theservice.co.in
```
