# Customization Guide

## Quick Start

1. **Update Personal Information** (`src/data/personalInfo.js`)
   - Replace "Your Name" with your actual name
   - Update role and value statement
   - Add your GitHub and LinkedIn URLs
   - Place your resume PDF in `public/resume.pdf` and update the path

2. **Customize Experience** (`src/data/experience.js`)
   - Update company name and period
   - Modify system overview modules
   - Adjust tech stack used

3. **Add/Modify Projects** (`src/data/projects.js`)
   - Add more projects following the same structure
   - Update architecture details
   - Add GitHub and live demo links

4. **Adjust Tech Stack** (`src/data/techStack.js`)
   - Add or remove technologies
   - Reorganize by category as needed

## Color Theme Customization

Edit `src/index.css` to change colors:

```css
:root {
  --accent: #007bff;        /* Primary accent color */
  --accent-hover: #0056b3;  /* Hover state */
  --bg-primary: #ffffff;    /* Main background */
  --bg-secondary: #f8f9fa;  /* Secondary background */
  --text-primary: #1a1a1a;  /* Primary text */
  --text-secondary: #6c757d; /* Secondary text */
  --border: #e0e0e0;        /* Border color */
}
```

## Adding a Resume File

1. Place your resume PDF in the `public` folder
2. Update `resume` path in `src/data/personalInfo.js`:
   ```js
   resume: "/resume.pdf"
   ```

## Adding More Sections

To add new sections:

1. Create a new component in `src/sections/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

## Performance Optimization

- Images: Use optimized formats (WebP) and lazy loading
- Fonts: Consider using system fonts (already implemented)
- Code splitting: Can be added for sections if needed

## SEO Optimization

Update `index.html`:
- Meta description
- Open Graph tags
- Twitter Card tags

## Deployment

1. Build: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Ensure proper routing configuration for SPA
