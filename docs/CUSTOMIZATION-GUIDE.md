# Quick Customization Checklist

Use this checklist to quickly customize the website for your church.

## ☑️ Essential Updates (Do These First!)

### 1. Update Church Information in index.html

- [ ] Change church name in navigation (line ~14)
- [ ] Update hero title and subtitle (lines ~45-47)
- [ ] Update "About Petra Baptist Church" section (lines ~87-102)
- [ ] Change ministry descriptions (lines ~117-161)
- [ ] Update event details (lines ~174-220)
- [ ] Update sermon information (lines ~234-282)
- [ ] Add your church address (line ~293)
- [ ] Add phone number (line ~299)
- [ ] Add email address (line ~304)
- [ ] Update office hours (line ~309)
- [ ] Update footer text (lines ~348-393)

### 2. Update Social Media Links

Find and replace these placeholder links in index.html:
- [ ] Facebook: `<a href="#" aria-label="Facebook">` → Add your Facebook URL
- [ ] Instagram: `<a href="#" aria-label="Instagram">` → Add your Instagram URL
- [ ] YouTube: `<a href="#" aria-label="YouTube">` → Add your YouTube URL
- [ ] Twitter: `<a href="#" aria-label="Twitter">` → Add your Twitter URL

### 3. Customize Colors in styles.css

Edit the CSS variables at the top of styles.css (lines 8-24):

**Current Colors:**
```css
--primary-color: #2c5f7c;        /* Teal blue */
--secondary-color: #c8a882;      /* Tan/beige */
--accent-color: #8b4513;         /* Brown */
```

**To Change:**
1. Choose your main brand color → Update `--primary-color`
2. Choose an accent color → Update `--secondary-color`
3. Choose a tertiary color → Update `--accent-color`

**Color Picker Tool:** Use https://coolors.co/ to find complementary colors

### 4. Add Service Times

Update in index.html (lines ~56-74):
- [ ] Sunday service time
- [ ] Bible study day/time
- [ ] Prayer meeting day/time

## 🎨 Optional Customizations

### Change Fonts

**Current Fonts:**
- Display (headings): Crimson Pro
- Body (text): Montserrat

**To Change:**
1. Visit https://fonts.google.com/
2. Select new fonts
3. Copy the `<link>` code
4. Replace the Google Fonts link in index.html (line ~18)
5. Update CSS variables in styles.css:
   ```css
   --font-display: 'YourNewFont', serif;
   --font-body: 'YourNewFont', sans-serif;
   ```

### Add Your Logo

1. Save your logo as `logo.png` in the same folder
2. In index.html, replace the cross icon (line ~14):
   ```html
   <!-- OLD: -->
   <i class="fas fa-cross"></i>
   
   <!-- NEW: -->
   <img src="logo.png" alt="Church Logo" style="height: 40px;">
   ```

### Add Google Maps

1. Go to https://www.google.com/maps
2. Search for your church address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Add to the contact section in index.html

## 🚀 Deployment Steps

### GitHub Pages Setup

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com/
   - Sign up for free

2. **Create New Repository**
   - Click "+" → "New repository"
   - Name it: `petra-baptist-website` (or any name)
   - Make it Public
   - Don't add README/license/gitignore

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all files:
     - index.html
     - styles.css
     - script.js
     - church.png
     - favicon.png (if you have one)
   - Commit changes

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Source": select "Deploy from a branch"
   - Select "main" branch and "/ (root)"
   - Click Save
   - Wait a few minutes
   - Your site will be at: `https://username.github.io/repository-name`

5. **Add Custom Domain (petrabaptist.space)**
   - In GitHub Pages settings, enter: `petrabaptist.space`
   - In your domain registrar:
     - Add CNAME record: `www` → `username.github.io`
     - Add A records pointing to GitHub's IPs (see README)
   - Wait 24-48 hours for DNS propagation

## 🔧 Connect Contact Form

### Option 1: Formspree (Easiest, Free)

1. Go to https://formspree.io/
2. Sign up for free account
3. Create a new form
4. Copy your form endpoint
5. In index.html, update the form tag:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR-ID" method="POST">
   ```

### Option 2: Netlify Forms (If hosting on Netlify)

In index.html, add to form tag:
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

## 📝 Content Guidelines

### Writing About Us
- Keep it concise (3-4 short paragraphs)
- Include: mission, beliefs, history
- Make it welcoming and personal

### Ministry Descriptions
- 2-3 sentences per ministry
- Focus on benefits and impact
- Use active, engaging language

### Event Information
Include:
- Clear event name
- Date and time
- Location (specific room/building)
- Brief description
- How to register/RSVP

### Sermon Details
Include:
- Date preached
- Sermon title
- Speaker name
- Series name (if applicable)
- Link to video/audio

## ⚡ Quick Wins

**Before Going Live:**
- [ ] Test all links
- [ ] Check spelling/grammar
- [ ] Test contact form
- [ ] View on mobile device
- [ ] Test navigation on small screen
- [ ] Verify all images load
- [ ] Check social media links work

**After Launch:**
- [ ] Submit to Google Search Console
- [ ] Share on social media
- [ ] Add to church materials
- [ ] Update business listings

## 🆘 Common Issues

**Problem:** Images not showing
**Solution:** 
- Check file names match exactly (case-sensitive)
- Verify files are in the same folder
- Use correct file extension (.png, .jpg)

**Problem:** Mobile menu not working
**Solution:** 
- Make sure script.js is linked correctly
- Check browser console for errors
- Clear browser cache

**Problem:** Colors look wrong
**Solution:** 
- Use hex color codes (e.g., #2c5f7c)
- Don't forget the # symbol
- Save and refresh browser

**Problem:** Custom domain not working
**Solution:** 
- DNS takes 24-48 hours to propagate
- Double-check DNS settings
- Try visiting after clearing cache

## 📱 Testing Checklist

Test your site on:
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile iPhone
- [ ] Mobile Android
- [ ] Tablet (iPad/Android)

## 💡 Future Enhancements

Consider adding later:
- Blog/news section
- Photo gallery
- Member login area
- Online giving integration
- Live stream player
- Podcast integration
- Printable bulletin
- Small group finder

---

**Need Help?** Refer to the detailed README.md file for more information.
