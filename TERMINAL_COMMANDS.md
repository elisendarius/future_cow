# 🖥️ Terminal Commands Cheat Sheet

Quick reference for running your Future Cow Slidev presentation.

## 🚀 Initial Setup (One Time Only)

### 1. Clone from GitHub
```bash
git clone https://github.com/elisendarius/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Cow Image
```bash
# Mac/Linux
cp /path/to/your/cow.png public/cow.png

# Windows
copy C:\path\to\your\cow.png public\cow.png

# Or just drag-and-drop cow.png into the public folder!
```

## ▶️ Running the Presentation

### Start Development Server
```bash
npm run dev
```
Opens at: http://localhost:3030

### Stop the Server
Press `Ctrl + C` in terminal

## 🔨 Building & Exporting

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

### Export to PDF
```bash
npm run export
```
Creates: `slides-export.pdf`

## 🌐 Deployment Commands

### Deploy to Netlify (via CLI)
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages
```bash
# Build first
npm run build

# Create gh-pages branch
git checkout -b gh-pages
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## 🔄 Updating Your Presentation

### After Editing Files
The dev server auto-reloads! Just save your changes.

### Update from GitHub (if someone else made changes)
```bash
git pull origin main
npm install  # In case dependencies changed
```

### Push Your Changes to GitHub
```bash
git add .
git commit -m "Update presentation content"
git push origin main
```

## 🛠️ Troubleshooting Commands

### Check if Port 3030 is in Use
```bash
# Mac/Linux
lsof -i :3030

# Windows
netstat -ano | findstr :3030
```

### Kill Process on Port 3030
```bash
# Mac/Linux
lsof -ti:3030 | xargs kill

# Windows (find PID first, then):
taskkill /PID <PID> /F
```

### Clean Install (if issues)
```bash
rm -rf node_modules package-lock.json
npm install
```

### Check Node.js Version
```bash
node --version   # Should be 18+
npm --version
```

### Update npm
```bash
npm install -g npm@latest
```

## 📂 Useful File Commands

### List Files
```bash
ls -la          # Mac/Linux
dir             # Windows
```

### Navigate Directories
```bash
cd folder-name      # Enter folder
cd ..              # Go up one level
cd ~               # Go to home directory
pwd                # Show current directory
```

### Check if Cow Image Exists
```bash
# Mac/Linux
ls public/cow.png

# Windows
dir public\cow.png
```

## 🎯 Common Workflows

### Daily Development
```bash
# 1. Navigate to project
cd YOUR-REPO-NAME

# 2. Start dev server
npm run dev

# 3. Edit files in your code editor
# Changes auto-reload!

# 4. When done, stop server
Ctrl + C
```

### Deploying Updates
```bash
# 1. Make your changes
# 2. Build
npm run build

# 3. Deploy to Netlify (drag dist folder)
# OR deploy via CLI:
netlify deploy --prod --dir=dist
```

### Sharing with Team
```bash
# 1. Commit changes
git add .
git commit -m "Added new slides"

# 2. Push to GitHub
git push origin main

# 3. Team members pull changes
git pull origin main
npm install
```

## 📊 Package Management

### View Installed Packages
```bash
npm list
```

### Update All Packages
```bash
npm update
```

### Install Specific Package
```bash
npm install package-name
```

### Remove Package
```bash
npm uninstall package-name
```

## 🔍 Finding Your Local IP (for sharing on network)

### Mac/Linux
```bash
ifconfig | grep "inet "
# Look for 192.168.x.x or 10.x.x.x
```

### Windows
```bash
ipconfig
# Look for IPv4 Address
```

Then share: `http://YOUR-IP:3030`

## 💾 Git Commands Reference

### Check Status
```bash
git status
```

### View Changes
```bash
git diff
```

### View Commit History
```bash
git log --oneline
```

### Create New Branch
```bash
git checkout -b new-feature
```

### Switch Branches
```bash
git checkout main
```

### Undo Last Commit (keep changes)
```bash
git reset --soft HEAD~1
```

## 🎨 Editing Quick Start

### Edit Slide Content
```bash
# Open slides.md in your editor
code slides.md          # VS Code
nano slides.md          # Terminal editor
```

### Edit Components
```bash
# Open main component
code components/FutureCowSlide.vue
```

## 📱 Slidev Keyboard Shortcuts (During Presentation)

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `↑` / `↓` | First/Last slide |
| `F` | Fullscreen |
| `O` | Overview |
| `D` | Dark mode |
| `G` | Go to slide (type number) |
| `C` | Camera/Presenter mode |

## 🚨 Emergency Fixes

### Slidev Won't Start
```bash
# Full clean reinstall
rm -rf node_modules package-lock.json .slidev
npm install
npm run dev
```

### Git Conflicts
```bash
# Discard local changes and use GitHub version
git fetch origin
git reset --hard origin/main
```

### Corrupted Dependencies
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📞 Get Help

### Check Slidev Version
```bash
npm list @slidev/cli
```

### View All npm Scripts
```bash
npm run
```

### Open Project in VS Code
```bash
code .
```

---

**Pro Tip**: Keep this file open in a second terminal window for quick reference!

**Repository**: https://github.com/elisendarius/YOUR-REPO-NAME
