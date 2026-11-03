import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product";
import ProductsTable from "../components/ProductsTable";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

export default function ProductsDashboard() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const pageSize = 5;

  const [sortBy, setSortBy] = useState("");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }

    setPage(1);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", page, pageSize, sortBy, sortOrder],
    queryFn: () => getProducts({ page, pageSize, sortBy, sortOrder }),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products List</h1>

        <Button
          variant="contained"
          onClick={() => navigate("/products/create")}
          sx={{
            backgroundColor: "var(--app-primary)",
            color: "var(--app-drawer)",
            "&:hover": {
              backgroundColor: "var(--app-primary)",
              opacity: 0.85,
            },
            textTransform: "none",
          }}
        >
          Create New Product
        </Button>
      </div>

      <ProductsTable
        products={data?.items ?? []}
        onSort={handleSort}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />

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
