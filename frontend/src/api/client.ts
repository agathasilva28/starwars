export async function api<T>(endpoint: string): Promise<T> {
  const res = await fetch(`http://localhost:3001${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}