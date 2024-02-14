import {BeforeInsert, Column, Entity, PrimaryColumn, Unique} from 'typeorm';
import {customAlphabet} from "nanoid";

@Entity()
@Unique(["sku", "id"])
export class Parcel {
    @PrimaryColumn()
    id: string

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

    @BeforeInsert()
    generateShortParcelId() {
        const timestampPart = (Date.now() - 1609459200000).toString(36).toUpperCase();
        const nanoid = customAlphabet('1234567890ABCDEFGHJKLMNPQRSTUVWXYZ', 4); // excluded characters where there might be confusion
        const randomPart = nanoid();
        this.id = `${timestampPart}${randomPart}`;
    }
}
