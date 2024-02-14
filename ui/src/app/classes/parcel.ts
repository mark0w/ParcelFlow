export class Parcel {
    id?: string;
    sku: string;
    description: string;
    address: string;
    town: string;
    country: string;
    deliveryDate: Date;

    constructor(
        sku: string,
        description: string,
        address: string,
        town: string,
        country: string,
        deliveryDate: Date,
        id?: string,
    ) {
        if (id) {
            this.id = id;
        }
        this.sku = sku;
        this.description = description;
        this.address = address;
        this.town = town;
        this.country = country;
        this.deliveryDate = deliveryDate;
    }
}
