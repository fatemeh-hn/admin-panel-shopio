import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import ProductForm from "../components/ProductForm";
import type { ProductFormValues } from "../components/ProductForm";

export default function CreateProduct() {

  const handleSubmit = (data: ProductFormValues) => {
    console.log(data);
  };

  return (
    <Box>
      <Box className="mb-6 flex items-center justify-between">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Create New Product
        </Typography>


      </Box>

      <ProductForm onSubmit={handleSubmit} />
    </Box>
  );
}
