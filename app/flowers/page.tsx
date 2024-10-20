import ProductsList from "@/components/ProductsList";
import products from "@/public/data/products.json";

const FlowersPage = () => {
  const flowers = products.filter((product) => product.categories.includes("Flowers"));

  return (
    <main className="p-3">
      <ProductsList list={flowers} />
    </main>
  );
};

export default FlowersPage;
