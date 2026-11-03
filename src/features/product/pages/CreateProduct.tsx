import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductForm from "../components/ProductForm";
import type { ProductFormValues } from "../components/ProductForm";
import { createProduct } from "../api/product";

export default function CreateProduct() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: ProductFormValues) => createProduct(data),

    onSuccess:async() => {
      await queryClient.invalidateQueries({ queryKey: ["products"] });
      await navigate("/products");
    },
  });

  const handleSubmit = (data: ProductFormValues) => {
    mutation.mutate(data);
  };

  return (
    <Box>
      <Box className="mb-6 flex items-center justify-between">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Create New Product
        </Typography>

      
      </Box>

      <ProductForm onSubmit={handleSubmit} isPending={mutation.isPending} />
    </Box>
  );
}