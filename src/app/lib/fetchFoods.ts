import { Foods } from "@/app/lib/types";

export async function fetchFoods(): Promise<Foods[]> {
  const baseUrl =
    typeof window !== "undefined"
      ? "" // Use relative path on the client
      : process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000"; // Absolute path on the server

  try {
    const response = await fetch(`${baseUrl}/api/foods`, {cache: "force-cache"});

    if (!response.ok) {
      throw new Error(`Failed to fetch foods: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching foods:", error);
    throw error; // Re-throw the error for upstream handling
  }
}
