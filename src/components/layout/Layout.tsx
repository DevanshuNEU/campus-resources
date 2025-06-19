import React from 'react'
import { GraduationCap, Heart } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Campus Resources
              </h1>
              <span className="text-sm text-muted-foreground font-medium">
                Your guide to campus life
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container py-12 flex-1">
        {children}
      </main>
      
      <footer className="border-t bg-gradient-to-r from-muted/30 to-muted/50 py-8 mt-auto">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              © 2025 Campus Resources. Designed for student success.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TailwindCSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
