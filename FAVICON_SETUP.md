# Favicon Setup Guide

## Overview

The favicon for Distance MBA College is configured to work across all browsers and devices.

## Files

- **`public/favicon.png`** - Original PNG file (provided in `/doc`)
- **`public/favicon.ico`** - Generated from PNG (auto-generated via build)

## How It's Configured

1. **In `src/app/layout.tsx`:**

   ```tsx
   <link rel="icon" href="/favicon.ico" sizes="any" />
   <link rel="icon" href="/favicon.png" type="image/png" />
   <link rel="apple-touch-icon" href="/favicon.png" />
   ```

2. **Browser Support:**
   - Modern browsers: Use `.png` format
   - Legacy browsers: Use `.ico` format
   - iOS/Android: Use `.png` for home screen icon

## Generating favicon.ico from favicon.png

If you need to regenerate the `.ico` file:

```bash
# Install favicon-generator (if not already installed)
npm install --save-dev favicons

# Generate favicon
npx favicons public/favicon.png --output public --appName "Distance MBA College"
```

Or use an online tool: https://favicon.io/

## Vercel Deployment

The favicon will automatically be served correctly on Vercel. To verify:

1. Deploy the app
2. Check the browser tab to confirm the favicon appears
3. Test on mobile by adding to home screen

## Migration from WordPress

The original WordPress site had favicon at `/wp-content/uploads/favicon.ico`. This is now served from `/public/favicon.ico` in Next.js, which Vercel automatically optimizes.
