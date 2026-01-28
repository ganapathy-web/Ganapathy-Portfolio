# R. Ganapathy - Personal Portfolio Website

A fully responsive, modern personal portfolio website showcasing skills, projects, education, and contact information.

## Features

### Core Sections
- **Hero Section**: Eye-catching introduction with name, role, and call-to-action buttons
- **About Me**: Comprehensive personal information, career objectives, and soft skills
- **Skills**: Interactive skill display with progress bars and area of interest cards
- **Projects**: Showcased project cards with descriptions and technologies used
- **Education & Certifications**: Academic qualifications and professional certifications
- **Contact**: Functional contact form with validation and contact information
- **Footer**: Social media links and quick navigation

### Design Features
- **Dark/Light Mode Toggle**: Persistent theme switching with localStorage
- **Sticky Navbar**: Smooth scrolling navigation with scroll-aware styling
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Smooth Animations**: Custom CSS animations for enhanced user experience
- **Modern UI**: Clean, professional design with gradient accents and hover effects
- **Accessible**: Semantic HTML and ARIA labels for better accessibility

## Tech Stack

- **React 18.3** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library

## Project Structure

```
portfolio/
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.tsx       # Navigation with dark mode toggle
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Project portfolio
│   │   ├── Education.tsx    # Education & certifications
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer with social links
│   ├── App.tsx              # Main app component with dark mode logic
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and animations
├── public/                   # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration (dark mode enabled)
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies

```

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run typecheck

# Run linting
npm run lint
```

## Component Overview

### Navbar Component
- Fixed position with scroll-aware background
- Responsive mobile menu
- Dark/light mode toggle
- Smooth scroll navigation

### Hero Component
- Gradient background with animated elements
- Social media links (GitHub, LinkedIn, LeetCode)
- Call-to-action buttons
- Animated avatar/initials

### About Component
- Personal information display
- Career objective
- Soft skills showcase
- Language proficiency bars

### Skills Component
- Technical skills with progress bars
- Area of interest cards
- Extra-curricular activities tags
- Animated hover effects

### Projects Component
- Project showcase cards
- Technology tags
- External links and GitHub integration
- Gradient thumbnails

### Education Component
- Educational qualifications with scores
- Certifications and internships timeline
- Color-coded institutions
- Organized with icons

### Contact Component
- Functional contact form
- Form validation
- Success message display
- Contact information cards

### Footer Component
- Social media integration
- Quick navigation links
- Contact information
- Copyright and credits

## Color Scheme

The portfolio uses a professional color palette:
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#A855F7)
- **Accent**: Various gradients (blue-purple, green-teal, etc.)
- **Background**: White/Gray-900 (light/dark mode)
- **Text**: Gray-900/White (light/dark mode)

## Customization

To customize the portfolio for your own use:

1. Update personal information in each component
2. Modify the color scheme in Tailwind config or component styles
3. Add/remove sections as needed
4. Update social media links in Hero and Footer components
5. Add your own projects to the Projects component
6. Update education and certifications in Education component

## Performance Optimizations

- Lazy loading for smooth scrolling
- Optimized animations with CSS transforms
- Efficient state management
- Code splitting with Vite
- Minified production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

- **Email**: ganapathy26062005@gmail.com
- **Phone**: +91 8072223890
- **Location**: Villupuram, Tamil Nadu, India
- **GitHub**: [Ganapathy-web](https://github.com/Ganapathy-web)
- **LinkedIn**: [Ganapathy.R](https://linkedin.com/in/Ganapathy.R)
- **LeetCode**: [Ganapathy.R](https://leetcode.com/Ganapathy.R)
