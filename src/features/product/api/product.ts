import { productAxios } from "../../../app/api/interceptor";


export const getProducts = async () => {
  const response = await productAxios.get("/products");
  return response.data;
};