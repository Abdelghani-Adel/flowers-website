import ProductsList from "@/components/ProductsList";
import products from "@/public/data/products.json";

const TulipsPage = () => {
  const tulips = products.filter((product) => product.categories.includes("Tulips"));

  return (
    <main className="p-3">
      <ProductsList list={tulips} />
    </main>
  );
};

export default TulipsPage;
