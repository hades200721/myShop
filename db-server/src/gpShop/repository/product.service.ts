import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from './base.service';
import { Product } from '../entities';

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(
    @InjectRepository(Product)
    private patientRepository: Repository<Product>,
  ) {
    super(patientRepository, 'product');
  }

  async findProductById(id: number): Promise<Product> {
    return this.findById(id, 'id');
  }

}
