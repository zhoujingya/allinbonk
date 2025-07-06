#!/bin/bash

echo "🐷 Deploying Petunia the Pig website..."

# Check if gh-pages is installed
if ! npm list gh-pages --depth=0 > /dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d build

echo "✅ Deployment complete! Your website should be live at:"
echo "https://yourusername.github.io/allinbonk"
echo ""
echo "Don't forget to:"
echo "1. Replace 'yourusername' with your actual GitHub username"
echo "2. Update the homepage field in package.json"
echo "3. Enable GitHub Pages in your repository settings"
