# 🐷 Petunia the Pig Website

A React.js website for Petunia the Pig - your favorite pig companion! This is a modern, responsive website built with React.js that can be easily deployed to GitHub Pages or Vercel.

## 🌟 Features

- **Modern React.js**: Built with the latest React.js and modern JavaScript
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Cute and friendly design with smooth animations
- **Complete Website**: Includes Home, About, Services, Care Tips, Gallery, and Contact sections
- **Easy to Deploy**: Ready for GitHub Pages or Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd allinbonk
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🌐 Deployment Options

### Option 1: Deploy to GitHub Pages

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to your package.json:
```json
{
  "homepage": "https://yourusername.github.io/allinbonk",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 2: Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

Or simply connect your GitHub repository to Vercel dashboard for automatic deployments.

### Option 3: Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

## 🎨 Customization

### Colors
The main color scheme uses pink/coral colors. You can change these in `src/App.css`:
- Primary color: `#ff6b9d`
- Secondary color: `#ffa07a`

### Content
All content can be easily modified in `src/App.js`. Simply update the text, sections, or add new components as needed.

### Images
Replace the emoji placeholders with actual images by:
1. Adding images to the `public` folder
2. Updating the `src` attributes in the components

## 📱 Sections Included

- **Header Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Welcome banner with floating animation
- **About Section**: Information about Petunia with stats
- **Services Section**: Pig boarding, training, healthcare, and nutrition
- **Care Tips Section**: Essential pig care information
- **Gallery Section**: Photo gallery (ready for real images)
- **Contact Section**: Contact form and information
- **Footer**: Links and additional information

## 🛠️ Technologies Used

- React.js 18
- CSS3 with Flexbox and Grid
- Responsive Design
- Smooth Scrolling
- CSS Animations

## 📧 Contact

If you need help with customization or have questions, feel free to reach out!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for pig lovers everywhere! 🐷
