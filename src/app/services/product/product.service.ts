import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../types/Product';
import { EnvService } from './../env/env.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SelectedProduct: Product = {
    id: 0,
    name: "",
    description: "",
    imageUrl: [
      {
        imageUrl: ""
      }
    ],
    discount: 0,
    price: 0
  };
  constructor(
    private http: HttpClient,
    private env: EnvService
    ) {
  }

  getBestSeller():Observable<any>{
    return this.http.get(this.env.API_URL+'/api/product/bestseller?limit=6');
  }

  getProduct(id):Observable<any>{
    return this.http.get(this.env.API_URL+'/api/product/'+id)
  }

  castOfferToProduct(obj): Product{
    this.SelectedProduct.id = obj.offer.product.productId;
    this.SelectedProduct.name = obj.offer.product.productName;
    this.SelectedProduct.description = obj.offer.product.description;
    this.SelectedProduct.imageUrl = obj.offer.product.imageUrl;
    this.SelectedProduct.discount = obj.offer.discount;
    this.SelectedProduct.price = obj.price;
    
    console.log(this.SelectedProduct)
    return this.SelectedProduct
  }

  castObjToProductOnly(obj): Product{
    this.SelectedProduct.id = obj.product.productId;
    this.SelectedProduct.name = obj.product.productName;
    this.SelectedProduct.description = obj.product.description;
    this.SelectedProduct.imageUrl = obj.product.imageUrl;
    this.SelectedProduct.discount = obj.discount;
    this.SelectedProduct.price = obj.price;
    
    console.log(this.SelectedProduct)
    return this.SelectedProduct
  }

  calculatePrice(o):any{
    let PriceAfterDiscount;
    if(o.offer != null) {
      PriceAfterDiscount = this.OfferPrice(o)
    }else{
      PriceAfterDiscount = this.ProductPrice(o)
    }
    
    if(PriceAfterDiscount<1){
      return o.price;
    }
    return PriceAfterDiscount.toPrecision(3);
  }

  OfferPrice(o):any{
    return o.price - (o.offer.discount/100)*o.price;
  }

  ProductPrice(o):any{
    return o.price - (o.discount/100)*o.price;
  }
}
