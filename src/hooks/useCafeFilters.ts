import { useState, useMemo } from "react";
import type { Cafe } from "../data/cafes";

interface UseCafeFiltersReturn {
  filteredCafes: Cafe[];
  search: string;
  setSearch: (value: string) => void;
  city: string | null;
  setCity: (value: string | null) => void;
  type: string | null;
  setType: (value: string | null) => void;
  resetFilters: () => void;
}

export function useCafeFilters(cafes: Cafe[]): UseCafeFiltersReturn {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  const filteredCafes = useMemo(() => {
    return cafes.filter((cafe) => {
      const matchSearch =
        search === "" ||
        cafe.name.toLowerCase().includes(search.toLowerCase()) ||
        cafe.location.toLowerCase().includes(search.toLowerCase());

      const matchCity = city === null || cafe.city === city;
      const matchType = type === null || cafe.type === type;

      return matchSearch && matchCity && matchType;
    });
  }, [cafes, search, city, type]);

  const resetFilters = () => {
    setSearch("");
    setCity(null);
    setType(null);
  };

  return {
    filteredCafes,
    search,
    setSearch,
    city,
    setCity,
    type,
    setType,
    resetFilters,
  };
}
