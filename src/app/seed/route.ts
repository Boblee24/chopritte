import { neon } from "@neondatabase/serverless";
import { faker } from "@faker-js/faker";

async function seedFoods() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  // Delete existing DATA
  await sql("DELETE FROM foods");

  // Generate 10 sample foods
  const foods = await Promise.all(
    Array.from({ length: 10 }).map(async () => ({
      name: faker.food.dish(),
      ingredients: await Promise.all(
        Array.from({ length: faker.number.int({ min: 5, max: 7 }) }).map(
          async () => ({
            name: faker.food.ingredient(),
            mass: faker.number.int({ min: 150, max: 200 }),
            image: faker.image.urlPicsumPhotos({
              height: 200,
              width: 200,
              grayscale: false,
              blur: 0,
            }), // Fetch random ingredient image
          })
        )
      ),
      about: {
        summary: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        calories: faker.number.int({ min: 600, max: 800 }),
        fats: faker.number.int({ min: 140, max: 200 }),
        vitamins: faker.number.int({ min: 50, max: 100 }),
        carbs: faker.number.int({ min: 220, max: 300 }),
      },
      price: faker.number.int({min: 10, max: 19}) * 100,
      image: faker.image.urlPicsumPhotos({
        width: 200,
        height: 200,
        grayscale: false,
        blur: 0,
      }), // Fetch random food image
      person_name: faker.person.fullName(),
      person_image: faker.image.urlPicsumPhotos({
        width: 100,
        height: 100,
        grayscale: false,
        blur: 0,
      }),
      rating: faker.number.float({ multipleOf: 0.25, min: 3, max: 5 }),
    }))
  );

  // Insert data into the 'foods' table
  for (const food of foods) {
    await sql(
      "INSERT INTO foods (name, ingredients, about, image, person_name, person_image, rating, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        food.name,
        JSON.stringify(food.ingredients),
        JSON.stringify(food.about),
        food.image,
        food.person_name,
        food.person_image,
        food.rating,
        food.price
      ]
    );
  }

  console.log("Foods seeded successfully with images!");
}

seedFoods().catch(console.error);
