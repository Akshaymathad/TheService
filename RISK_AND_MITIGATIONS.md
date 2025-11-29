# Risks & Mitigations (OSS Stack)

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Tailwind CDN** | FOUC (Flash of Unstyled Content) & Large Payload | **Fix**: Use a build step (Vite/PostCSS) to generate a minified CSS file. |
| **Local Analytics** | Data loss if user clears cache | **Fix**: Acceptable trade-off for privacy. For persistence, self-host Umami. |
| **Mailto Form** | Poor UX (opens email client) | **Fix**: Use the GitHub Issues workflow (Method 2) or a self-hosted form backend. |
| **Redirects** | Client-side only (slower) | **Fix**: Use Cloudflare Pages (free tier) for edge redirects if allowed later. |
| **SEO** | Single page limits | **Fix**: Create dedicated sub-pages for "Features" or "Blog" as the site grows. |
| **DDoS** | GitHub Pages limits | **Fix**: GitHub handles basic protection. For enterprise, put Cloudflare (free) in front. |
