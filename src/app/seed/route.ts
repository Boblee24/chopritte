import { neon } from "@neondatabase/serverless";
import { faker } from "@faker-js/faker";

async function seedFoods() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  // Generate 10 sample foods
  const foods = Array.from({ length: 10 }, () => ({
    name: faker.food.dish(),
    ingredients: Array.from(
      { length: faker.number.int({ min: 5, max: 7 }) },
      () => ({
        name: faker.food.ingredient(),
        image: faker.image.urlLoremFlickr({
          width: 100,
          height: 100,
          category: "food",
        }), // Generate random ingredient image URL
      })
    ), // Generating 5 random ingredients
    calories: faker.number.int({ min: 1100, max: 1800 }), // Random calories between 100 and 800
    image: faker.image.urlLoremFlickr({
      height: 100,
      width: 100,
      category: "food",
    }), // Generate random food image URL
  }));
  //delete existing data
  await sql("DELETE FROM foods");

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
