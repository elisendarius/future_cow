# Quick Start Guide

## Installation Steps

### Step 1: Extract the Project
Extract the `slidev-export` folder to your desired location.

### Step 2: Open Terminal
Navigate to the project folder:
```bash
cd slidev-export
```

### Step 3: Install Node.js
If you don't have Node.js installed:
- Download from: https://nodejs.org/
- Install version 18 or higher
- Verify installation: `node --version`

### Step 4: Install Dependencies
Run this command in the project folder:
```bash
npm install
```

This will download all required packages (~200MB). It may take 2-5 minutes.

### Step 5: Add Your Cow Image

**CRITICAL STEP - Don't skip this!**

1. Create a `public` folder in the project root if it doesn't exist
2. Save your cow image as `cow.png`
3. Place it in: `slidev-export/public/cow.png`

Your structure should look like:
```
slidev-export/
├── components/
├── public/
│   └── cow.png          ← YOUR IMAGE HERE
├── setup/
├── slides.md
└── package.json
```

### Step 6: Start the Presentation
```bash
npm run dev
```

The presentation will open in your browser at `http://localhost:3030`

### Step 7: Navigate the Slides
- Use **arrow keys** or **space bar** to navigate
- Press **F** for fullscreen
- Press **O** for overview
- **Click** on info pointers to expand them

## Building for Production

To create a static version you can host anywhere:

```bash
npm run build
```

The output will be in the `dist/` folder. Upload this folder to any web hosting service.

## Export to PDF

```bash
npm run export
```

This creates a PDF version of your presentation.

## Common Issues

### "Cannot find module" error
**Solution**: Run `npm install` again

### Cow image not showing
**Solution**: Make sure the image is at `public/cow.png` (not `public/images/cow.png`)

### Port 3030 already in use
**Solution**: Close other Slidev instances or change the port in `package.json`

### Animations not smooth
**Solution**: Close other applications, use a modern browser (Chrome/Firefox/Edge)

## Need Help?

Check the main README.md for more detailed information.
