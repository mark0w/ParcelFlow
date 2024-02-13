import {Entity, Column, PrimaryGeneratedColumn, Unique} from 'typeorm';
import {nanoid} from "nanoid";

@Entity()
@Unique(["sku"])
export class Parcel {
    @PrimaryGeneratedColumn('uuid')
    id: string = nanoid(8);

    @Column()
    sku: string;

    @Column()
    description: string;

    @Column()
    address: string;

    @Column()
    town: string;

    @Column()
    country: string;

    @Column()
    deliveryDate: Date;
}
