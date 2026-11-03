import { productAxios } from "../../../app/api/interceptor";

interface Prop {
  page: number,
  pageSize: number,
  sortBy?: string,
  sortOrder?: "asc" | "desc"
  q?: string;
  signal?: AbortSignal;
}

export const getProducts = async ({ page, pageSize, sortBy,sortOrder, q, signal,}: Prop) => {
  const response = await productAxios.get("/products", {
    params: {
      page,
      pageSize,
      sortBy,
      sortOrder,
      q,
    },
    signal,
  });

  return response.data;
};


interface CreateProductPayload {
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

export const createProduct = async (data: CreateProductPayload) => {
  const response = await productAxios.post("/products", data, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlOGI4ODAzNC1iYmQxLTRhYWUtYmYzMi0xNzMxNmYzZjk4OGQiLCJ1bmlxdWVfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtb3JzZXN0b3JlLmxvY2FsIiwianRpIjoiOTZiN2IwZTU4OTUxNDgzZmI2NmU5NjcxMTY0ZmUxYTkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImU4Yjg4MDM0LWJiZDEtNGFhZS1iZjMyLTE3MzE2ZjNmOTg4ZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzkzNzQzMDYyLCJpc3MiOiJNb3JzZVN0b3JlQXBpIiwiYXVkIjoiTW9yc2VTdG9yZUFwaS5DbGllbnRzIn0.IyXwDvYd7DPiMdHtWhdQJ-k0ktZzGGmJHU0RU3jnhKw",
    },
  });

  return response.data;
};