import { Controller, Get, Param } from '@nestjs/common';
import { GpShopProvider } from '../providers/gpShop.provider';

@Controller('product')
export class GpShopController {
  constructor(private readonly gpShopProvider: GpShopProvider) {}

  @Get()
  async getProducts() {
    return this.gpShopProvider.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return this.gpShopProvider.getProductById(Number(id));
  }
}
