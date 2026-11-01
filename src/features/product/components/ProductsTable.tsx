import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import type { Product } from "../types/product";
import { ArrowUpNarrowWide } from "lucide-react";

interface Props {
  products: Product[];
  onSort: (field: string) => void;
}

export default function ProductsTable({ products, onSort }: Props) {
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
              <div className="flex items-center justify-center gap-2">
                <span>Product Name</span>

                <button type="button" onClick={() => onSort("name")}>
                  <ArrowUpNarrowWide size={20} />
                </button>
              </div>
            </TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">
              <div className="flex items-center justify-center gap-2">
                <span>Price</span>

                <button type="button" onClick={() => onSort("price")}>
                  <ArrowUpNarrowWide size={20} />
                </button>
              </div>
            </TableCell>
            <TableCell align="center">Slug</TableCell>
            <TableCell align="center">
              <div className="flex items-center justify-center gap-2">
                <span>Quantity</span>

                <button type="button" onClick={() => onSort("stockQuantity")}>
                  <ArrowUpNarrowWide size={20} />
                </button>
              </div>
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
              <TableCell align="center">{product.slug}</TableCell>
              <TableCell align="center">{product.stockQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
