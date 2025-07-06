# Namecheap 域名配置指南

## 第一步：在 Vercel 部署您的项目

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账户登录

2. **导入项目**
   - 点击 "New Project"
   - 选择您的 GitHub 仓库 (allinbonk)
   - 保持默认设置，点击 "Deploy"

3. **获取 Vercel 域名**
   - 部署完成后，您会得到一个类似 `your-project-name.vercel.app` 的域名
   - 记住这个域名，稍后需要用到

## 第二步：在 Namecheap 配置 DNS

### 方法一：使用 Vercel 的 DNS 记录（推荐）

1. **登录 Namecheap**
   - 访问 [namecheap.com](https://namecheap.com)
   - 登录您的账户

2. **进入域名管理**
   - 在 Dashboard 中找到您的域名
   - 点击 "Manage" 按钮

3. **配置 DNS 记录**
   - 点击 "Advanced DNS" 标签
   - 删除现有的 A 记录和 CNAME 记录（如果有）
   - 添加以下记录：

   ```
   记录类型: A 记录
   主机: @
   值: 76.76.19.19
   TTL: 1800

   记录类型: A 记录
   主机: @
   值: 76.76.21.21
   TTL: 1800

   记录类型: CNAME
   主机: www
   值: cname.vercel-dns.com
   TTL: 1800
   ```

### 方法二：使用 CNAME 记录（简单方法）

如果您不想使用 A 记录，可以使用 CNAME：

```
记录类型: CNAME
主机: @
值: your-project-name.vercel.app
TTL: 1800

记录类型: CNAME
主机: www
值: your-project-name.vercel.app
TTL: 1800
```

**注意**: 有些DNS提供商不支持根域名(@)的CNAME记录，如果遇到问题请使用方法一。

## 第三步：在 Vercel 添加自定义域名

1. **进入项目设置**
   - 在 Vercel Dashboard 中找到您的项目
   - 点击项目名称进入项目页面
   - 点击 "Settings" 标签

2. **添加域名**
   - 点击左侧的 "Domains"
   - 在输入框中输入您的域名（例如：`yourdomain.com`）
   - 点击 "Add"

3. **验证域名**
   - Vercel 会自动检测您的 DNS 配置
   - 如果配置正确，会显示 "Valid Configuration"
   - 如果有问题，会显示错误信息和修复建议

4. **添加 www 子域名**
   - 重复上述步骤，添加 `www.yourdomain.com`

## 第四步：等待 DNS 传播

- DNS 更改通常需要 24-48 小时才能完全生效
- 您可以使用以下工具检查 DNS 传播状态：
  - [whatsmydns.net](https://www.whatsmydns.net/)
  - [dnschecker.org](https://dnschecker.org/)

## 第五步：验证部署

1. **检查网站**
   - 在浏览器中访问您的域名
   - 确认网站正常显示

2. **检查 HTTPS**
   - Vercel 会自动为您的域名配置 SSL 证书
   - 确保 `https://yourdomain.com` 正常工作

## 常见问题解决

### DNS 配置不生效
- 清除浏览器缓存
- 尝试无痕浏览模式
- 检查 DNS 记录是否正确输入

### Vercel 显示 "Invalid Configuration"
- 确认 DNS 记录已正确添加
- 等待 DNS 传播（可能需要几小时）
- 检查 TTL 设置是否过高

### 网站无法访问
- 确认 Vercel 项目已成功部署
- 检查域名是否正确配置
- 尝试访问 `www.yourdomain.com` 和 `yourdomain.com`

## 高级配置（可选）

### 设置域名重定向
如果您想要 www 版本重定向到非 www 版本（或相反）：

1. 在 Vercel 的 Domains 设置中
2. 点击域名旁边的设置按钮
3. 选择 "Redirect to" 选项
4. 设置重定向目标

### 自定义 404 页面
在项目根目录创建 `public/404.html` 文件来自定义 404 页面。

## 联系支持

如果遇到问题：
- **Namecheap 支持**: 通过 Live Chat 或提交工单
- **Vercel 支持**: 访问 [vercel.com/support](https://vercel.com/support)
- **DNS 检查工具**: 使用在线工具验证 DNS 配置

完成以上步骤后，您的域名就会指向您的 React 应用了！🎉
