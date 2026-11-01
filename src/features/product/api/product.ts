import { productAxios } from "../../../app/api/interceptor";

export const getProducts = async (
  page: number,
  pageSize: number,
  sortBy?: string,
  sortOrder?: "asc" | "desc"
) => {
  const response = await productAxios.get("/products", {
    params: {
      page,
      pageSize,
      sortBy,
      sortOrder,
    },
  });

  return response.data;
};