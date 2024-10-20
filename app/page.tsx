import ProductsList from "@/components/ProductsList";
import products from "@/public/data/products.json";

const HomePage = () => {
  return (
    <main className="p-3">
      <ProductsList list={products} />
    </main>
  );
};

export default HomePage;
