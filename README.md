# NoBadGift Website

Jekyll-based marketing website for the NoBadGift social gift-sharing mobile application. Built with GitHub Pages deployment and responsive design.

## Overview

The NoBadGift website serves as the marketing landing page and blog platform for the mobile application. It provides information about the app, download links, blog content about gift-giving, and company information. The site is built with Jekyll for static site generation and automatically deploys to GitHub Pages.

**Live Site**: [https://clairehjy.github.io/nobadgift-website](https://clairehjy.github.io/nobadgift-website)

## Tech Stack

- **Static Site Generator**: Jekyll 4.3.0
- **Theme**: Minima (customized)
- **Styling**: SCSS with CSS variables
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **SEO**: jekyll-seo-tag, sitemap generation
- **Blog**: Jekyll's built-in blog with pagination

## Quick Start

### Prerequisites

- Ruby 3.1 or higher
- Bundler gem (`gem install bundler`)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/clairehjy/nobadgift.git
cd nobadgift/nobadgift-website

# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve

# Visit http://localhost:4000/nobadgift-website
```

### Development Commands

```bash
# Start development server with live reload
bundle exec jekyll serve --livereload

# Build site for production
bundle exec jekyll build

# Build with production environment
JEKYLL_ENV=production bundle exec jekyll build

# Clean build files
bundle exec jekyll clean
```

## Project Structure

```
nobadgift-website/
├── _config.yml              # Site configuration
├── Gemfile                  # Ruby dependencies
├── Gemfile.lock            # Locked dependency versions
├── .github/
│   └── workflows/
│       └── jekyll.yml      # GitHub Actions deployment
├── _includes/              # Reusable HTML components
│   ├── head.html          # HTML head section
│   ├── header.html        # Site header/navigation
│   └── footer.html        # Site footer
├── _layouts/               # Page templates
│   ├── default.html       # Base layout
│   ├── home.html          # Homepage layout
│   └── post.html          # Blog post layout
├── _posts/                 # Blog posts (YYYY-MM-DD-title.md)
│   ├── 2024-01-15-welcome-to-nobadgift.md
│   ├── 2024-01-20-gift-giving-tips.md
│   └── 2024-01-25-social-gifting-trends.md
├── assets/                 # Static assets
│   ├── main.scss          # Main stylesheet
│   └── images/            # Image assets
│       └── README.md      # Image guidelines
├── blog/                   # Blog listing page
│   └── index.html
├── _site/                  # Generated site (git-ignored)
├── index.html              # Homepage
├── index.md               # Homepage content
├── about.md               # About page
├── contact.md             # Contact page
├── privacy.md             # Privacy policy
└── terms.md               # Terms of service
```

## Configuration

### Site Settings (_config.yml)

```yaml
# Basic Configuration
title: No More Bad Gift
email: contact@nobadgift.com
baseurl: "/nobadgift-website"
url: "https://clairehjy.github.io"

# App Store Links
app_store_url: "#"  # Update when published
google_play_url: "#"  # Update when published

# Social Media
twitter_username: nobadgift
github_username: clairehjy

# Blog Settings
paginate: 5
paginate_path: "/blog/page:num/"
```

### Environment Variables

- `JEKYLL_ENV=production` - Enables production optimizations
- `JEKYLL_LOG_LEVEL=debug` - Verbose logging for troubleshooting

## Content Management

### Adding Blog Posts

1. Create a new file in `_posts/` directory
2. Name format: `YYYY-MM-DD-post-title.md`
3. Add front matter:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-25 10:00:00 -0800
categories: [gifts, tips]
author: "Author Name"
excerpt: "Brief description for SEO and previews"
---

Your content here...
```

### Creating Pages

1. Create a new `.md` file in the root directory
2. Add front matter:

```markdown
---
layout: default
title: "Page Title"
permalink: /custom-url/
---

Page content...
```

### Adding Images

1. Place images in `assets/images/`
2. Reference in Markdown: `![Alt text]({{ "/assets/images/filename.jpg" | relative_url }})`
3. Optimize images before uploading (recommended: <200KB for web)

## Styling

### Custom SCSS

Main stylesheet: `assets/main.scss`

```scss
// Import theme
@import "minima";

// Custom variables
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-family: 'Helvetica Neue', Arial, sans-serif;
}

// Custom styles
.custom-class {
  // Your styles
}
```

### Responsive Design

The site uses mobile-first responsive design:
- Mobile: < 600px
- Tablet: 600px - 1024px
- Desktop: > 1024px

## SEO Optimization

### Built-in Features

- **Sitemap**: Auto-generated at `/sitemap.xml`
- **RSS Feed**: Available at `/feed.xml`
- **Meta Tags**: Handled by jekyll-seo-tag
- **Social Cards**: Open Graph and Twitter Card support

### SEO Best Practices

1. Use descriptive titles (50-60 characters)
2. Write meta descriptions in front matter
3. Use header tags (H1-H6) hierarchically
4. Optimize images with alt text
5. Create descriptive URLs

## Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys when you push to the `main` branch:

1. **Push to main** → GitHub Actions triggered
2. **Build Jekyll site** → Ruby 3.1 environment
3. **Upload artifact** → Site files prepared
4. **Deploy to Pages** → Live at GitHub Pages URL

### Manual Deployment

```bash
# Build the site
JEKYLL_ENV=production bundle exec jekyll build

# The built site is in _site/ directory
# Can be deployed to any static hosting service
```

### Deployment Configuration

GitHub Actions workflow: `.github/workflows/jekyll.yml`
- Triggers on push to main
- Uses Ruby 3.1
- Builds with production environment
- Deploys to GitHub Pages

## Development Tips

### Local Development

1. **Live Reload**: Use `--livereload` flag for auto-refresh
2. **Drafts**: Create drafts in `_drafts/` folder
3. **Future Posts**: Use `--future` flag to show future-dated posts

### Performance Optimization

1. **Minimize CSS/JS**: Enable in production builds
2. **Image Optimization**: Use WebP format when possible
3. **Lazy Loading**: Implement for images below fold
4. **Caching**: Leverage browser caching with proper headers

### Debugging

```bash
# Verbose output
bundle exec jekyll serve --verbose

# Show deprecation warnings
bundle exec jekyll serve --strict_front_matter

# Profile build time
bundle exec jekyll build --profile
```

## Maintenance

### Updating Dependencies

```bash
# Update Bundler
gem update bundler

# Update all gems
bundle update

# Update specific gem
bundle update jekyll
```

### Security Updates

- Regularly run `bundle audit` to check for vulnerabilities
- Keep Jekyll and plugins updated
- Review GitHub Dependabot alerts

## Troubleshooting

### Common Issues

1. **Bundle Install Fails**
   ```bash
   gem install bundler
   bundle install --path vendor/bundle
   ```

2. **Port Already in Use**
   ```bash
   bundle exec jekyll serve --port 4001
   ```

3. **Build Errors**
   ```bash
   bundle exec jekyll clean
   rm -rf _site .jekyll-cache
   bundle exec jekyll build --trace
   ```

4. **GitHub Pages Build Fails**
   - Check GitHub Actions logs
   - Ensure Gemfile.lock is committed
   - Verify _config.yml syntax

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

### Code Standards

- Follow Jekyll best practices
- Use semantic HTML5
- Ensure responsive design
- Test on multiple browsers
- Optimize for performance

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Minima Theme](https://github.com/jekyll/minima)
- [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag)

## License

Private repository - All rights reserved

## Support

For issues or questions:
- Email: contact@nobadgift.com
- GitHub Issues: [Create an issue](https://github.com/clairehjy/nobadgift/issues)