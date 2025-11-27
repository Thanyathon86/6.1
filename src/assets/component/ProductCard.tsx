// src/components/ProductCard.tsx
import React from "react";
import Button from "./Button";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full md:w-80">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />

      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{description}</p>

      <p className="text-blue-600 font-bold mb-3">${price.toFixed(2)}</p>

      <Button variant="primary" onClick={onAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
