import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cities, types, type Cafe } from "../data/cafes";
import { CafeGrid } from "./CafeGrid";

interface CafeFiltersProps {
  cafes: Cafe[];
}

export function CafeFilters({ cafes }: CafeFiltersProps) {
  const [search, setSearch] = useState("");
  const [localSearch, setLocalSearch] = useState("");
  const [city, setCity] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(localSearch);
    }, 300);

    return () => clearTimeout(timer);
  }, [localSearch]);

  // Filter cafes
  const filteredCafes = cafes.filter((cafe) => {
    const matchSearch =
      search === "" ||
      cafe.name.toLowerCase().includes(search.toLowerCase()) ||
      cafe.location.toLowerCase().includes(search.toLowerCase());

    const matchCity = city === null || cafe.city === city;
    const matchType = type === null || cafe.type === type;

    return matchSearch && matchCity && matchType;
  });

  const resetFilters = () => {
    setSearch("");
    setLocalSearch("");
    setCity(null);
    setType(null);
  };

  const hasActiveFilters = search !== "" || city !== null || type !== null;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Rechercher par nom ou quartier..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="h-12 pl-10 pr-10"
        />
        {localSearch && (
          <button
            onClick={() => setLocalSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* City Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Ville:</span>
          <Button
            variant={city === null ? "default" : "outline"}
            size="sm"
            onClick={() => setCity(null)}
          >
            Toutes
          </Button>
          {cities.map((c) => (
            <Button
              key={c}
              variant={city === c ? "default" : "outline"}
              size="sm"
              onClick={() => setCity(c)}
            >
              {c}
            </Button>
          ))}
        </div>

        {/* Type Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Type:</span>
          <Button
            variant={type === null ? "default" : "outline"}
            size="sm"
            onClick={() => setType(null)}
          >
            Tous
          </Button>
          {Object.entries(types).map(([key, label]) => (
            <Button
              key={key}
              variant={type === key ? "default" : "outline"}
              size="sm"
              onClick={() => setType(key)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <p className="text-muted-foreground text-sm">
          {filteredCafes.length} café{filteredCafes.length !== 1 ? "s" : ""} trouvé
          {filteredCafes.length !== 1 ? "s" : ""}
        </p>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Réinitialiser les filtres
          </Button>
        )}
      </div>

      {/* Results Grid */}
      <CafeGrid cafes={filteredCafes} />
    </div>
  );
}
