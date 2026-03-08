import type { Cafe } from "../data/cafes";
import CafeCard from "./CafeCard";

interface CafeGridProps {
  cafes: Cafe[];
}

export function CafeGrid({ cafes }: CafeGridProps) {
  if (cafes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          Aucun café ne correspond à vos critères.
        </p>
        <p className="text-muted-foreground mt-2">
          Essayez de modifier vos filtres.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cafes.map((cafe) => (
        <CafeCard key={cafe.id} cafe={cafe} />
      ))}
    </div>
  );
}
