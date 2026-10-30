import { useEffect, useState } from "react";
import { getProducts } from "../api/product";
import type { Product } from "../types/product";

export default function ProductsDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();

        console.log("API DATA:", res.data);

        setProducts(res.data.items);
      } catch (error) {
        console.error("API ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Products List</h1>

      {products.map((product) => (
        <div key={product.id} className="border p-4 my-2">
          <img src={`http://localhost:5080${product.imageUrl}`} alt={product.name} />
          <p>{product.shortDescription}</p>
          <p>{product.brand}</p>
          <p className="text-green-400">{product.price}</p>
          <p className="text-red-400">{product.discountPrice}</p>
          <p>{product.categoryName}</p>

          
        </div>
      ))}
    </div>
  );
}