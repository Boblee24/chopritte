import { neon } from "@neondatabase/serverless";
import { faker } from "@faker-js/faker";

async function seedFoods() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  // Delete existing data
  // await sql("DELETE FROM foods");

  // Generate 10 sample foods
  const foods = Array.from({ length: 10 }, () => ({
    name: faker.food.dish(),
    ingredients: Array.from(
      { length: faker.number.int({ min: 5, max: 7 }) },
      () => ({
        name: faker.food.ingredient(),
        image: `https://source.unsplash.com/100x100/?ingredient`, // Random ingredient image URL
      })
    ),
    calories: faker.number.int({ min: 300, max: 800 }), // Random calories between 300 and 800
    image: `https://source.unsplash.com/100x100/?food`, // Random food image URL
  }));

  // console.log("Generated Foods:", JSON.stringify(foods, null, 2)); // Debugging log

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
