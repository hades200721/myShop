import { Injectable } from '@nestjs/common';
import { ProductsApi } from '../api/products-api.service';
import {ProductInterface} from '../types';

@Injectable()
export class GpShopProvider {
  constructor(private historicalForecast: ProductsApi) {}

  async getProducts() {
    return this.historicalForecast.fetchProducts();
  }

  async getProductById(id: number) {
    const response = await this.historicalForecast.fetchProducts() as any;
    return response.find((product: ProductInterface) => product.id === id);
  }
}
