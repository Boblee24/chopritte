"use client";

import { useCartStore } from "@/app/store/cartStore";

const CartLength = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="bg-[#E23E3E] text-[#ffffff] py-[2px] px-2 rounded-lg font-semibold border">
          {cart.length}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default CartLength;
