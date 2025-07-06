# 🚀 Deployment Guide for Petunia the Pig Website

This guide provides step-by-step instructions for deploying your React.js website to different hosting platforms.

## 📋 Prerequisites

- Git repository with your code
- Node.js installed locally
- Account on your chosen hosting platform

---

## 🌟 自定义域名部署指南

## 📋 前置条件
- 已在Namecheap购买域名
- 项目代码已准备就绪
- 有GitHub账号

---

## 🌟 方案一：Vercel (推荐 - 免费且简单)

### Step 1: 准备代码
```bash
# 确保代码可以正常构建
npm run build

# 提交代码到GitHub (如果还没有)
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: 部署到Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择您的 `allinbonk` 仓库
5. 保持默认设置，点击 "Deploy"
6. 等待部署完成（通常1-2分钟）

### Step 3: 配置自定义域名
1. 在Vercel项目页面，点击 "Settings"
2. 在左侧菜单选择 "Domains"
3. 输入您的域名（例如：`yoursite.com`）
4. 点击 "Add"
5. Vercel会显示需要配置的DNS记录

### Step 4: 在Namecheap配置DNS
1. 登录 [namecheap.com](https://namecheap.com)
2. 进入 "Domain List" → 点击您的域名 → "Manage"
3. 选择 "Advanced DNS" 标签
4. 添加以下记录：

**A记录配置：**
```
Type: A Record
Host: @
Value: 76.76.19.19
TTL: Automatic

Type: A Record
Host: www
Value: 76.76.19.19
TTL: Automatic
```

**或者CNAME配置（Vercel推荐）：**
```
Type: CNAME Record
Host: @
Value: cname.vercel-dns.com
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

### Step 5: 验证部署
1. 等待DNS传播（5-30分钟）
2. 访问您的域名
3. 确认网站正常显示

---

## 🌐 方案二：Netlify

### Step 1: 部署到Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 使用GitHub登录
3. "New site from Git" → 选择GitHub → 选择仓库
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `build`
5. 点击 "Deploy site"

### Step 2: 添加自定义域名
1. 在Netlify站点设置中选择 "Domain management"
2. 点击 "Add custom domain"
3. 输入您的域名
4. 按照提示在Namecheap配置DNS

---

## 🔧 方案三：GitHub Pages + 自定义域名

### Step 1: 配置GitHub Pages
```bash
# 安装gh-pages
npm install --save-dev gh-pages

# 在package.json添加homepage字段
"homepage": "https://yourdomain.com"
```

### Step 2: 部署脚本
```bash
# 构建并部署
npm run build
npm run deploy
```

### Step 3: 配置域名
1. 在GitHub仓库 Settings → Pages
2. 在Custom domain输入您的域名
3. 在Namecheap配置CNAME指向：`yourusername.github.io`

---

## ⚡ 快速启动 (推荐Vercel)

1. **现在就开始部署：**
```bash
# 1. 确保代码最新
git add .
git commit -m "Ready for custom domain deployment"
git push origin main

# 2. 访问 vercel.com 开始部署
```

2. **域名示例配置：**
   - 如果您的域名是 `allinbonk.com`
   - 在Vercel添加 `allinbonk.com` 和 `www.allinbonk.com`
   - 在Namecheap配置相应的A/CNAME记录

---

## 🎯 预期效果

部署成功后，用户可以通过您的自定义域名访问：
- 🖼️ Allin Bonk大图展示
- 📋 一键复制CA地址
- 🔗 社交媒体链接
- 📱 完美的移动端体验

---

## 🆘 常见问题

**Q: DNS多久生效？**
A: 通常5-30分钟，最多48小时

**Q: www和非www都要配置吗？**
A: 建议都配置，Vercel会自动重定向

**Q: 免费吗？**
A: Vercel对个人项目完全免费

**Q: 支持HTTPS吗？**
A: Vercel自动提供免费SSL证书

---

## 📞 需要帮助？

如果在部署过程中遇到问题，请告诉我：
1. 您的域名是什么
2. 选择了哪个部署方案
3. 在哪一步遇到了问题

我会为您提供具体的解决方案！

---

## 🌐 GitHub Pages Deployment

### Step 1: Prepare Your Repository

1. Make sure your code is pushed to GitHub
2. Update the `homepage` field in `package.json`:
```json
{
  "homepage": "https://your-username.github.io/allinbonk"
}
```

### Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 3: Add Deploy Scripts

Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Step 4: Deploy

```bash
npm run deploy
```

Or use the provided script:
```bash
./deploy.sh
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Select "gh-pages" branch as source
5. Your site will be available at `https://your-username.github.io/allinbonk`

---

## ⚡ Vercel Deployment

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect React and deploy

**Configuration**: The `vercel.json` file is already included for optimal settings.

---

## 🌍 Netlify Deployment

### Method 1: Drag & Drop

1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `build` folder to the deployment area

### Method 2: Git Integration

1. Connect Netlify to your GitHub account
2. Select your repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

---

## 🔄 Continuous Deployment

### GitHub Actions (for GitHub Pages)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

---

## 🛠️ Troubleshooting

### Common Issues

1. **Blank page after deployment**
   - Check the `homepage` field in package.json
   - Ensure all paths are relative

2. **404 errors on refresh**
   - Add a `_redirects` file for Netlify
   - Configure redirects in your hosting settings

3. **Build fails**
   - Check Node.js version compatibility
   - Clear cache: `npm clean-install`

### Build Optimization

1. **Reduce bundle size**:
   - Use code splitting
   - Optimize images
   - Remove unused dependencies

2. **Performance**:
   - Enable compression in hosting settings
   - Use CDN for static assets

---

## 📊 Monitoring

After deployment, monitor your site:

- **Google Analytics**: Add tracking code
- **Vercel Analytics**: Built-in analytics
- **Lighthouse**: Check performance scores

---

## 🔒 Custom Domain (Optional)

### For GitHub Pages:
1. Add `CNAME` file to public folder
2. Configure DNS records
3. Enable HTTPS in repository settings

### For Vercel/Netlify:
1. Add domain in dashboard
2. Configure DNS as instructed
3. SSL is automatic

---

Need help? Check the hosting platform's documentation or create an issue in the repository!
