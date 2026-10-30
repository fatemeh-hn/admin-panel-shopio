export interface Product {
    id: number,
    name: string,
    shortDescription: string,
    price: number,
    discountPrice: number,
    stockQuantity: number,
    inStock: boolean,
    slug:string,
    categoryId: number,
    categoryName: string,
    brand: string,
    imageUrl: string,

}