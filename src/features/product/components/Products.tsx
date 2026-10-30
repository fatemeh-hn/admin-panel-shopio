import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product";
import ProductsTable from "../components/ProductsTable";
import Pagination from "@mui/material/Pagination";

export default function ProductsDashboard() {
  const [page, setPage] = useState(1);

  const pageSize = 5;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", page, pageSize],
    queryFn: () => getProducts(page, pageSize),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Products List</h1>

      <ProductsTable products={data?.items ?? []} />

      <div className="mt-6 flex justify-center">
        <Pagination
          count={data?.totalPages ?? 1}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "var(--app-primary)",
            },

            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "var(--app-primary)",
            },

            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "var(--app-primary)",
            },
          }}
        />
      </div>
    </div>
  );
}
