<div align="center">

# 🎓 Campus Resources

**The most intuitive way for students to discover campus resources**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-blue?style=for-the-badge)](https://campus-resources.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevanshuNEU/campus-resources)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A beautifully designed, accessible campus resources directory built with React, TypeScript, and TailwindCSS.

[✨ **Explore Live Demo**](https://campus-resources.vercel.app/) · [📖 **Quick Start**](#-quick-start) · [🤝 **Contributing**](#-contributing)

<img width="1799" alt="image" src="https://github.com/user-attachments/assets/fc6fa4f0-fe79-468f-aac3-638a3fa683c7" />


*Beautiful dark mode with smooth theme transitions*

</div>

---

## ✨ **Features**

- **🎯 Intuitive Navigation** - 6 comprehensive resource categories with tab-based interface
- **🌓 Dark/Light Mode** - Beautiful theme switching with system preference detection
- **📱 Mobile-First Design** - Seamless experience across all devices  
- **⚡ Lightning Fast** - Built with Vite for instant loading
- **🎨 Modern UI** - Custom SVG icons with gradient designs and smooth animations
- **♿ Accessibility First** - WCAG-compliant with proper ARIA labels
- **18 Curated Resources** - Hand-picked campus resources across 6 categories

## 🏫 **Resource Categories**

| Category | Resources | Focus |
|----------|-----------|-------|
| 👥 **Relationships** | 3 Resources | Building connections and support networks |
| 💼 **Career Development** | 3 Resources | Internships, job search, and professional growth |
| 💰 **Financial Aid** | 3 Resources | Scholarships, loans, and financial support |
| 🏥 **Health & Wellness** | 3 Resources | Physical and mental health resources |
| 🌈 **Identity & Belonging** | 3 Resources | Inclusive communities and cultural centers |
| 📚 **Academic Success** | 3 Resources | Tutoring, writing support, and study resources |

---

## 🚀 **Quick Start**

```bash
# Clone and install
git clone https://github.com/DevanshuNEU/campus-resources.git
cd campus-resources
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🛠️ **Built With**

- **React 18** - UI library with modern hooks
- **TypeScript** - Type safety and better DX
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Vercel** - Deployment and hosting

## 📁 **Project Structure**

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── icons/              # Custom SVG icons
│   └── layout/             # Layout components
├── data/resources.ts       # Resource data
├── types/index.ts          # TypeScript definitions
└── lib/utils.ts           # Utility functions
```

## 🎨 **Customization**

### Adding New Resources

Edit `src/data/resources.ts`:

```typescript
{
  id: 'new-resource',
  name: 'Resource Name',
  description: 'Helpful description for students',
  url: 'https://example.com',
  category: 'category-type',
  tags: ['tag1', 'tag2'],
  isExternal: true
}
```

### Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevanshuNEU/campus-resources)

Or build locally:
```bash
npm run build
```

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Devanshu Chicholikar](https://github.com/DevanshuNEU)**

[🌐 **Live Demo**](https://campus-resources.vercel.app/) · [📝 **Report Bug**](https://github.com/DevanshuNEU/campus-resources/issues) · [💡 **Request Feature**](https://github.com/DevanshuNEU/campus-resources/issues)

⭐ **Star this repo if it helped you!** ⭐

</div>
