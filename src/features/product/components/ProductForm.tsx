import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export interface ProductFormValues {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  discountPrice: number;
  sku: string;
  stockQuantity: number;
  categoryId: number;
  brand: string;
  isFeatured: boolean;
  isActive: boolean;
}

interface Props {
  onSubmit: (data: ProductFormValues) => void;
  isPending: boolean;
}

export default function ProductForm({ onSubmit , isPending}: Readonly<Props>) {
  const [formData, setFormData] = useState<ProductFormValues>({
    name: "",
    slug: "",
    description: "",
    shortDescription: "",
    price: 0,
    discountPrice: 0,
    sku: "",
    stockQuantity: 0,
    categoryId: 0,
    brand: "",
    isFeatured: false,
    isActive: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    let newValue: string | number | boolean = value;

    if (type === "checkbox") {
      newValue = checked;
    } else if (type === "number") {
      newValue = Number(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <TextField
        label="Product Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="Slug"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
        required
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="Brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="SKU"
        name="sku"
        value={formData.sku}
        onChange={handleChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="Category ID"
        name="categoryId"
        type="number"
        value={formData.categoryId}
        onChange={handleChange}
        required
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        required
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="Discount Price"
        name="discountPrice"
        type="number"
        value={formData.discountPrice}
        onChange={handleChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="Stock Quantity"
        name="stockQuantity"
        type="number"
        value={formData.stockQuantity}
        onChange={handleChange}
        required
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="Short Description"
        name="shortDescription"
        value={formData.shortDescription}
        onChange={handleChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        className="md:col-span-2"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--app-primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--app-primary)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--app-primary)",
          },
        }}
      />

      <Box className="flex gap-4 md:col-span-2">
        <FormControlLabel
          label="Featured Product"
          control={
            <Switch
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "var(--app-primary)",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "var(--app-primary)",
                  opacity: 1,
                },
              }}
            />
          }
        />

        <FormControlLabel
          label="Active Product"
          control={
            <Switch
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "var(--app-primary)",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "var(--app-primary)",
                  opacity: 1,
                },
              }}
            />
          }
        />
      </Box>

      <Box className="flex justify-end md:col-span-2">
        <Button
          type="submit"
          variant="contained"
          disabled={isPending}
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
          {isPending ? "Creating..." : "Create Product"}
        </Button>
      </Box>
    </Box>
  );
}
