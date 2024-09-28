import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar'})
    title: string;
}
