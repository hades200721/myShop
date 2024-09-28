import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from '../repository';

@Controller('product')
export class ProductController {
  constructor(private readonly productProvider: ProductService) {}

  @Get()
  async getProducts() {
    return this.productProvider.getAll();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return this.productProvider.findProductById(Number(id));
  }
}
