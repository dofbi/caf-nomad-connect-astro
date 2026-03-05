import { Star, Wifi, MapPin } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import type { Cafe } from "@/data/cafes"

interface CafeCardProps {
  cafe: Cafe
}

const CafeCard = ({ cafe }: CafeCardProps) => {
  return (
    <a href={`/cafe/${cafe.id}`}>
      <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group cursor-pointer h-full">
        <div className="relative h-48 bg-gradient-to-br from-ocean/20 to-primary/20 flex items-center justify-center">
          <span className="text-6xl">☕</span>
          {cafe.label && (
            <Badge 
              className="absolute top-3 right-3"
              style={{ 
                backgroundColor: cafe.label === 'Gold' ? 'hsl(45, 100%, 50%)' : 
                                  cafe.label === 'Platinum' ? 'hsl(210, 60%, 60%)' :
                                  cafe.label === 'Silver' ? 'hsl(0, 0%, 70%)' : 'hsl(30, 60%, 50%)',
                color: 'white'
              }}
            >
              {cafe.label}
            </Badge>
          )}
        </div>
        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {cafe.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{cafe.location}, {cafe.city}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{cafe.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Wifi className="h-3 w-3" />
              <span>{cafe.wifi}/5</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {cafe.description}
          </p>
        </CardContent>
      </Card>
    </a>
  )
}

export default CafeCard
