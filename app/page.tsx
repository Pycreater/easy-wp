import { getProducts } from "@/actions/products";
import ProductGrid from "@/components/ui/ProductGrid";

export default async function Home() {
  const products = await getProducts();
  return <ProductGrid product={products} />;
}
