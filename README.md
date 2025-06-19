<div align="center">

# 🎓 Campus Resources

**The most intuitive way for students to discover campus resources**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-blue?style=for-the-badge)](https://campus-resources-2omn94hdz-devs-projects-57ef0b7b.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevanshuNEU/campus-resources)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A beautifully designed, accessible campus resources directory built with React, TypeScript, and TailwindCSS. Helping students thrive with an intuitive interface inspired by modern design systems.

[✨ **Explore Live Demo**](https://campus-resources-2omn94hdz-devs-projects-57ef0b7b.vercel.app) · [📖 **Documentation**](#-documentation) · [🚀 **Quick Start**](#-quick-start) · [🤝 **Contributing**](#-contributing)

</div>

---

## 🌟 **What makes Campus Resources special?**

Campus Resources transforms the way students discover and access campus services. Instead of navigating complex institutional websites, students get a clean, intuitive interface that actually makes sense.

### ✨ **Key Features**

- **🎯 Intuitive Navigation** - Tab-based interface with 6 comprehensive categories
- **📱 Mobile-First Design** - Seamless experience across all devices
- **⚡ Lightning Fast** - Built with Vite for instant loading
- **🎨 Modern UI** - Custom SVG icons and gradient designs
- **♿ Accessibility First** - WCAG-compliant with proper ARIA labels
- **🔍 Smart Organization** - Resources grouped by what matters most to students

### 🏫 **Resource Categories**

<div align="center">

| Category | Resources | Description |
|----------|-----------|-------------|
| 👥 **Relationships** | 3 Resources | Building connections and support networks |
| 💼 **Career Development** | 3 Resources | Internships, job search, and professional growth |
| 💰 **Financial Aid** | 3 Resources | Scholarships, loans, and financial support |
| 🏥 **Health & Wellness** | 3 Resources | Physical and mental health resources |
| 🌈 **Identity & Belonging** | 3 Resources | Inclusive communities and cultural centers |
| 📚 **Academic Success** | 3 Resources | Tutoring, writing support, and study resources |

</div>

---

## 🚀 **Quick Start**

Get Campus Resources running locally in under 2 minutes:

### **Prerequisites**

- Node.js 18+ 
- npm, yarn, or pnpm

### **Installation**

```bash
# Clone the repository
git clone https://github.com/DevanshuNEU/campus-resources.git

# Navigate to the project
cd campus-resources

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. 🎉

### **Production Build**

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🏗️ **Built With**

<div align="center">

### **Core Technologies**

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### **UI & Design**

[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-000000?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

### **Architecture Highlights**

- **⚡ Vite** - Lightning-fast development and optimized builds
- **🎨 shadcn/ui Inspired** - Component architecture following modern design principles
- **📱 Responsive Design** - Mobile-first approach with seamless breakpoints
- **🔧 TypeScript** - Full type safety and excellent developer experience
- **🎭 Custom Animations** - Smooth transitions and micro-interactions
- **♿ Accessibility** - WCAG-compliant with proper semantic HTML

---

## 📁 **Project Structure**

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── button.tsx         # Button component with variants
│   │   ├── card.tsx           # Card component for resources
│   │   └── tabs.tsx           # Tab navigation component
│   ├── icons/                 # Custom SVG icons
│   │   └── CategoryIcons.tsx  # Category-specific icons
│   ├── layout/                # Layout components
│   │   └── Layout.tsx         # Main layout with header/footer
│   ├── CampusResources.tsx    # Main resource display component
│   └── ResourceCard.tsx       # Individual resource card
├── data/
│   └── resources.ts           # Resource data and categories
├── lib/
│   └── utils.ts               # Utility functions
├── types/
│   └── index.ts               # TypeScript type definitions
└── index.css                  # Global styles and animations
```

---

## 🎨 **Design System**

### **Color Palette**

Our design system uses a sophisticated color palette inspired by modern design systems:

```css
/* Primary Colors */
--primary: 221.2 83.2% 53.3%        /* Blue */
--secondary: 210 40% 96%             /* Light Gray */
--accent: 210 40% 96%                /* Accent Gray */

/* Semantic Colors */
--success: 142 76% 36%               /* Green */
--warning: 38 92% 50%                /* Amber */
--error: 0 84% 60%                   /* Red */
```

### **Typography**

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800
- **Hierarchy**: Clear distinction between headings, body text, and captions

### **Components**

All components follow these principles:
- **Composable** - Built with reusable, predictable interfaces
- **Accessible** - WCAG-compliant with proper ARIA attributes
- **Responsive** - Mobile-first design with fluid layouts
- **Customizable** - Easy to modify and extend

---

## 🔧 **Customization**

### **Adding New Resources**

Edit `src/data/resources.ts` to add new resources:

```typescript
{
  id: 'new-resource',
  name: 'Resource Name',
  description: 'Resource description that helps students understand the value',
  url: 'https://example.com',
  category: 'category-type',
  tags: ['tag1', 'tag2'],
  isExternal: true
}
```

### **Modifying Styles**

- **Global Styles**: `src/index.css`
- **Component Styles**: Tailwind classes in component files
- **Theme Colors**: CSS custom properties in `src/index.css`

### **Adding New Categories**

1. Update the `ResourceCategoryType` in `src/types/index.ts`
2. Add the category data in `src/data/resources.ts`
3. Create a new icon in `src/components/icons/CategoryIcons.tsx`

---

## 🚀 **Deployment**

### **Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevanshuNEU/campus-resources)

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Deploy automatically

### **Netlify**

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### **Self-Hosted**

```bash
# Build for production
npm run build

# Serve the dist folder with any static server
npx serve dist
```

---

## 📊 **Performance**

<div align="center">

### **Bundle Analysis**

| Asset | Size | Gzipped |
|-------|------|---------|
| CSS | 21.45 KB | 4.59 KB |
| JavaScript | 235.27 KB | 73.50 KB |
| HTML | 0.46 KB | 0.30 KB |

### **Lighthouse Scores**

🟢 **Performance**: 95+ | 🟢 **Accessibility**: 100 | 🟢 **Best Practices**: 100 | 🟢 **SEO**: 100

</div>

---

## 🤝 **Contributing**

We love contributions! Here's how you can help make Campus Resources even better:

### **Development Workflow**

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/campus-resources.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes
5. **Test** thoroughly: `npm run build` and `npm run dev`
6. **Commit** with a descriptive message: `git commit -m 'feat: add amazing feature'`
7. **Push** to your branch: `git push origin feature/amazing-feature`
8. **Open** a Pull Request

### **Contribution Guidelines**

- ✅ Follow the existing code style
- ✅ Add TypeScript types for new features
- ✅ Ensure accessibility compliance
- ✅ Test on multiple devices and browsers
- ✅ Update documentation as needed

### **Areas for Contribution**

- 🐛 **Bug Fixes** - Found an issue? We'd love a fix!
- ✨ **New Features** - Search functionality, bookmarking, etc.
- 📱 **Mobile Improvements** - Enhanced mobile experience
- ♿ **Accessibility** - Making it even more accessible
- 🎨 **Design Enhancements** - Visual improvements and animations
- 📖 **Documentation** - Help others understand the project

---

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

### **Inspiration**

- [shadcn/ui](https://ui.shadcn.com/) - Component architecture and design principles
- [Cal.com](https://cal.com/) - Open source excellence and community-driven development
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### **Tools & Libraries**

- [React](https://reactjs.org/) - The library for web and native user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [Vercel](https://vercel.com/) - Platform for frontend frameworks and static sites

---

<div align="center">

### **Made with ❤️ by [Devanshu Chicholikar](https://github.com/DevanshuNEU)**

**Building tools that help students succeed**

[🌐 **Live Demo**](https://campus-resources-2omn94hdz-devs-projects-57ef0b7b.vercel.app) · [📝 **Report Bug**](https://github.com/DevanshuNEU/campus-resources/issues) · [💡 **Request Feature**](https://github.com/DevanshuNEU/campus-resources/issues)

⭐ **If this project helped you, consider giving it a star!** ⭐

</div>
