export class Parcel {
    id: string;
    sku: string;
    description: string;
    address: string;
    town: string;
    country: string;
    deliveryDate: Date;

    constructor(
        id: string,
        sku: string,
        description: string,
        address: string,
        town: string,
        country: string,
        deliveryDate: Date
    ) {
        this.id = id;
        this.sku = sku;
        this.description = description;
        this.address = address;
        this.town = town;
        this.country = country;
        this.deliveryDate = deliveryDate;
    }
}
