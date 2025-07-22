# GitHub Pages Deployment Guide for House-4-You

This guide will help you set up GitHub Pages for your House-4-You project.

## Prerequisites

- A GitHub account
- Your project pushed to a GitHub repository

## Setup Steps

### 1. Push Your Code to GitHub

If you haven't already, push your code to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/houseforyou.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "GitHub Actions" as the source
5. This will use the workflow file we've created (.github/workflows/deploy.yml)

### 3. Automatic Deployment

The project is configured to automatically deploy to GitHub Pages whenever you push changes to the main branch. The deployment process:

1. Builds the project using Vite
2. Deploys the built files to the gh-pages branch
3. Makes the site available at `https://YOUR_USERNAME.github.io/houseforyou/`

### 4. Manual Deployment

If you prefer to deploy manually, you can use the npm scripts:

```bash
npm run predeploy  # Builds the project
npm run deploy     # Deploys to GitHub Pages
```

### 5. Troubleshooting

- **404 Errors**: If you see 404 errors for assets, make sure the `base` path in `vite.config.ts` matches your repository name.
- **Blank Page**: If you see a blank page, check the browser console for errors. It might be due to incorrect asset paths.
- **Build Failures**: If the build fails, check the GitHub Actions logs for details.

### 6. Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your repository settings
2. Scroll down to the "GitHub Pages" section
3. Under "Custom domain", enter your domain name
4. Update the DNS settings of your domain provider:
   - Add an A record pointing to GitHub Pages IP addresses
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`
5. Update the `base` in `vite.config.ts` to `'/'` if using a custom domain

## Important Files

- `.github/workflows/deploy.yml`: GitHub Actions workflow for automatic deployment
- `.nojekyll`: Prevents GitHub Pages from ignoring files that start with underscore
- `vite.config.ts`: Contains the base path configuration for GitHub Pages

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)