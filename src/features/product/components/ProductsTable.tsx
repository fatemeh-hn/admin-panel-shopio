import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import type { Product } from "../types/product";

interface Props {
  products: Product[];
}

export default function ProductsTable({ products }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Slug</TableCell>
            <TableCell align="center">Quantity</TableCell>
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
