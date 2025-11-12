# GitHub Upload Guide

Complete step-by-step guide to upload your Future Cow Slidev presentation to GitHub.

## Prerequisites

- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- GitHub account at https://github.com/elisendarius

## Option 1: Upload via GitHub Website (Easiest)

### Step 1: Create a New Repository

1. Go to https://github.com/elisendarius
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Name it: `future-cow-presentation` (or your preferred name)
5. Add description: "Interactive Slidev presentation featuring The Future Cow"
6. Choose **Public** or **Private**
7. ✅ Check **"Add a README file"** (we'll replace it)
8. Click **"Create repository"**

### Step 2: Upload Files

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop ALL files from the `slidev-export` folder:
   - Components folder
   - Setup folder
   - All markdown files
   - package.json
   - .gitignore
3. ⚠️ **IMPORTANT**: Create a `public` folder and add your `cow.png` image
4. Add commit message: "Initial commit: Future Cow presentation"
5. Click **"Commit changes"**

## Option 2: Upload via Git Command Line (Recommended)

### Step 1: Create Repository on GitHub

Same as Option 1, Step 1 above, but **DON'T** check "Add a README file"

### Step 2: Prepare Your Local Files

Open terminal and navigate to the `slidev-export` folder:

```bash
cd path/to/slidev-export
```

### Step 3: Initialize Git

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Future Cow Slidev presentation"
```

### Step 4: Connect to GitHub

Replace `YOUR-REPO-NAME` with your actual repository name:

```bash
# Add GitHub remote
git remote add origin https://github.com/elisendarius/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Enter Credentials

When prompted:
- **Username**: elisendarius
- **Password**: Use a [Personal Access Token](https://github.com/settings/tokens) (not your GitHub password)

## Option 3: Upload via GitHub Desktop (User-Friendly)

### Step 1: Install GitHub Desktop

Download from: https://desktop.github.com/

### Step 2: Sign In

- Open GitHub Desktop
- Sign in with your GitHub account (elisendarius)

### Step 3: Add Repository

1. Click **"File"** → **"Add local repository"**
2. Browse to your `slidev-export` folder
3. If it says "not a git repository", click **"create a repository here"**
4. Name: `future-cow-presentation`
5. Click **"Create Repository"**

### Step 4: Publish to GitHub

1. Click **"Publish repository"** in the top bar
2. Choose organization: elisendarius
3. Add description
4. Choose Public/Private
5. Click **"Publish repository"**

## After Uploading

### Add Your Cow Image

If you haven't already:

1. Create a `public` folder in the repository
2. Upload `cow.png` to `public/cow.png`
3. Commit with message: "Add cow image"

### Update README (Optional)

Edit the `README.md` file on GitHub to customize it for your repository.

### Enable GitHub Pages (Optional)

To host the built presentation:

1. Build locally: `npm run build`
2. Upload the `dist` folder contents
3. Go to repository **Settings** → **Pages**
4. Source: Deploy from a branch
5. Branch: main, folder: /dist
6. Click Save

## Repository URL Structure

Your repository will be at:
```
https://github.com/elisendarius/future-cow-presentation
```

Clone URL for others:
```
https://github.com/elisendarius/future-cow-presentation.git
```

## Collaborating

To share with others:
1. Go to repository **Settings** → **Collaborators**
2. Click **"Add people"**
3. Enter GitHub usernames

## Updating Later

After making changes locally:

```bash
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

### "Permission denied"
- Use a Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens

### "Repository already exists"
- Choose a different repository name
- Or delete the existing one first

### Files too large
- GitHub has 100MB file limit
- Ensure `node_modules` is in `.gitignore` (it is)

### Cow image not showing after upload
- Verify path is `public/cow.png`
- Check file uploaded correctly
- Try a fresh clone to test

## Next Steps

1. ✅ Upload repository
2. ✅ Add cow image to `public/cow.png`
3. ✅ Update README if desired
4. ✅ Share repository URL
5. ✅ Invite collaborators (optional)

## Need Help?

- GitHub Guides: https://guides.github.com/
- Git Documentation: https://git-scm.com/doc
- GitHub Support: https://support.github.com/

---

**Your GitHub Profile**: https://github.com/elisendarius
