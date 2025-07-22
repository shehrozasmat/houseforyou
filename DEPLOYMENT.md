# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy the House-4-You website to GitHub Pages for free hosting.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## 🔧 Setup Instructions

### 1. Create GitHub Repository

1. **Create a new repository** on GitHub:
   - Go to [GitHub](https://github.com) and sign in
   - Click "New Repository"
   - Name it `houseforyou` (or your preferred name)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (we already have files)

2. **Update package.json**:
   ```json
   "homepage": "https://YOURUSERNAME.github.io/houseforyou",
   "repository": {
     "type": "git",
     "url": "https://github.com/YOURUSERNAME/houseforyou.git"
   }
   ```
   Replace `YOURUSERNAME` with your actual GitHub username.

3. **Update vite.config.ts** base URL:
   ```typescript
   base: '/houseforyou/',  // Replace with your repository name
   ```

### 2. Initialize Git and Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: House-4-You website"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOURUSERNAME/houseforyou.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages (Automatic Method)

The project is configured with **GitHub Actions** for automatic deployment:

1. **Go to your repository** on GitHub
2. **Navigate to Settings** → **Pages**
3. **Under "Source"** select: **GitHub Actions**
4. **Save the settings**

That's it! GitHub Actions will automatically:
- Build your project on every push to `main`
- Deploy to GitHub Pages
- Your site will be available at: `https://YOURUSERNAME.github.io/houseforyou`

### 4. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build and deploy manually
npm run deploy-manual
```

Or use the separate commands:
```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

## 🌐 Access Your Website

After successful deployment, your website will be available at:
```
https://YOURUSERNAME.github.io/houseforyou
```

Replace `YOURUSERNAME` with your GitHub username and `houseforyou` with your repository name.

## 🔄 Updating Your Website

### For Automatic Deployment (GitHub Actions):
1. Make your changes locally
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and deploy your site

### For Manual Deployment:
```bash
# After making changes
npm run deploy-manual
```

## 🛠️ Configuration Files

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Purpose**: Automatic deployment on push to main
- **Triggers**: Push to main branch

### Vite Configuration
- **File**: `vite.config.ts`
- **Key Settings**:
  - `base: '/houseforyou/'` - GitHub Pages subdirectory
  - Build optimization for production
  - Asset handling for GitHub Pages

### Package.json Scripts
- `npm run build` - Build for production
- `npm run deploy` - Deploy using gh-pages
- `npm run deploy-manual` - Build and deploy in one command
- `npm run preview` - Preview production build locally

## 🔍 Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages**:
   - Check that the repository is public
   - Verify the base URL in `vite.config.ts` matches your repository name
   - Ensure GitHub Pages is enabled in repository settings

2. **Assets Not Loading**:
   - Verify the `base` configuration in `vite.config.ts`
   - Check that image paths start with `/` or are relative

3. **Build Fails**:
   - Run `npm run build` locally to check for errors
   - Check the GitHub Actions logs in the "Actions" tab

4. **Changes Not Showing**:
   - Clear browser cache (Ctrl+F5 / Cmd+Shift+R)
   - Check that deployment completed successfully
   - Wait a few minutes for GitHub Pages to update

### Viewing Deployment Status

1. **GitHub Actions**: Go to your repository → **Actions** tab
2. **Check logs**: Click on the latest workflow run
3. **Monitor**: Green checkmark = successful deployment

## 📊 Performance Tips

- Images are optimized for web delivery
- Bootstrap 5.3.7 loaded via CDN for fast loading
- Build process creates optimized bundles
- Static files served efficiently by GitHub Pages

## 🔒 Security Notes

- Repository must be **public** for free GitHub Pages
- No server-side code - pure static site
- All API keys should be in environment variables (not tracked in git)
- Bootstrap and React loaded from trusted CDNs

## 📞 Support

If you encounter issues:

1. **Check GitHub Actions logs** for build errors
2. **Verify configuration** files match this guide
3. **Test locally** with `npm run build && npm run preview`
4. **Clear browser cache** and try again

## 🎉 Success!

Once deployed, your House-4-You website will be:
- ✅ **Live** on the internet
- ✅ **Free** hosting via GitHub Pages
- ✅ **Automatic** updates on code changes
- ✅ **Fast** loading with CDN delivery
- ✅ **Professional** custom domain support (optional)

### Custom Domain (Optional)

To use a custom domain like `house-4-you.com`:

1. **Purchase domain** from a registrar
2. **Add CNAME file** to repository root with your domain
3. **Configure DNS** with your domain provider
4. **Enable HTTPS** in GitHub Pages settings

---

**🏠 Your House-4-You website is now ready for the world! 🌍** 