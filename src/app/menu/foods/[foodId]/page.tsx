
import { fetchFoods } from "@/app/lib/fetchFoods";
import { Foods } from "@/app/lib/types";
import { useCartStore } from "@/app/store/cartStore";
import AddToCart from "@/app/ui/buttons/addToCart";
import Image from "next/image";

const FoodDetails = async ({
  params,
}: {
  params: Promise<{ foodId: string }>;
}) => {

  const { cart, addToCart, removeFromCart } = useCartStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }));
  const foodId = (await params).foodId;
  const foods: Foods[] = await fetchFoods();
  const food = foods.find((item) => item.id.toString() === foodId);

  if (!food) return <div>Food not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold pb-6 text-[#303030]">{food.name}</h1>
      <div className="shadow-top-bottom min-w-[374px] h-[271px] rounded-2xl flex flex-col justify-start p-3 mb-[2rem]">
        <div className="mb-[28px]">
          <Image
            src={food.image}
            alt={food.name}
            height={200}
            width={370}
            className=" h-[200px] rounded-md"
            priority={true}
          />
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={food.rating > 4 ? "#ff7b00" : "#d8d6d6"}
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <h1>
            {food.rating} <span>(300 Reviews)</span>
          </h1>
        </div>
      </div>
      <div className="p-6 shadow-top-bottom rounded-2xl text-[#383838]">
        <h1 className="font-semibold text-[1.2rem] mb-3">{food.name}</h1>
        <div className="grid grid-cols-2 gap-6 justify-between">
          <div className="flex items-center gap-3">
            <div className="h-[74px] w-2 bg-[#E23E3E] rounded-lg "></div>
            <div>
              <p className="text-[1.2rem] font-semibold">
                {food.about?.calories}g
              </p>
              <h1>Calories</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[74px] w-2 bg-[#E23E3E] rounded-lg"></div>
            <div>
              <p className="text-[1.2rem] font-semibold">{food.about?.fats}g</p>
              <h1>Fats</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[74px] w-2 bg-[#E23E3E] rounded-lg "></div>
            <div>
              <p className="text-[1.2rem] font-semibold">
                {food.about?.carbs}g
              </p>
              <h1>Carbs</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-[74px] w-2 bg-[#E23E3E] rounded-lg"></div>
            <div>
              <p className="text-[1.2rem] font-semibold">
                {food.about?.vitamins}g
              </p>
              <h1>Vitamins</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#2E3236] my-6">{food.about?.description}</p>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[1.2rem] font-semibold">Ingredients</h1>
          <h2 className="text-[#A9A9A9]">{food.ingredients?.length} items</h2>
        </div>
        <div>
          {food.ingredients?.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-4 p-3 shadow-lg border-[1px] border-slate-200 border-solid rounded-xl my-3"
            >
              <Image
                src={item.image}
                height={55}
                width={55}
                alt={item.name}
                priority={true}
                className="w-auto h-auto rounded-xl"
              />
              <h1 className="font-semibold ">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </h1>
              <h2 className="ml-auto text-[#A9A9A9] ">{item.mass}g</h2>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2">Rating: {food.rating}</p>
      <p>Prepared by: {food.person_name}</p>
      <div className="flex justify-center my-9">
        <button
          className="bg-[#E23E3E] rounded-xl text-[#ffffff] px-[2rem] py-4 font-medium"
          onClick={() => addToCart(food)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
