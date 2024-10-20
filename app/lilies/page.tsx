import ProductsList from "@/components/ProductsList";
import products from "@/public/data/products.json";

const LiliesPage = () => {
  const lilies = products.filter((product) => product.categories.includes("Lilies"));

  return (
    <main className="p-3">
      <ProductsList list={lilies} />
    </main>
  );
};

export default LiliesPage;
