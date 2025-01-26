"use client";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const { cart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <h1>Cart</h1>
          <ul>
            {cart.map((food) => (
              <li key={food.id}>
                {food.name} 
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
