# 🚀 How to Run the Future Cow Presentation from GitHub

Complete guide to run your Slidev presentation after uploading to GitHub.

## 📥 Method 1: Clone from GitHub (Recommended)

### Step 1: Clone the Repository

Open your terminal and run:

```bash
# Replace YOUR-REPO-NAME with your actual repository name
git clone https://github.com/elisendarius/YOUR-REPO-NAME.git

# Navigate into the project
cd YOUR-REPO-NAME
```

### Step 2: Install Dependencies

```bash
npm install
```

This will download all required packages (~200MB). Takes 2-5 minutes.

### Step 3: Add Your Cow Image

**CRITICAL**: Add your cow image before running!

```bash
# The public folder should already exist
# Copy your cow image into it:
# - Image must be named: cow.png
# - Place in: public/cow.png
```

On **Mac/Linux**:
```bash
cp /path/to/your/cow.png public/cow.png
```

On **Windows**:
```bash
copy C:\path\to\your\cow.png public\cow.png
```

Or just drag and drop `cow.png` into the `public` folder!

### Step 4: Run Slidev

```bash
npm run dev
```

✅ **Success!** Your presentation opens at: http://localhost:3030

## 📥 Method 2: Download ZIP from GitHub

### Step 1: Download

1. Go to your GitHub repository page
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Extract the ZIP file to your desired location

### Step 2-4: Same as Method 1

Follow steps 2-4 from Method 1 above.

## 🎮 Using the Presentation

### Navigation Controls

| Key/Action | Function |
|------------|----------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `↑` / `↓` | Navigate slides |
| `F` | Toggle fullscreen |
| `O` | Overview mode (see all slides) |
| `D` | Toggle dark mode |
| Click pointer | Expand/collapse info |

### Presenter Mode

1. Press `O` to open overview
2. Click the **camera icon** in the bottom right
3. Opens presenter view in new window with:
   - Current slide
   - Next slide preview
   - Speaker notes
   - Timer

### Recording Your Presentation

1. Use **OBS Studio** (free): https://obsproject.com/
2. Or **Loom**: https://loom.com/
3. Or built-in screen recording:
   - **Mac**: Cmd + Shift + 5
   - **Windows**: Win + G

## 📦 Building for Distribution

### Build Static Files

```bash
npm run build
```

Output is in `dist/` folder - ready to deploy to any static hosting!

### Export to PDF

```bash
npm run export
```

Creates a PDF version of your slides.

## 🌐 Deploy Online

### Option 1: Netlify (Easiest)

```bash
# Build first
npm run build

# Then drag the dist folder to:
# https://app.netlify.com/drop
```

Instant live URL! ✨

### Option 2: GitHub Pages

1. Build your presentation:
   ```bash
   npm run build
   ```

2. Push the `dist` folder contents to a `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   cp -r dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. Enable GitHub Pages:
   - Go to repository **Settings** → **Pages**
   - Source: `gh-pages` branch
   - Save

4. Access at: `https://elisendarius.github.io/YOUR-REPO-NAME/`

### Option 3: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Follow the prompts, get instant URL!

## 🔧 Customizing Your Presentation

### Add More Slides

Edit `slides.md`:

```markdown
---

# New Slide Title

Your content here

- Bullet point
- Another point

---
```

### Modify Info Pointers

Edit `components/FutureCowSlide.vue`, find the `infoPoints` array:

```javascript
const infoPoints = [
  {
    title: 'Your New Title',
    description: 'Your new description here',
    position: 'top-left', // positions: top-left, top-right, left, right, bottom-left, bottom-right
    delay: 0.3, // animation delay in seconds
  },
  // Add more...
]
```

### Change Styling

Edit colors and styles in the component files:
- `components/FutureCowSlide.vue` - Main slide styling
- `components/InfoPointer.vue` - Pointer styling
- `slides.md` - Slide-specific styling

### Change Theme

In `slides.md`, modify the frontmatter:

```markdown
---
theme: default  # Try: seriph, apple-basic, shibainu, etc.
background: white
transition: slide-left  # Try: fade, slide-up, etc.
---
```

Available themes: https://sli.dev/themes/gallery.html

## 🆘 Troubleshooting

### Cow Image Not Showing

✅ **Check**:
```bash
ls public/cow.png  # Should show the file
```

If missing:
```bash
# Add your image
cp /path/to/cow.png public/cow.png
```

### Port 3030 Already in Use

**Option A**: Stop other Slidev instances
```bash
# Find and kill the process
lsof -ti:3030 | xargs kill
```

**Option B**: Use a different port
Edit `package.json`:
```json
"scripts": {
  "dev": "slidev --port 3031"
}
```

### Dependencies Error

```bash
# Clear everything and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

**Check Node.js version**:
```bash
node --version  # Should be 18 or higher
```

If lower, update Node.js: https://nodejs.org/

### Animations Not Working

Make sure `@vueuse/motion` is installed:
```bash
npm install @vueuse/motion
```

### Hot Reload Not Working

Restart the dev server:
```bash
# Stop with Ctrl+C
# Then restart
npm run dev
```

## 🎯 Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server (http://localhost:3030)

# Building
npm run build        # Build for production → dist/
npm run export       # Export to PDF

# Deployment
vercel --prod        # Deploy to Vercel
netlify deploy       # Deploy to Netlify
```

## 📱 Sharing Your Presentation

### Share Development Version (Local Network)

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Find your local IP:
   - **Mac/Linux**: `ifconfig | grep inet`
   - **Windows**: `ipconfig`

3. Share URL: `http://YOUR-IP:3030`

Others on same WiFi can access it!

### Share Production Version

Deploy to Netlify/Vercel/GitHub Pages, then share the URL:
- `https://your-site.netlify.app`
- `https://your-site.vercel.app`
- `https://elisendarius.github.io/your-repo`

## 📚 Additional Resources

- **Slidev Docs**: https://sli.dev/
- **Vue 3 Docs**: https://vuejs.org/
- **Vueuse Motion**: https://motion.vueuse.org/
- **Slidev Themes**: https://sli.dev/themes/gallery.html
- **Slidev Addons**: https://sli.dev/addons/use.html

## 💡 Pro Tips

1. **Auto-reload**: Slidev auto-reloads when you edit files!
2. **Mobile Control**: Use your phone as remote - press `O` then scan QR code
3. **Drawing Mode**: Press `D` key to enable drawing on slides
4. **Record Mode**: Use presenter view + screen recording for videos
5. **Export Options**: Can export to PDF, PNG, or static SPA

## 🎬 Next Steps

1. ✅ Clone/download repository
2. ✅ Install dependencies
3. ✅ Add cow.png to public folder
4. ✅ Run `npm run dev`
5. ✅ Customize slides.md
6. ✅ Deploy online (optional)
7. ✅ Share with the world! 🌍

---

**Need Help?** Check the other documentation files:
- `README.md` - Project overview
- `INSTALLATION.md` - Detailed setup
- `QUICK_START.md` - Fast setup guide
- `GITHUB_UPLOAD_GUIDE.md` - Upload instructions

**Questions?** Open an issue on GitHub!

**Repository**: https://github.com/elisendarius/YOUR-REPO-NAME
