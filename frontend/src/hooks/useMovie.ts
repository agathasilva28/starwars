import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";
import type { Movie } from "../types/movie";

export function useMovie(id: string) {
  return useQuery<Movie>({
    queryKey: ['film', id],
    queryFn: () => api(`/movies/${id}`),
  });
}