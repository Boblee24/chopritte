import { neon } from "@neondatabase/serverless";
import { faker } from "@faker-js/faker";

async function seedFoods() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  // Function to fetch a random image from Unsplash
  async function fetchImages() {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
      );

      if (response.status === 403) {
        console.warn("Rate limit exceeded. Using placeholder image.");
        return "https://via.placeholder.com/100";
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.status}`);
      }

      const data = await response.json();
      return data.urls.regular || "https://via.placeholder.com/100";
    } catch (error) {
      console.error("Error fetching images:", error);
      return "https://via.placeholder.com/100";
    }
  }

  // Delete existing data
  await sql("DELETE FROM foods");

  // Generate 10 sample foods
  const foods = await Promise.all(
    Array.from({ length: 10 }).map(async () => ({
      name: faker.food.dish(),
      ingredients: await Promise.all(
        Array.from({ length: faker.number.int({ min: 5, max: 7 }) }).map(
          async () => ({
            name: faker.food.ingredient(),
            image: faker.image.urlPicsumPhotos({
              height: 200,
              width: 200,
              grayscale: false,
              blur: 0,
            }), // Fetch random ingredient image
          })
        )
      ),
      calories: faker.number.int({ min: 300, max: 800 }), // Random calories between 300 and 800
      image: faker.image.urlPicsumPhotos({
        width: 200,
        height: 200,
        grayscale: false,
        blur: 0,
      }), // Fetch random food image
    }))
  );

  // Insert data into the 'foods' table
  for (const food of foods) {
    await sql(
      "INSERT INTO foods (name, ingredients, calories, image) VALUES ($1, $2, $3, $4)",
      [food.name, JSON.stringify(food.ingredients), food.calories, food.image]
    );
  }

  console.log("Foods seeded successfully with images!");
}

seedFoods().catch(console.error);
