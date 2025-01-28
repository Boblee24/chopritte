"use client";

import { useState } from "react";

interface CounterProps {
  initialQuantity?: number;
  onQuantityChange: (quantity: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  initialQuantity = 1,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-4 text-[25px]">
      <button
        className="border-2 border-solid border-black rounded-md "
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        className="bg-gray-200 px-3 py-2 rounded-md"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
