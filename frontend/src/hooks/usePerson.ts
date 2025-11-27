import { useQuery } from "@tanstack/react-query";
import type { Person } from "../types/people";
import { api } from "../api/client";

export function usePerson(id: string) {
  return useQuery<Person>({
    queryKey: ["person", id],
    queryFn: () => api(`/people/${id}`),
    enabled: Boolean(id),
  });
}