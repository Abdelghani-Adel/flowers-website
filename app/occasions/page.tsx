"use client";
import { useEffect, useState } from "react";
import ProductsList from "@/components/ProductsList";
import products from "@/public/data/products.json";

const Page = () => {
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const occasion = new URLSearchParams(window.location.search).get("occasion"); // Get category from URL arguments

  useEffect(() => {
    // Filter products based on category when it changes
    if (occasion) {
      const filtered = products.filter((product) =>
        product.occasions.includes(occasion)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If no category, show all products
    }
  }, [occasion, products]); // Re-run the filter if products or category change

  return (
    <div className="my-5">
      <h1 className="m-5 text-4xl text-center font-bold text-main">
        {occasion}
      </h1>
      <ProductsList list={filteredProducts} />
    </div>
  );
};

export default Page;
