import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GpShopController } from '../controllers/gpShop.controller';
import { GpShopProvider } from '../providers/gpShop.provider';
import { ProductsApi } from '../api/products-api.service';

@Module({
  controllers: [GpShopController],
  providers: [GpShopProvider, ProductsApi],
  imports: [HttpModule],
})
export class GpShopModule {}
