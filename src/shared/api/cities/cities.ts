import { BACKEND_PORT, type CitiesQueryResult } from "@/shared";

export async function fetchCities(
  page = 1,
  limit = 10
): Promise<CitiesQueryResult | null> {
  try {
    const res = await fetch(
      `${BACKEND_PORT}/api/cities?page=${page}&limit=${limit}`,
      {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      }
    );
    return await res.json();
  } catch (error) {
    console.warn("error", error);
    return null;
  }
}
