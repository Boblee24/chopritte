export async function fetchFoods() {
  const baseUrl =
    typeof window !== "undefined" // Check if running on the client
      ? "" // Use relative path on the client
      : process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000"; // Absolute path on the server

  const response = await fetch(`${baseUrl}/api/foods`);

  if (!response.ok) {
    throw new Error("Failed to fetch foods");
  }

  return response.json();
}
