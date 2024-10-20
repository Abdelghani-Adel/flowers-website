import ProductsList from "@/components/ProductsList";
import products from "@/public/data/products.json";

const RosesPage = () => {
  const roses = products.filter((product) => product.categories.includes("Roses"));

  return (
    <main className="p-3">
      <ProductsList list={roses} />
    </main>
  );
};

export default RosesPage;
