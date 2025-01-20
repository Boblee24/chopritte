import { fetchFoods } from "@/app/lib/fetchFoods";
import { Foods } from "@/app/lib/types";
import Image from "next/image";

interface Props {
  params: {
    foodId: string;
  };
}

const FoodDetails = async ({ params }: Props) => {
  const { foodId } = params;
  const foods: Foods[] = await fetchFoods();
  const food = foods.find((item) => item.id.toString() === foodId);

  if(!food) return<div>Food not found</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{food.name}</h1>
      <Image
        src={food.image}
        alt={food.name}
        height={200}
        width={200}
        className="w-full h-auto rounded-md"
        priority = {true}
        
      />
      <p className="mt-2">Rating: {food.rating}</p>
      <p>Prepared by: {food.person_name}</p>
    </div>
  );
};

export default FoodDetails