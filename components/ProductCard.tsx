import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="border p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center hover:bg-gray-50 transition-all cursor-pointer">
      <img src={product.images[0]} alt={product.name} className="m-auto h-64 mb-4" />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="text-xl font-semibold text-blue-600 mb-2">
        {product.price.toLocaleString()} EGP
      </p>
      <p className="text-gray-500 mb-2">Freshness Guaranteed | Mixed Imported & Local</p>
      <div className="flex justify-center items-center">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-500">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
