import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product";
import type { Product } from "../types/product";

interface ProductsResponse {
  items: Product[];
}

export default function ProductsDashboard() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading to get Products...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Products List</h1>

      {data?.items.map((product) => (
        <div key={product.id} className="border p-4 my-2">
          <img
            src={`http://localhost:5080${product.imageUrl}`}
            alt={product.name}
            className="w-32 h-32 object-cover"
          />

          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}