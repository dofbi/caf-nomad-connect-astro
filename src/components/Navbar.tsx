import { useState } from "react"
import { Menu, X, Coffee } from "lucide-react"
import { Button } from "./ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Coffee className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">
              CafeNomad
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="/cafes" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Explorer
            </a>
            <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              A Propos
            </a>
            <Button className="bg-primary text-primary-foreground shadow-soft hover:shadow-card transition-all">
              Rejoindre
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </a>
            <a
              href="/cafes"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Explorer
            </a>
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              A Propos
            </a>
            <Button className="w-full bg-primary text-primary-foreground shadow-soft">
              Rejoindre
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
