import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import type { Product } from "../types/product";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";

interface Props {
  products: Product[];
  onSort: (field: string) => void;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export default function ProductsTable({
  products,
  onSort,
  sortBy,
  sortOrder,
}: Readonly<Props>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead
          sx={{
            "& .MuiTableCell-root": {
              color: "var(--app-text-secondary)",
            },
          }}
        >
          <TableRow>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full cursor-pointer"
                onClick={() => onSort("name")}
              >
                <span>Product Name</span>

                {sortBy === "name" && sortOrder === "asc" ? (
                  <ArrowUpNarrowWide size={20} />
                ) : (
                  <ArrowDownWideNarrow size={20} />
                )}
              </button>
            </TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full cursor-pointer"
                onClick={() => onSort("price")}
              >
                <span>Price</span>

                {sortBy === "price" && sortOrder === "asc" ? (
                  <ArrowUpNarrowWide size={20} />
                ) : (
                  <ArrowDownWideNarrow size={20} />
                )}
              </button>
            </TableCell>
            <TableCell align="center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full cursor-pointer"
                onClick={() => onSort("createdAt")}
              >
                <span>CreatedAt</span>

                {sortBy === "createdAt" && sortOrder === "asc" ? (
                  <ArrowUpNarrowWide size={20} />
                ) : (
                  <ArrowDownWideNarrow size={20} />
                )}
              </button>
            </TableCell>
            <TableCell align="center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full cursor-pointer"
                onClick={() => onSort("stockQuantity")}
              >
                <span>StockQuantity</span>

                {sortBy === "stockQuantity" && sortOrder === "asc" ? (
                  <ArrowUpNarrowWide size={20} />
                ) : (
                  <ArrowDownWideNarrow size={20} />
                )}
              </button>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell align="center">
                <img
                  src={`http://localhost:5080${product.imageUrl}`}
                  alt={product.name}
                  className="mx-auto h-12 w-12 object-cover"
                />
              </TableCell>

              <TableCell align="center">{product.name}</TableCell>
              <TableCell align="center">{product.brand}</TableCell>
              <TableCell align="center">{product.categoryName}</TableCell>
              <TableCell align="center">
                {product.price.toLocaleString()} تومان
              </TableCell>
              <TableCell align="center">
                {new Date(product.createdAt).toLocaleDateString("en-CA")}
              </TableCell>
              <TableCell align="center">{product.stockQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
