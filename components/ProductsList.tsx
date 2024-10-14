import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ list }: { list: any[] }) => {
  return (
    <div className="flex flex-wrap">
      {list.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
