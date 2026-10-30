import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product";
import type { Product } from "../types/product";
import ProductsTable from "./ProductsTable";

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
      <h1 className="mb-6 text-2xl font-bold">
        Products List
      </h1>

      <ProductsTable products={data?.items ?? []} />
    </div>
  );
}