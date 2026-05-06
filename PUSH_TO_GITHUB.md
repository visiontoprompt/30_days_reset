# Push Landing Directory to GitHub Repository

## Steps to Push to GitHub

1. **Open Git Bash or PowerShell** as Administrator

2. **Navigate to the landing directory**:
   ```powershell
   cd "C:\Users\PC\Desktop\30-day Life Reset Project\landing"
   ```

3. **Initialize Git repository** (if not already done):
   ```powershell
   git init
   ```

4. **Add all files to Git**:
   ```powershell
   git add .
   ```

5. **Commit the files**:
   ```powershell
   git commit -m "Initial commit: Landing page files"
   ```

6. **Add the remote GitHub repository**:
   ```powershell
   git remote add origin https://github.com/visiontoprompt/30_days_reset.git
   ```

7. **Create and switch to main branch**:
   ```powershell
   git branch -M main
   ```

8. **Push to GitHub** (will prompt for GitHub credentials):
   ```powershell
   git push -u origin main
   ```

## Alternative: Using GitHub Desktop

1. Open GitHub Desktop
2. File > Add Local Repository
3. Navigate to: `C:\Users\PC\Desktop\30-day Life Reset Project\landing`
4. Click "Choose Repository"
5. Click "Publish repository"
6. Enter "30_days_reset" as repository name
7. Ensure "Public" or "Private" is selected
8. Click "Publish repository"

## After Pushing

Your landing files will be at: `https://github.com/visiontoprompt/30_days_reset`

Next step: Connect this repository to Cloudflare Pages using the guide in `CLOUDFLARE_PAGES_DEPLOYMENT.md`
