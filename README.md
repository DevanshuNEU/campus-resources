# 🎓 Campus Resources

A clean, accessible Campus Resources page built with React, TypeScript, and TailwindCSS. Designed to help students discover essential campus resources with an intuitive, shadcn-inspired interface.

![Campus Resources Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1+-blue)

## ✨ Features

- **6 Resource Categories**: Relationships, Career Development, Financial Aid, Health & Wellness, Identity & Belonging, Academic Success
- **18 Curated Resources**: 3 carefully selected resources per category
- **Responsive Design**: Mobile-first approach with seamless breakpoints
- **Accessibility First**: WCAG-compliant with proper ARIA labels and keyboard navigation
- **Modern UI**: Clean, professional design inspired by shadcn/ui
- **Smooth Interactions**: Hover effects, transitions, and micro-animations
- **TypeScript**: Full type safety and excellent developer experience

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevanshuNEU/campus-resources.git
   cd campus-resources
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, Tabs)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── CampusResources.tsx  # Main resource display component
│   └── ResourceCard.tsx     # Individual resource card
├── data/
│   └── resources.ts     # Resource data and categories
├── lib/
│   └── utils.ts         # Utility functions
├── types/
│   └── index.ts         # TypeScript type definitions
└── index.css           # Global styles with CSS variables
```

## 🎨 Design System

The project uses a custom design system inspired by shadcn/ui with:

- **Color Palette**: CSS custom properties for consistent theming
- **Typography**: Inter font family with clear hierarchy
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Reusable, accessible components with proper variants

## 📱 Resource Categories

### 👥 Relationships & Community
Building meaningful connections and support networks on campus

### 💼 Career Development  
Professional growth, internships, and career planning resources

### 💰 Financial Aid & Support
Financial assistance, scholarships, and money management resources

### 🏥 Health & Wellness
Physical and mental health resources for overall student wellbeing

### 🌈 Identity & Belonging
Inclusive communities and support for diverse student identities

### 📚 Academic Success
Study support, tutoring, and academic achievement resources

## 🚀 Deployment

### Vercel (Recommended)
1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🔧 Customization

### Adding New Resources
Edit `src/data/resources.ts` to add new resources or categories:

```typescript
{
  id: 'new-resource',
  name: 'Resource Name',
  description: 'Resource description',
  url: 'https://example.com',
  category: 'category-type',
  tags: ['tag1', 'tag2'],
  isExternal: true
}
```

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: Individual component files
- Theme colors: CSS custom properties in `src/index.css`

## 🌟 Development Approach

### Code Quality
- **Clean Code**: Single responsibility principle, meaningful names
- **TypeScript**: Strict mode with comprehensive typing
- **Component Architecture**: Reusable, composable components
- **Performance**: Optimized imports and efficient rendering

### Accessibility
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance

## 📈 Performance

- **Bundle Size**: Optimized with tree-shaking
- **Loading**: Fast initial load with code splitting
- **Images**: Optimized assets and proper loading
- **SEO**: Semantic HTML and meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/)

---

**Built with ❤️ for student success** | [Live Demo](https://campus-resources-demo.vercel.app) | [Report Bug](https://github.com/DevanshuNEU/campus-resources/issues)
