# Future Cow Slidev Presentation

A dynamic, interactive presentation about "The Future Cow" built with Slidev and Vue.

[![Slidev](https://img.shields.io/badge/Slidev-Presentation-blue)](https://sli.dev/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-green)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## 🚀 Features

- ✨ Interactive info pointers with smooth animations
- 🎯 Click to expand detailed information
- 📱 Responsive design
- 🎨 Modern, minimalistic styling
- 🖼️ Beautiful gradient backgrounds
- ⚡ Built with Vue 3 and @vueuse/motion

## 📸 Preview

The presentation features a central cow illustration surrounded by six interactive information points covering:
- Smart Sensors & IoT monitoring
- Sustainable feed optimization
- Genetic excellence
- Climate adaptation
- Milk innovation
- Welfare technology

## 🎬 Live Demo

Coming soon! (Deploy to GitHub Pages or Netlify)

## ⚡ Quick Start

### From GitHub (3 Steps)

```bash
# 1. Clone this repository
git clone https://github.com/elisendarius/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

# 2. Install dependencies
npm install

# 3. Add your cow.png to public folder, then run
npm run dev
```

🎉 Open http://localhost:3030 in your browser!

📚 **Detailed guides available:**
- **[HOW_TO_RUN.md](HOW_TO_RUN.md)** - Complete running instructions
- **[TERMINAL_COMMANDS.md](TERMINAL_COMMANDS.md)** - Command reference
- **[QUICK_START.md](QUICK_START.md)** - Fast setup
- **[INSTALLATION.md](INSTALLATION.md)** - Installation details

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add the Cow Image

**IMPORTANT**: Before running the project, you need to add the cow image:

1. Save your cow image as `cow.png`
2. Place it in the `public/` folder (create the folder if it doesn't exist)
3. The path should be: `public/cow.png`

### 3. Run the Development Server

```bash
npm run dev
```

This will start Slidev on `http://localhost:3030`

### 4. Build for Production

```bash
npm run build
```

The built presentation will be in the `dist/` folder.

### 5. Export to PDF

```bash
npm run export
```

This will generate a PDF of your slides.

## Project Structure

```
future-cow-slidev/
├── components/
│   ├── CowIllustration.vue      # Cow image component
│   ├── InfoPointer.vue           # Interactive info pointer
│   └── FutureCowSlide.vue        # Main slide component
├── public/
│   └── cow.png                   # (YOU NEED TO ADD THIS)
├── slides.md                     # Main presentation file
├── package.json
└── README.md
```

## Customization

### Edit the Presentation Content

Open `slides.md` to:
- Add more slides
- Change the theme
- Modify transitions
- Update content

### Modify the Future Cow Slide

Edit `components/FutureCowSlide.vue` to:
- Change info point content
- Adjust positioning
- Modify animations
- Update styling

### Change Info Pointers

Edit the `infoPoints` array in `FutureCowSlide.vue`:

```javascript
const infoPoints = [
  {
    title: 'Your Title',
    description: 'Your description',
    position: 'top-left', // or 'top-right', 'bottom-left', etc.
    delay: 0.3,
  },
  // Add more points...
]
```

## Navigation

- Press `Space` or `→` to go to the next slide
- Press `←` to go to the previous slide
- Press `F` for fullscreen
- Press `O` for overview mode
- Press `D` for dark mode

## Interactive Features

On the Future Cow slide:
- Click on any info pointer to expand/collapse details
- Info pointers animate in sequence
- Pulsing animations on pointer dots

## Learn More

- [Slidev Documentation](https://sli.dev/)
- [Vue.js Documentation](https://vuejs.org/)
- [@vueuse/motion Documentation](https://motion.vueuse.org/)

## Troubleshooting

**Issue**: Cow image not showing
- **Solution**: Make sure `cow.png` is in the `public/` folder

**Issue**: Animations not working
- **Solution**: Ensure `@vueuse/motion` is installed: `npm install @vueuse/motion`

**Issue**: Build fails
- **Solution**: Delete `node_modules/` and run `npm install` again

## License

MIT
