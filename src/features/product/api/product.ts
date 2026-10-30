import { productAxios } from "../../../app/api/interceptor";

export const getProducts = async (page: number, pageSize: number) => {
  const response = await productAxios.get("/products", {
    params: {
      page,
      pageSize,
    },
  });

  return response.data;
};