# Portfolio Site

A professional portfolio website built with React 18, showcasing backend engineering expertise with a focus on enterprise banking systems, microservices, and system design.

## Features

- **Hero Section**: Authority-first presentation with name, role, value statement, and CTAs
- **About Me**: Strategic positioning focused on enterprise banking, microservices, and secure API development
- **Tech Stack**: Professional layout organized by category (Backend, Frontend, Database, Cloud/DevOps)
- **Experience**: System overview blocks instead of bullet points, highlighting architectural thinking
- **Projects**: Engineering depth with architecture diagrams, backend responsibilities, auth flows, CI/CD pipelines
- **Engineering Philosophy**: System design principles and best practices
- **Dark/Light Mode**: Theme toggle with persistent preferences
- **Responsive Design**: Mobile-first, optimized for all screen sizes

## Tech Stack

- React 18
- Vite
- Functional Components
- Custom Hooks
- CSS Variables for Theming

## Project Structure

```
src/
 ├── components/       # Reusable components (Navigation, ThemeToggle)
 ├── sections/         # Page sections (Hero, About, TechStack, etc.)
 ├── hooks/           # Custom hooks (useTheme, useScroll)
 ├── data/            # Data files (personalInfo, techStack, projects, etc.)
 ├── assets/          # Static assets
 ├── App.jsx          # Main app component
 ├── App.css          # Component styles
 └── main.jsx         # Entry point
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit `src/data/personalInfo.js`:
- Name
- Role
- Value statement
- Social links
- Resume path

### Update Tech Stack

Edit `src/data/techStack.js` to modify technologies displayed.

### Update Experience

Edit `src/data/experience.js` to add or modify experience entries.

### Update Projects

Edit `src/data/projects.js` to add or modify project showcases.

### Update Engineering Philosophy

Edit `src/data/engineeringPhilosophy.js` to customize principles.

## Theme Customization

Themes are managed through CSS variables in `src/index.css`. Modify the `:root`, `.dark`, and `.light` selectors to customize colors.

## Performance

- Lazy loading for sections (ready for implementation)
- Optimized CSS with minimal animations
- Lighthouse score target: >90

## License

Private project - All rights reserved
