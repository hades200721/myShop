import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'double'})
    price: number;

    @Column({type: 'varchar'})
    description: string;

    @Column({type: 'int'})
    categoryId: number;

    @Column({type: 'varchar'})
    image: string;

    @Column({type: 'json'})
    rating: object;
}
