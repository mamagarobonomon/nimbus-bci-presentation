# Nimbus BCI Presentation - Deployment Guide

## 🚀 Quick Deployment Options

Your presentation is ready for permanent deployment! Choose any of the following options:

---

## Option 1: Netlify (Recommended) ⭐

**Easiest and fastest deployment with free tier**

### Steps:

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the entire `nimbus_deploy` folder (or the zip file)
3. Your site will be live instantly with a URL like: `https://random-name.netlify.app`
4. Optional: Set a custom domain in Netlify settings

### Features:

- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Custom domain support
- ✅ Instant deployment

---

## Option 2: Vercel

**Great for professional deployments**

### Steps:

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Sign up/login with GitHub
3. Import the git repository or upload files
4. Deploy with one click

### Features:

- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Edge network
- ✅ Analytics included

---

## Option 3: GitHub Pages

**Perfect if you use GitHub**

### Steps:

1. Create a new GitHub repository
2. Push the code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/nimbus-bci.git
   git branch -M main
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "main" branch and "/" root
5. Your site will be at: `https://YOUR_USERNAME.github.io/nimbus-bci/`

### Features:

- ✅ Free for public repos
- ✅ Automatic HTTPS
- ✅ Version control
- ✅ Custom domain support

---

## Option 4: Cloudflare Pages

**Best for performance**

### Steps:

1. Go to [https://pages.cloudflare.com/](https://pages.cloudflare.com/)
2. Sign up/login
3. Create a new project
4. Upload files or connect GitHub
5. Deploy

### Features:

- ✅ Free unlimited bandwidth
- ✅ Fastest CDN
- ✅ Automatic HTTPS
- ✅ Web analytics

---

## Option 5: Firebase Hosting

**Google's hosting solution**

### Steps:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

### Features:

- ✅ Free tier (10GB storage)
- ✅ Google infrastructure
- ✅ Custom domain
- ✅ SSL included

---

## Option 6: AWS S3 + CloudFront

**Enterprise-grade hosting**

### Steps:

1. Create S3 bucket with static website hosting
2. Upload all files
3. Set bucket policy for public read
4. Optional: Add CloudFront CDN
5. Configure custom domain with Route 53

### Features:

- ✅ Highly scalable
- ✅ Pay-as-you-go
- ✅ Full control
- ✅ Enterprise support

---

## Option 7: Manual Upload to Any Web Host

**Use your existing hosting**

### Steps:

1. Extract `nimbus_bci_production.zip`
2. Upload all files via FTP/SFTP to your web host
3. Ensure files are in the public_html or www directory
4. Access via your domain

### Requirements:

- Static file hosting
- No server-side processing needed
- Just HTML, CSS, JS, images

---

## 📦 What's Included

All deployment packages contain:

```
nimbus_deploy/
├── index.html                 # Main presentation file
├── CNAME                      # (optional) custom domain for GitHub Pages
├── .nojekyll                  # (optional) GitHub Pages
├── css/
│   └── styles.css             # External stylesheet
├── js/
│   └── script.js              # External JavaScript
├── assets/
│   ├── images/                # PNG/SVG used by the deck (keep entire folder)
│   └── video/
│       └── nimbus.mp4         # Thank you slide video
└── docs/                      # optional: DEPLOYMENT_GUIDE.md, CHANGELOG.md
```

**Total Size:** ~7.3 MB

---

## 🔧 Technical Requirements

- **No build process** required
- **No server-side** processing needed
- **Static hosting** only
- **Modern browser** support (Chrome, Firefox, Safari, Edge)

---

## ✅ Pre-Deployment Checklist

- [x] All images downloaded and included
- [x] External CSS and JS files linked correctly
- [x] All 16 slides present and functional
- [x] Navigation working (keyboard, mouse, touch)
- [x] Responsive design tested
- [x] Accessibility features implemented
- [x] SEO meta tags included
- [x] No console errors

---

## 🌐 Custom Domain Setup

After deploying, you can add a custom domain:

### For Netlify:

1. Go to Site Settings → Domain Management
2. Add custom domain (e.g., `pitch.nimbusbci.com`)
3. Update DNS records as instructed
4. SSL certificate auto-generated

### For GitHub Pages:

1. Add `CNAME` file with your domain
2. Update DNS with A records or CNAME
3. Enable HTTPS in settings

### For Cloudflare Pages:

1. Go to Custom Domains
2. Add domain
3. DNS automatically configured if using Cloudflare

---

## 📊 Recommended: Netlify Drop

**For the fastest deployment (< 1 minute):**

1. Visit: https://app.netlify.com/drop
2. Drag the `nimbus_deploy` folder
3. Done! Get instant URL

**No account needed for basic deployment!**

---

## 🆘 Troubleshooting

### Images not loading?

- Ensure `assets/images/` is deployed next to `index.html` with the same paths as in the repo
- Check file names match exactly (case-sensitive)

### CSS/JS not working?

- Verify `css/styles.css` and `js/script.js` exist relative to `index.html`
- Check browser console for errors

### Video not playing?

- Ensure `assets/video/nimbus.mp4` is uploaded
- Check browser supports MP4 format

---

## 📞 Support

For deployment issues:

- **Email:** support@nimbusbci.com
- **Website:** https://nimbusbci.com
- **LinkedIn:** https://linkedin.com/company/nimbusbci

---

## 📄 License

Copyright © 2025 Nimbus BCI. All rights reserved.

---

**Ready to deploy? Choose your preferred option above and go live in minutes!** 🚀
