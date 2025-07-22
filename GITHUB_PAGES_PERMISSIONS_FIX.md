# GitHub Pages Deployment Permission Fix

## Issue
Despite adding the `token: ${{ secrets.GITHUB_TOKEN }}` parameter to the GitHub Pages deployment action, we're still encountering a permission error:

```
remote: Permission to shehrozasmat/houseforyou.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/shehrozasmat/houseforyou.git/': The requested URL returned error: 403
```

## Solution
This issue is likely due to repository permissions settings. The `GITHUB_TOKEN` needs to have write permissions to the repository.

### Step 1: Check Workflow Permissions in Repository Settings

1. Go to your repository on GitHub
2. Click on "Settings"
3. In the left sidebar, click on "Actions" under "Code and automation"
4. Scroll down to "Workflow permissions"
5. Make sure "Read and write permissions" is selected
6. Click "Save" if you made any changes

![Workflow Permissions Settings](https://docs.github.com/assets/cb-44583/images/help/settings/actions-workflow-permissions.png)

### Step 2: Use a Personal Access Token (Alternative Solution)

If adjusting the workflow permissions doesn't resolve the issue, you can use a Personal Access Token (PAT) instead:

1. Create a Personal Access Token:
   - Go to your GitHub account settings
   - Click on "Developer settings"
   - Click on "Personal access tokens" and then "Tokens (classic)"
   - Click "Generate new token"
   - Give it a name, select the "repo" scope
   - Click "Generate token" and copy the token

2. Add the token as a repository secret:
   - Go to your repository settings
   - Click on "Secrets and variables" under "Security"
   - Click on "Actions"
   - Click "New repository secret"
   - Name it `DEPLOY_TOKEN`
   - Paste your personal access token as the value
   - Click "Add secret"

3. Update your workflow file to use this token:
   ```yaml
   - name: Deploy to GitHub Pages
     uses: JamesIves/github-pages-deploy-action@v4
     with:
       folder: dist
       branch: gh-pages
       token: ${{ secrets.DEPLOY_TOKEN }}
   ```

## Additional Troubleshooting

If you're still experiencing issues, check the following:

1. Make sure the user who created the PAT has write access to the repository
2. Verify that the gh-pages branch exists or can be created by the action
3. Check if there are any branch protection rules that might be preventing the push

## References
- [GitHub Actions: Automatic token authentication](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
- [JamesIves/github-pages-deploy-action documentation](https://github.com/JamesIves/github-pages-deploy-action)