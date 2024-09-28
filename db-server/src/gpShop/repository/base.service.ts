import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities';

@Injectable()
export abstract class BaseService<T> {
  protected constructor(
    @InjectRepository(Product)
    private readonly entityRepository: Repository<T>,
    private readonly tableName: string,
  ) {}

  async getAll(): Promise<T[]> {
    const query = `SELECT * FROM ${this.tableName}`;
    try {
      return await this.entityRepository.query(query);
    } catch (error) {
      throw new InternalServerErrorException('SQL Error: ' + error.sqlMessage);
    }
  }

  async findById(id: number | string, idColumn: string): Promise<T | null> {
    const query = `SELECT * FROM ${this.tableName} WHERE ${idColumn} = ?`;
    try {
      return await this.entityRepository.query(query, [id]);
    } catch (error) {
      throw new InternalServerErrorException('SQL Error: ' + error.sqlMessage);
    }
  }

}
