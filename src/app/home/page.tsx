"use client"
import {fetchFoods} from "@/app/lib/fetchFoods";
import { useState, useEffect } from "react";
import Image from "next/image";
const Home = () => {
    const [foods, setFoods] = useState([]);
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

    if (loading) return <div>Loading...</div>;

    return (
      <div>
        <h1>Foods</h1>
        <ul>
          {foods.map((food: any) => (
            <li
              key={food.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Image
                src={food.image}
                alt={food.name}
                width={200}
                height={200}
                style={{ marginRight: "1rem" }}
              />
              <span>{food.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
};
export default Home