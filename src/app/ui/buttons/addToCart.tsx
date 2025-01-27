"use client"

import { Foods } from "@/app/lib/types";
import { useCartStore } from "@/app/store/cartStore"

const AddToCart = ({food} : {food: Foods}) => {
    // const {addToCart} = useCartStore((state) => ({
    //     addToCart: state.addToCart
    // }))
    const addToCart = useCartStore((state) => state.addToCart);
    return (
      <div>
        <button
          className="bg-[#E23E3E] rounded-xl text-[#ffffff] px-[2rem] py-4 font-medium"
          onClick={() => addToCart(food)}
        >
          Add to cart
        </button>
      </div>
    );
}

export default AddToCart