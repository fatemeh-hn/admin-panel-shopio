import { productAxios } from "../../../app/api/interceptor";

interface Prop{
  page:number,
  pageSize:number,
  sortBy?:string,
  sortOrder?:"asc" | "desc"
}

export const getProducts = async ({page, pageSize, sortBy, sortOrder}:Prop) => {
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