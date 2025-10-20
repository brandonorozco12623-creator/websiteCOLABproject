# AI Sage Consulting - Single Page Slider Website

A modern, accessible single-page slider website designed for an AI training and consulting business. Built with the Sage brand archetype and leveraging persuasion psychology principles.

## 🌟 Features

- **Single-page slider design** with 6 strategic sections
- **Sage brand archetype** - emphasizing wisdom, expertise, and knowledge
- **Persuasion methods** including authority, social proof, reciprocity, scarcity, and commitment
- **Calendly integration** for free 30-minute consultation bookings
- **Full WCAG 2.1 AA accessibility** compliance
- **Responsive design** - works on all devices
- **Keyboard navigation** - arrow keys, number shortcuts, and full tab navigation
- **Social media integration** - YouTube, TikTok, Instagram, Twitter
- **GitHub Pages deployment** with automated GitHub Actions

## 🚀 Quick Start

### Prerequisites

- A GitHub account
- Your Calendly scheduling link

### Setup Instructions

1. **Clone this repository**
   ```bash
   git clone https://github.com/brandonorozco12623-creator/websiteCOLABproject.git
   cd websiteCOLABproject
   ```

2. **Customize your Calendly link**
   Edit `docs/index.html` and find this line (around line 205):
   ```html
   <div class="calendly-inline-widget" 
        data-url="https://calendly.com/your-calendly-link"
   ```
   Replace `https://calendly.com/your-calendly-link` with your actual Calendly URL.

3. **Update social media links**
   Edit `docs/index.html` and update the social media links in the footer (around lines 218-245):
   - YouTube: Replace `https://youtube.com/@your-channel`
   - TikTok: Replace `https://tiktok.com/@your-account`
   - Instagram: Replace `https://instagram.com/your-account`
   - Twitter: Replace `https://twitter.com/your-account`

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy on the next push to main

5. **Push your changes**
   ```bash
   git add .
   git commit -m "Customize website content and links"
   git push origin main
   ```

6. **Access your site**
   Your site will be available at: `https://brandonorozco12623-creator.github.io/websiteCOLABproject/`

## 📋 Sections Overview

### Slide 1: Hero Section
- **Archetype**: Authority & Aspiration
- **Persuasion**: Social proof through trust indicators
- Features compelling headline and statistics to build credibility

### Slide 2: Problem/Challenge
- **Archetype**: Sage's understanding of obstacles
- **Persuasion**: Fear of loss & reciprocity
- Identifies pain points that resonate with the target audience

### Slide 3: Solution
- **Archetype**: Wisdom and guidance
- **Persuasion**: Authority through expertise
- Presents comprehensive service offerings

### Slide 4: Methodology
- **Archetype**: Structured learning path
- **Persuasion**: Consistency & commitment
- Shows the proven 4-step process

### Slide 5: Social Proof
- **Archetype**: Shared wisdom and success
- **Persuasion**: Social proof & testimonials
- Real client testimonials and success metrics

### Slide 6: Call to Action
- **Archetype**: Beginning of the journey
- **Persuasion**: Scarcity & reciprocity (free consultation)
- Calendly booking widget for scheduling

## 🎨 Customization

### Colors
Edit CSS variables in `docs/styles.css` (lines 1-20):
```css
:root {
    --color-primary: #2c3e50;
    --color-accent: #3498db;
    /* ... more variables */
}
```

### Content
All content can be edited in `docs/index.html`. Each slide is clearly marked with comments.

### Fonts
Current fonts:
- Headings: 'Crimson Text' (serif)
- Body: 'Lato' (sans-serif)

To change fonts, update the Google Fonts link in `docs/index.html` (line 10) and the CSS variables.

## ♿ Accessibility Features

- WCAG 2.1 AA compliant
- Full keyboard navigation support
- Screen reader optimized with ARIA labels
- High contrast mode support
- Reduced motion support for users with vestibular disorders
- Skip navigation link
- Focus management and visible focus indicators
- Semantic HTML structure

### Keyboard Shortcuts
- `Arrow Keys` or `1-6`: Navigate between slides
- `Home`: Go to first slide
- `End`: Go to last slide
- `Tab`: Navigate through interactive elements
- `Escape`: Return to home slide

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small mobile: Below 480px

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No dependencies
- **Calendly**: Embedded scheduling widget
- **GitHub Actions**: Automated deployment

## 📁 File Structure

```
websiteCOLABproject/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── docs/
│   ├── index.html              # Main HTML file
│   ├── styles.css              # Stylesheet
│   └── script.js               # JavaScript functionality
├── README.md
└── WEBSITE-README.md           # This file
```

## 🚨 Important Notes

### Before Going Live

1. ✅ Replace all placeholder content with your actual business information
2. ✅ Update Calendly link with your scheduling URL
3. ✅ Add real social media URLs
4. ✅ Replace example testimonials with real client testimonials
5. ✅ Update trust indicators with accurate metrics
6. ✅ Add your actual logo if desired
7. ✅ Test all links and buttons
8. ✅ Test on multiple devices and browsers
9. ✅ Run accessibility audit (Chrome DevTools Lighthouse)

### SEO Optimization (Recommended)

Add to `docs/index.html` `<head>`:
```html
<!-- Open Graph Meta Tags -->
<meta property="og:title" content="AI Sage Consulting">
<meta property="og:description" content="Expert AI training and consulting">
<meta property="og:image" content="URL_TO_YOUR_PREVIEW_IMAGE">
<meta property="og:url" content="YOUR_SITE_URL">

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AI Sage Consulting">
<meta name="twitter:description" content="Expert AI training and consulting">
<meta name="twitter:image" content="URL_TO_YOUR_PREVIEW_IMAGE">

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png">
```

## 🧪 Testing

### Accessibility Testing
1. Use Chrome DevTools Lighthouse
2. Test with a screen reader (NVDA, JAWS, or VoiceOver)
3. Navigate using only keyboard
4. Test with high contrast mode enabled

### Browser Testing
Test on:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Analytics

To add Google Analytics, insert before the closing `</head>` tag in `docs/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🐛 Troubleshooting

### GitHub Pages not deploying
1. Check Actions tab for error messages
2. Ensure GitHub Pages is set to use "GitHub Actions" as source
3. Verify the workflow file is in `.github/workflows/`

### Calendly not loading
1. Verify your Calendly URL is correct
2. Check browser console for errors
3. Ensure Calendly script is loading (check Network tab)

### Styling issues
1. Clear browser cache
2. Check CSS file path in HTML
3. Verify CSS file is in the docs folder

## 📄 License

This project is created for AI Sage Consulting. Customize as needed for your business.

## 🤝 Support

For questions or issues, please open an issue in this repository.

---

**Built with wisdom and expertise** 🧙‍♂️
