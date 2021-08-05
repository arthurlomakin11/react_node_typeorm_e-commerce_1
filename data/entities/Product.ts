import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('Products', {schema: 'dbo'})
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    Name!: string;

    @Column()
    Description!: string;
}