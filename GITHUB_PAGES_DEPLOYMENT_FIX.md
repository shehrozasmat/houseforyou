# GitHub Pages Deployment Fix

## Issue
The GitHub Pages deployment was failing with the following error:

```
remote: Permission to shehrozasmat/houseforyou.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/shehrozasmat/houseforyou.git/': The requested URL returned error: 403
```

This error occurs because the GitHub Actions workflow doesn't have the necessary permissions to push to the repository.

## Solution
The solution is to add the `token` parameter to the JamesIves/github-pages-deploy-action configuration in the GitHub workflow file. This token provides the necessary authentication for the GitHub Actions bot to push to the repository.

### Changes Made
The following change was made to the `.github/workflows/deploy.yml` file:

```yaml
# Before
- name: Deploy to GitHub Pages
  uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: dist
    branch: gh-pages
```

```yaml
# After
- name: Deploy to GitHub Pages
  uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: dist
    branch: gh-pages
    token: ${{ secrets.GITHUB_TOKEN }}
```

## Why This Works
The `GITHUB_TOKEN` is a special secret that is automatically created by GitHub for each workflow run. It has the necessary permissions to perform actions on the repository, such as pushing to branches.

By adding this token to the JamesIves/github-pages-deploy-action configuration, we're providing the action with the authentication it needs to push to the gh-pages branch.

## Additional Information
If you're still experiencing issues with the deployment, you may need to check the repository settings to ensure that GitHub Actions has the necessary permissions:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Click on "Actions" under "Code and automation"
4. Make sure "Read and write permissions" is selected under "Workflow permissions"
5. Click "Save" if you made any changes

This ensures that the GITHUB_TOKEN has the necessary permissions to push to the repository.