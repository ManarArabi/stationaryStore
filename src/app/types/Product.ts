export interface Product {
    id: number,
    name: string,
    description: string,
    imageUrl: [
      {
        imageUrl: string
      }
    ],
    discount: number,
    price: number
}
  