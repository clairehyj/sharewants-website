# ShareWants Website - Project Documentation Index

## Project Overview

**ShareWants Website** is a Jekyll-based static marketing website for the ShareWants social gift-sharing mobile application. It serves as the primary web presence with product information, blog content, and app download links.

## Quick Reference

### Development Commands
```bash
# Start development server
cd sharewants-website && bundle exec jekyll serve

# Install dependencies
cd sharewants-website && bundle install

# Build for production
cd sharewants-website && bundle exec jekyll build
```

### Deployment
- **Auto-deploy**: Pushes to main branch trigger GitHub Pages deployment via `.github/workflows/jekyll.yml`
- **Live URL**: https://clairehjy.github.io/sharewants-website
- **Platform**: GitHub Pages with Jekyll

## Architecture & Technology Stack

### Core Technology
- **Static Site Generator**: Jekyll 4.3.0
- **Theme**: Minima (customized)
- **Styling**: SCSS with custom variables and responsive design
- **Deployment**: GitHub Actions → GitHub Pages
- **Ruby Version**: 3.1

### Key Dependencies
- `jekyll` - Static site generator
- `github-pages` - GitHub Pages compatibility
- `jekyll-feed` - RSS feed generation
- `jekyll-sitemap` - Automatic sitemap generation
- `jekyll-seo-tag` - SEO metadata
- `jekyll-paginate` - Blog pagination

## Site Structure & Content Architecture

### Primary Pages
```
├── index.md (home.html)     # Landing page with hero, features, recent posts
├── about.md                 # Company story and mission
├── contact.md              # Contact information and form
├── terms.md                # Terms of service
└── privacy.md              # Privacy policy
```

### Blog System
```
├── blog/                   # Blog index page
├── _posts/                # Individual blog posts (Markdown)
└── Collections:
    └── posts → /blog/:year/:month/:day/:title/
```

### Template Structure
```
_layouts/
├── default.html           # Base template with header/footer
├── home.html             # Landing page layout with hero section
└── post.html             # Blog post template

_includes/
├── head.html             # Meta tags, SEO, and CSS includes
├── header.html           # Site navigation and logo
└── footer.html           # Site footer with links and app badges
```

### Asset Organization
```
assets/
├── main.scss             # Custom SCSS styles with CSS variables
├── images/               # Site images (logos, app mockups, badges)
│   ├── logo.png
│   ├── app-mockup.png
│   ├── app-store-badge.png
│   └── google-play-badge.png
└── README.md
```

## Design System & Styling

### CSS Architecture
- **Base Theme**: Minima with extensive customizations
- **CSS Variables**: `:root` variables for consistent theming
- **Responsive Design**: Mobile-first approach with grid layouts
- **Key Colors**:
  - Primary: `#FFCC00` (Yellow)
  - Secondary: `#333` (Dark Gray)
  - Background: `#fff` (White)

### Component Styles
- **Hero Section**: Two-column grid with app mockup
- **Features Grid**: 4-column responsive feature cards
- **Blog Cards**: Card-based design with hover effects
- **App Badges**: iOS/Android download buttons
- **Navigation**: Responsive header with mobile menu

## Content Management

### Site Configuration (`_config.yml`)
```yaml
title: Share Wants
description: The social gift-sharing app that helps you discover and share perfect gifts
baseurl: "/sharewants-website"
url: "https://clairehjy.github.io"

# App store links (placeholder)
app_store_url: "#"
google_play_url: "#"

# SEO & Social
twitter_username: sharewants
github_username: clairehjy
```

### Blog Configuration
- **Pagination**: 5 posts per page
- **Permalink Structure**: `/blog/:year/:month/:day/:title/`
- **Default Author**: "ShareWants Team"
- **Layout**: Automatic post layout assignment

### SEO & Meta
- **Jekyll SEO Tag**: Automatic meta tag generation
- **Sitemap**: Auto-generated XML sitemap
- **RSS Feed**: Auto-generated blog feed
- **Social Meta**: Open Graph and Twitter Card support

## Deployment & CI/CD

### GitHub Actions Workflow (`.github/workflows/jekyll.yml`)
```yaml
Triggers: Push/PR to main branch
Build Environment: Ubuntu with Ruby 3.1
Build Process: 
  1. Checkout code
  2. Setup Ruby with bundle cache
  3. Configure GitHub Pages
  4. Build Jekyll with production baseurl
  5. Upload build artifacts
  6. Deploy to GitHub Pages
```

### Deployment Configuration
- **Production Build**: `bundle exec jekyll build --baseurl "..."`
- **Environment**: `JEKYLL_ENV: production`
- **Output Directory**: `_site/`
- **Permissions**: Pages write, contents read

## Development Guidelines

### Content Creation
1. **Blog Posts**: Create in `_posts/` with `YYYY-MM-DD-title.md` format
2. **Pages**: Create in root with YAML front matter
3. **Images**: Add to `assets/images/` and reference with `relative_url` filter
4. **Styling**: Modify `assets/main.scss` for custom styles

### Local Development
1. Install Ruby 3.1 and Bundler
2. Run `bundle install` to install dependencies
3. Start server with `bundle exec jekyll serve`
4. Site available at `http://localhost:4000`

### Code Standards
- **Liquid Templates**: Use Jekyll best practices with proper escaping
- **SCSS**: Follow BEM methodology for CSS classes
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Semantic HTML and ARIA labels

## Integration Points

### Mobile App Integration
- **App Store Links**: Configured in `_config.yml` (currently placeholders)
- **App Mockups**: Hero section showcases mobile app UI
- **Download CTAs**: Prominent app download buttons throughout site

### Analytics & Tracking
- **SEO**: Jekyll SEO Tag for search engine optimization
- **Social Sharing**: Open Graph and Twitter Card meta tags
- **Sitemap**: Automatic XML sitemap generation for search engines

### Content Strategy
- **Landing Page**: Hero section, key features, recent blog posts
- **Blog System**: Technical articles, company updates, gift guides
- **Static Pages**: Legal pages, contact information, company story

## File Reference

### Critical Configuration Files
- `_config.yml` - Site configuration and build settings
- `Gemfile` - Ruby dependencies and Jekyll plugins
- `assets/main.scss` - Custom styles and design system
- `.github/workflows/jekyll.yml` - Deployment automation

### Template Files
- `_layouts/default.html` - Base page template
- `_layouts/home.html` - Landing page with hero section
- `_includes/header.html` - Site navigation
- `index.md` - Homepage content

### Documentation
- `README.md` - Basic project information (minimal)
- `PROJECT_INDEX.md` - This comprehensive documentation