import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";

export function useSearch(type: string, search?: string) {
  return useQuery({
    queryKey: [type, search],
    queryFn: () => api(`/search?q=${search}&type=${type}`),
    enabled: false,
  });
}
