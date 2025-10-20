# 🚀 Quick Setup Checklist

Use this checklist to get your website live quickly!

## ✅ Pre-Launch Checklist

### 1. Calendly Integration
- [ ] Sign up for Calendly (if you haven't already)
- [ ] Create a 30-minute consultation event type
- [ ] Copy your Calendly scheduling link
- [ ] Replace `https://calendly.com/your-calendly-link` in `docs/index.html` (line ~205)

### 2. Social Media Links
Update all social media URLs in `docs/index.html` (lines ~218-245):
- [ ] YouTube: `https://youtube.com/@your-channel`
- [ ] TikTok: `https://tiktok.com/@your-account`
- [ ] Instagram: `https://instagram.com/your-account`
- [ ] Twitter: `https://twitter.com/your-account`

### 3. Content Customization
- [ ] Review and customize hero title (line ~34)
- [ ] Update company name "AI Sage Consulting" to your business name
- [ ] Replace example testimonials with real client quotes (lines ~171-198)
- [ ] Update trust indicators with your actual metrics (lines ~42-54)
- [ ] Customize problem cards to match your audience (lines ~61-82)
- [ ] Review and update solution features (lines ~95-116)

### 4. GitHub Pages Setup
- [ ] Go to repository Settings
- [ ] Navigate to "Pages" section
- [ ] Under "Build and deployment", select "GitHub Actions"
- [ ] Ensure repository is public (or have GitHub Pro for private repos)

### 5. Push to GitHub
```bash
git add .
git commit -m "Initial website setup"
git push origin main
```

### 6. Verify Deployment
- [ ] Check Actions tab for successful deployment
- [ ] Visit your site at: `https://YOUR-USERNAME.github.io/websiteCOLABproject/`
- [ ] Test on mobile device
- [ ] Test all navigation buttons
- [ ] Test Calendly booking widget

## 🎨 Optional Customizations

### Branding
- [ ] Add your logo image to docs folder
- [ ] Update logo in HTML to reference your image file
- [ ] Create and add favicon.ico
- [ ] Adjust color scheme in `styles.css` CSS variables

### SEO & Analytics
- [ ] Add Google Analytics tracking code
- [ ] Add Open Graph meta tags for social sharing
- [ ] Add Twitter Card meta tags
- [ ] Create and submit sitemap.xml
- [ ] Verify site with Google Search Console

### Advanced Features
- [ ] Add blog section if needed
- [ ] Integrate email newsletter signup
- [ ] Add live chat widget
- [ ] Set up contact form
- [ ] Add cookie consent banner (if required)

## 🧪 Testing Checklist

### Functionality
- [ ] All navigation buttons work
- [ ] Keyboard navigation (arrow keys, numbers 1-6)
- [ ] Mobile swipe navigation
- [ ] Calendly widget loads on CTA slide
- [ ] Social media links open in new tabs

### Accessibility
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Run Lighthouse accessibility audit (score 95+)
- [ ] Check color contrast ratios
- [ ] Test with zoom at 200%

### Responsive Design
- [ ] Desktop (1920px+)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Mobile landscape

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 📱 Content to Prepare

Before launch, have these ready:

1. **Business Information**
   - Company name and tagline
   - Service descriptions
   - Unique value propositions

2. **Social Proof**
   - 3+ client testimonials
   - Success metrics and statistics
   - Client company names/titles

3. **Media**
   - Logo (SVG or PNG, transparent background)
   - Favicon (32x32px)
   - Social media preview image (1200x630px)

4. **Links**
   - Calendly scheduling URL
   - All social media profile URLs
   - Terms of service (optional)
   - Privacy policy (optional)

## 🚨 Common Issues & Solutions

### Calendly Not Loading
**Problem**: Widget doesn't appear
**Solution**: 
1. Check browser console for errors
2. Verify Calendly URL is correct
3. Ensure you're on the CTA slide (slide 6)

### GitHub Pages 404 Error
**Problem**: Site shows 404
**Solution**:
1. Verify GitHub Actions completed successfully
2. Wait 2-3 minutes after first deployment
3. Check Pages settings use "GitHub Actions" source

### Mobile Navigation Issues
**Problem**: Slider doesn't work on mobile
**Solution**:
1. Clear browser cache
2. Test in incognito/private mode
3. Verify JavaScript loaded (check console)

### Links Don't Work
**Problem**: Social media links don't open
**Solution**:
1. Ensure URLs include `https://`
2. Check for typos in URLs
3. Test links individually

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Review GitHub Actions logs
3. Validate HTML: https://validator.w3.org/
4. Check accessibility: Chrome DevTools Lighthouse

---

## ⚡ Quick Commands Reference

```bash
# View files
ls docs/

# Edit a file
code docs/index.html

# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# View remote URL
git remote -v
```

---

**Good luck with your launch! 🎉**
