"use client";

import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import Counter from "../ui/buttons/counter";

const Cart = () => {
  
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div className="px-6">
      {cart.length > 0 ? (
        <div>
          <h1>Cart</h1>
          <div className="flex flex-col gap-4">
            {cart.map((food, index) => (
              <div key={`${food.id}-${index}`} className=" flex gap-3 items-center">
                <div>
                  <Image
                    src={food.image}
                    alt={food.name}
                    height={50}
                    width={50}
                    priority={true}
                    className="w-auto h-auto rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-between h-[60px]">
                  <h2 className="font-semibold">{food.name}</h2>
                  <h2 className="font-bold">N{food.price}</h2>
                </div>
                <div className=" ml-auto">
                  <Counter
                    initialQuantity={food.quantity || 1}
                    onQuantityChange={(newQuantity) => {
                      updateQuantity(food.id, newQuantity); // Use the store function
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
