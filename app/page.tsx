import Filter from "@/components/Filter";
import ProductsList from "@/components/ProductsList";
import products from "@/public/data/products.json";

const HomePage = () => {
  return (
    <main>
      <div className="flex">
        <div className="w-1/2 hidden md:block">
          <Filter />
        </div>
        <ProductsList list={products} />
      </div>
    </main>
  );
};

export default HomePage;
