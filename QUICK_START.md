# ⚡ Quick Start - Future Cow Presentation

Get up and running in 3 minutes!

## 📋 Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- Your cow image ready

## 🎯 3-Step Setup

### 1️⃣ Clone or Download

**Option A - Clone with Git:**
```bash
git clone https://github.com/elisendarius/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

**Option B - Download ZIP:**
- Click the green "Code" button on GitHub
- Select "Download ZIP"
- Extract and open the folder in terminal

### 2️⃣ Install & Add Image

```bash
# Install dependencies
npm install

# Add your cow image to public/cow.png
# (Just drag and drop cow.png into the public folder)
```

### 3️⃣ Run!

```bash
npm run dev
```

🎉 Open http://localhost:3030 in your browser!

## 🎮 Controls

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `F` | Fullscreen |
| `O` | Overview mode |
| `D` | Dark mode |
| `Click` pointer | Expand info |

## 📦 Build for Production

```bash
npm run build
```

Output in `dist/` folder - ready to deploy!

## 🚀 Deploy Options

### Netlify (Easiest)
1. Drag `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Done! Get instant URL

### GitHub Pages
1. Push `dist` folder contents
2. Settings → Pages → Enable
3. Get `username.github.io/repo-name`

### Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Cow not showing | Check `public/cow.png` exists |
| Port 3030 in use | Change port in package.json or close other Slidev |
| Dependencies error | Delete `node_modules`, run `npm install` |
| Build fails | Update Node.js to version 18+ |

## 📚 Next Steps

- Edit `slides.md` to add more slides
- Modify `components/FutureCowSlide.vue` for customization
- Check `README.md` for detailed documentation
- See `GITHUB_UPLOAD_GUIDE.md` for upload instructions

## 💡 Tips

- Use **Presenter Mode**: Press `O` then click camera icon
- **Export PDF**: Run `npm run export`
- **Remote Control**: Share presenter link (shown in presenter mode)
- **Recording**: Use OBS Studio for screen recording

---

**Need help?** Open an issue on GitHub or check the full README.md
