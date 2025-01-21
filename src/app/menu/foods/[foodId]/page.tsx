import { fetchFoods } from "@/app/lib/fetchFoods";
import { Foods } from "@/app/lib/types";
import Image from "next/image";

// Generates static paths for dynamic routes
export async function generateStaticParams() {
  const foods: Foods[] = await fetchFoods();
  return foods.map((food) => ({
    foodId: food.id.toString(),
  }));
}

// Dynamic route component
const FoodDetails = async ({ params }: { params: Promise<{ foodId: string }> }) => {
  const { foodId } = await params;
  const foods: Foods[] = await fetchFoods();
  const food = foods.find((item) => item.id.toString() === foodId);

  if (!food) return <div>Food not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{food.name}</h1>
      <Image
        src={food.image}
        alt={food.name}
        height={200}
        width={200}
        className="w-full h-auto rounded-md"
        priority
      />
      <p className="mt-2">Rating: {food.rating}</p>
      <p>Prepared by: {food.person_name}</p>
    </div>
  );
};

export default FoodDetails;
