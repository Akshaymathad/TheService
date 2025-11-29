# Deployment Instructions

Follow these steps to deploy The Service landing page to your preferred hosting provider.

## Prerequisites

- A GitHub account.
- Git installed locally.

## 1. Setup Repository

Run these commands in your terminal to initialize the repository:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: The Service landing page"

# Rename branch to main
git branch -M main

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push
git push -u origin main
```

## 2. Deploy to GitHub Pages

**Best for**: Static hosting, zero config.

1. Go to your repository on GitHub.
2. Click **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/ (root)`.
5. Click **Save**.
6. Wait 1-2 minutes. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## 3. Deploy to Vercel

**Best for**: Static hosting + Serverless functions (api/ping.js).

1. Install Vercel CLI (optional) or use the Dashboard.
2. **Dashboard Method**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Import your GitHub repository.
   - Framework Preset: **Other**.
   - Build Command: Leave empty.
   - Output Directory: Leave empty.
   - Click **Deploy**.
3. **CLI Method**:
   ```bash
   npm i -g vercel
   vercel
   # Follow the prompts (accept defaults)
   ```
4. Your API endpoint will be available at `/api/ping`.

## 4. Deploy to Netlify

**Best for**: Drag & drop or Git integration.

1. Go to [app.netlify.com](https://app.netlify.com).
2. Click **Add new site** > **Import from an existing project**.
3. Select **GitHub** and choose your repository.
4. **Build settings**:
   - Base directory: `/` (leave empty).
   - Build command: (leave empty).
   - Publish directory: `/` (leave empty).
5. Click **Deploy site**.
6. Netlify automatically detects `api/ping.js` if you configure it as a function, but for standard static hosting, it works out of the box. *Note: For Netlify Functions, move `api/ping.js` to `netlify/functions/ping.js` or configure `netlify.toml`.*

## 5. Deploy to Cloudflare Pages

**Best for**: Global edge performance.

1. Go to the Cloudflare Dashboard > **Pages**.
2. Click **Connect to Git**.
3. Select your repository.
4. **Build settings**:
   - Framework preset: **None**.
   - Build command: (leave empty).
   - Build output directory: (leave empty).
5. Click **Save and Deploy**.
