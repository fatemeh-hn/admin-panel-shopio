export interface Product {
    id: number,
    name: string,
    shortDescription: string,
    price: number,
    discountPrice: number,
    stockQuantity: number,
    inStock: boolean,
    categoryId: number,
    categoryName: string,
    brand: string,
    imageUrl: string,

}