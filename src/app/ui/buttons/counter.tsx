"use client";

import { MinusIcon, PlusIcon } from "@/app/assets/icons";
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
    <div className="flex items-center space-x-4 text-[25px] ">
      <button
        className="bg-gray-100 p-2 rounded-md py-[.9rem]"
        onClick={handleDecrement}
      >
        <PlusIcon />
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button className="bg-gray-100 p-2  rounded-md" onClick={handleIncrement}>
        <MinusIcon />
      </button>
    </div>
  );
};

export default Counter;
