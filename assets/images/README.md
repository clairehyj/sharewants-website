# Images Directory

This directory contains all images used on the ShareWants website.

## Required Images

To complete the website setup, you'll need to add the following images:

### App Assets
- `logo.png` - Site logo (recommended: 200x200px, transparent background)
- `favicon.png` - Browser favicon (32x32px)
- `app-mockup.png` - Hero section app screenshot (recommended: 800x600px)

### App Store Badges
- `app-store-badge.png` - Apple App Store download badge
- `google-play-badge.png` - Google Play Store download badge

You can download official badges from:
- Apple: https://developer.apple.com/app-store/marketing/guidelines/
- Google: https://play.google.com/intl/en_us/badges/

### Blog Images
Add blog post featured images in subdirectories:
- `blog/` - Blog post featured images
- `posts/` - Individual post images

## Image Guidelines

### File Formats
- Use PNG for logos and graphics with transparency
- Use JPG for photographs and complex images
- Use SVG for simple icons and graphics when possible

### Optimization
- Compress images before uploading
- Use appropriate dimensions for their intended use
- Consider retina displays (2x resolution)

### Naming Convention
- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive: `gift-sharing-screenshot.png`

## Responsive Images

For responsive design, consider providing multiple sizes:
- `image-name.png` (standard)
- `image-name@2x.png` (retina/high-DPI)
- `image-name-mobile.png` (mobile optimized)

## Adding Images to Posts

In blog posts, reference images like this:

```markdown
![Alt text](/assets/images/your-image.png)
```

For responsive images:

```html
<img src="/assets/images/your-image.png" 
     srcset="/assets/images/your-image@2x.png 2x" 
     alt="Description">
```