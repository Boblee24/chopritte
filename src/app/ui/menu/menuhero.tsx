"use client";
import { fetchFoods } from "@/app/lib/fetchFoods";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/menu/hero/loading";
import { Foods } from "../../lib/types";

const MenuHero = () => {
  const [foods, setFoods] = useState<Foods[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getFoods = async () => {
      try {
        const data = await fetchFoods();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    getFoods();
  }, []);
  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex justify-between">
        <h1>Local Meal🔥</h1>
        <Link href={`/menu/foods`}>
          See all
        </Link>
      </div>
      <div className="overflow-x-auto ">
        <div className="flex gap-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className=" relative flex-shrink-0 h-[254px] w-[280px] items-center mb-4 "
            >
              <Image
                src={food.image}
                alt={food.name}
                width={280}
                height={180}
                className="rounded-md w-[280] h-[180] mb-3"
                priority={true}
              />
              <div className="mb-2 text-[#303030] font-semibold">
                {food.name}
              </div>
              <div className="flex gap-2">
                <Image
                  src={food.person_image}
                  alt={food.person_name}
                  width={35}
                  height={35}
                  priority={true}
                  className="rounded-full "
                />
                <h1 className="text-[#A9A9A9]">{food.person_name}</h1>
              </div>
              <div className="absolute top-0 left-0 bg-red flex items-center">
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
                <h1 className="text-white font-semibold">{food.rating}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MenuHero;
