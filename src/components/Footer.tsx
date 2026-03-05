import { Coffee, MapPin, Mail, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <span className="text-lg font-bold">CaféNomad</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Votre guide pour trouver les meilleurs cafés de travail au Sénégal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/cafes" className="hover:text-primary transition-colors">
                  Explorer les Cafés
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  À Propos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Villes</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Dakar</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Thiès</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@cafenomad.sn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            Fait avec <Heart className="h-4 w-4 text-primary fill-primary" /> pour les nomades digitaux du Sénégal
          </p>
          <p className="mt-2 text-secondary-foreground/60">© 2026 CaféNomad Sénégal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
