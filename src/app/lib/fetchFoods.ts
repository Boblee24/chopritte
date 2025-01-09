// lib/fetchFoods.ts
export async function fetchFoods() {
  const response = await fetch("/api/foods");

  if (!response.ok) {
    throw new Error("Failed to fetch foods");
  }

  return response.json();
}
