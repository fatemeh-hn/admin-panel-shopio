import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product";
import ProductsTable from "../components/ProductsTable";
import Pagination from "@mui/material/Pagination";

export default function ProductsDashboard() {
  const [page, setPage] = useState(1);

  const pageSize = 5;

  const [sortBy, setSortBy] = useState("");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: string) => {
    setSortBy(field);

    setSortOrder((currentOrder) => (currentOrder === "asc" ? "desc" : "asc"));

    setPage(1);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", page, pageSize, sortBy, sortOrder],
    queryFn: () => getProducts(page, pageSize, sortBy, sortOrder),
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

      <ProductsTable products={data?.items ?? []} onSort={handleSort} />

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
