// src/app/menu/foods/[foodId]/page.tsx

import { fetchFoods } from "@/app/lib/fetchFoods";
import { Foods } from "@/app/lib/types";
import Image from "next/image";

interface FoodProps {
  food: Foods | null;
}

const FoodDetails = ({ food }: FoodProps) => {
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
        priority={true}
      />
      <p className="mt-2">Rating: {food.rating}</p>
      <p>Prepared by: {food.person_name}</p>
    </div>
  );
};

export default FoodDetails;

// src/app/menu/foods/[foodId]/page.tsx

export async function getServerSideProps({
  params,
}: {
  params: { foodId: string };
}) {
  const foods: Foods[] = await fetchFoods();
  const food = foods.find((item) => item.id.toString() === params.foodId);

  return {
    props: {
      food: food || null, // Handle case where food is not found
    },
  };
}
