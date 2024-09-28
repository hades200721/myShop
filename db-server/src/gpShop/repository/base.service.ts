import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {FindOptionsWhere, Repository} from 'typeorm';
import { Product } from '../entities';

interface BaseEntity {
  id: number;
}

@Injectable()
export abstract class BaseService<T extends BaseEntity> {
  protected constructor(
    @InjectRepository(Product)
    private readonly entityRepository: Repository<T>,
    private readonly tableName: string,
  ) {}

  async getAll(): Promise<T[]> {
    const query = `SELECT * FROM ${this.tableName}`;
    try {
      return await this.entityRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('SQL Error: ' + error.sqlMessage);
    }
  }

  async findById(id: number): Promise<T | null> {
    try {
      return await this.entityRepository.findOne({
        where: { id } as FindOptionsWhere<T>,
      });
    } catch (error) {
      throw new InternalServerErrorException('SQL Error: ' + error.sqlMessage);
    }
  }

}
