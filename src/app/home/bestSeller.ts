export interface Product {
  "productId": number,
  "productName": string,
  "categoryName": string,
  "description": string,
  "imageUrl": [
    {
      "imageUrl": string
    }
  ],
  "discount": number,
  "minStock": number,
  "price": number
}
