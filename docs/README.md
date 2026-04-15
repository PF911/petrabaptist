# Petra Baptist Church Website Template

A modern, responsive church website template built with HTML5, CSS3, and vanilla JavaScript. This template is designed to be easily customizable and can be deployed to GitHub Pages or any static hosting service.

## Features

✨ **Modern & Professional Design**
- Clean, welcoming aesthetic appropriate for church websites
- Distinctive typography using Crimson Pro and Montserrat fonts
- Professional color scheme with easy customization
- Smooth animations and transitions

📱 **Fully Responsive**
- Optimized for desktop, tablet, and mobile devices
- Mobile-friendly navigation with hamburger menu
- Touch-friendly interface elements

🎨 **Easy Customization**
- CSS variables for quick color/font changes
- Well-organized, commented code
- Semantic HTML structure
- Modular sections

⚡ **Performance Optimized**
- Fast loading times
- Efficient animations
- Optimized images
- Clean, minimal JavaScript

## Sections Included

1. **Hero Section** - Eye-catching welcome banner with call-to-action buttons
2. **Service Times** - Display weekly service and event times
3. **About Us** - Share your church's mission, beliefs, and history
4. **Ministries** - Showcase different ministry programs
5. **Events** - Highlight upcoming church events
6. **Sermons** - Feature recent sermons with links to video/audio
7. **Contact** - Contact form, location info, and map
8. **Footer** - Quick links and social media connections

## Quick Start

### 1. Download the Template
Download all files to your local computer:
- `index.html` - Main HTML file
- `styles.css` - All styling
- `script.js` - Interactive features
- `church.png` - Church building image

### 2. Customize Content

#### Update Church Information
Edit `index.html` and replace placeholder text with your church's information:

```html
<!-- Update church name -->
<span>Your Church Name</span>

<!-- Update address -->
<p>[Your Church Address]<br>St. Augustine, FL [ZIP]</p>

<!-- Update phone and email -->
<p>(XXX) XXX-XXXX</p>
<p>info@yourchurch.com</p>
```

#### Customize Colors
Edit the CSS variables in `styles.css` (lines 8-24):

```css
:root {
    /* Change these to match your church's brand */
    --primary-color: #2c5f7c;      /* Main brand color */
    --secondary-color: #c8a882;    /* Accent color */
    --accent-color: #8b4513;       /* Tertiary color */
}
```

#### Update Images
1. Replace `church.png` with your church's photo
2. Add your church logo/favicon as `favicon.png`
3. For sermon thumbnails, you can add images or use the gradient placeholders

### 3. Customize Fonts (Optional)

The template uses Google Fonts. To change fonts, edit the `<link>` tag in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Then update the CSS variables:
```css
--font-display: 'YourDisplayFont', serif;
--font-body: 'YourBodyFont', sans-serif;
```

### 4. Add Your Domain

Update the links in `index.html` to use your domain:
- Update social media links (Facebook, Instagram, YouTube, Twitter)
- Update the email address in the contact form
- Update any internal links as needed

## Deploying to GitHub Pages

### Method 1: Simple Upload

1. Create a new GitHub repository named `petrabaptist.space` (or your domain)
2. Upload all files to the repository
3. Go to Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select `main` branch and `/ (root)` folder
6. Click Save
7. Your site will be live at `https://yourusername.github.io/repository-name`

### Method 2: Using Git Command Line

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Church website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in your repository settings.

## Custom Domain Setup (petrabaptist.space)

1. In your GitHub repository, go to Settings → Pages
2. Under "Custom domain", enter `petrabaptist.space`
3. Click Save

4. In your domain registrar (where you bought petrabaptist.space):
   - Add a CNAME record pointing to `yourusername.github.io`
   - OR add these A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

5. Wait for DNS propagation (can take up to 24-48 hours)

## Customization Guide

### Adding New Sections

To add a new section:

1. Add HTML in `index.html`:
```html
<section class="your-section section" id="your-id">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Your Title</h2>
            <div class="section-divider"></div>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

2. Add navigation link:
```html
<li><a href="#your-id" class="nav-link">Your Section</a></li>
```

3. Add custom styles in `styles.css` if needed

### Connecting a Contact Form

The contact form currently shows an alert. To make it functional:

**Option 1: Formspree (Easy, Free)**
```html
<form class="contact-form" action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

**Option 2: Netlify Forms (If hosting on Netlify)**
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

**Option 3: Custom Backend**
Modify the JavaScript in `script.js` to send data to your server endpoint.

### Adding Google Maps

Replace the contact section's content with:

```html
<div class="map-container">
    <iframe 
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

Get your embed code from Google Maps by searching for your address and clicking "Share" → "Embed a map".

### Adding Video Sermons

To embed YouTube videos:

```html
<div class="sermon-video">
    <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
petra-baptist-website/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── church.png          # Church building image
├── favicon.png         # Website icon (optional)
└── README.md           # This file
```

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before uploading
   - Recommended tools: TinyPNG, Squoosh

2. **Minimize CSS/JS** (for production)
   - Use online minifiers before deploying
   - Consider using a build tool like Gulp or Webpack

3. **Enable Caching**
   - GitHub Pages automatically handles this
   - For custom hosting, configure appropriate cache headers

## Troubleshooting

**Menu not working on mobile?**
- Make sure `script.js` is properly linked
- Check browser console for JavaScript errors

**Images not loading?**
- Verify file paths are correct
- Check that image files are in the same directory
- Ensure filenames match exactly (case-sensitive)

**Fonts not loading?**
- Check your internet connection
- Verify Google Fonts link is correct
- Try a different font as fallback

**Custom domain not working?**
- DNS changes can take 24-48 hours
- Verify CNAME record is correct
- Check GitHub Pages settings

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Can I Use](https://caniuse.com/) - Check browser compatibility

## Support & Questions

For questions about customization or deployment:
1. Check the Troubleshooting section above
2. Review GitHub Pages documentation
3. Search for specific issues on Stack Overflow

## License

This template is provided as-is for Petra Baptist Church. Feel free to modify and use it for your church website.

## Credits

- Fonts: Google Fonts (Crimson Pro, Montserrat)
- Icons: Font Awesome
- Template Design: Custom design for Petra Baptist Church

---

**Need Help?** Feel free to reach out if you need assistance with customization or deployment.

**Want to Add Features?** Some ideas for enhancement:
- Online giving integration (Tithe.ly, Pushpay)
- Event calendar with RSVP
- Member login area
- Blog/news section
- Photo gallery
- Live streaming integration
