import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-foreground">
              Campus Resources
            </h1>
            <span className="text-sm text-muted-foreground">
              Your guide to campus life
            </span>
          </div>
        </div>
      </header>
      
      <main className="container py-8">
        {children}
      </main>
      
      <footer className="border-t bg-muted/50 py-6 mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Campus Resources. Designed for student success.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ using React & TailwindCSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
