import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product";
import ProductsTable from "../components/ProductsTable";

import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchIcon } from "lucide-react";
import { useDebounce } from "../../../shared/Hooks/useDebounce";

export default function ProductsDashboard() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

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
    queryKey: ["products", page, pageSize, sortBy, sortOrder, debouncedSearch],

    queryFn: ({ signal }) =>
      getProducts({
        page,
        pageSize,
        sortBy,
        sortOrder,
        q: debouncedSearch,
        signal,
      }),
       placeholderData: (previousData) => previousData,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products List</h1>

        <div className="flex items-center gap-3">
          <TextField
            size="small"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon size={18} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--app-primary)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--app-primary)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--app-primary)",
                },
              },
            }}
          />

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
      </div>

      {/* Products Table */}
      <ProductsTable
        products={data?.items ?? []}
        onSort={handleSort}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />

      {/* Pagination */}
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
