import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Parcel} from "../entity/parcel.entity";
import {CreateParcelDto} from "./dto/create-parcel.dto";

@Injectable()
export class ParcelsService {
    constructor(
        @InjectRepository(Parcel)
        private parcelsRepository: Repository<Parcel>,
    ) {
    }

    async create(createParcelDto: CreateParcelDto): Promise<Parcel> {
        const parcel = this.parcelsRepository.create(createParcelDto);
        try {
            return await this.parcelsRepository.save(parcel);
        } catch (error) {
            throw new Error('SKU already exists');
        }
    }

    async createMockData(): Promise<boolean> {
        for (let i = 0; i < 51; i++) {
            const mockParcelDto = this.generateMockParcel(i);
            await this.create(mockParcelDto);
        }
        return true
    }

    async findAll(country?: string, description?: string): Promise<Parcel[]> {
        let query = this.parcelsRepository.createQueryBuilder('parcel');

        if (country) {
            query = query.andWhere('parcel.country = :country', {country});
        }

        if (description) {
            query = query.andWhere('parcel.description LIKE :description', {description: `%${description}%`});
        }

        query = query.orderBy(`
        CASE
            WHEN parcel.country = 'Estonia' THEN 0
            ELSE 1
        END, parcel.deliveryDate`, 'ASC');
        return query.getMany();
    }

    private generateMockParcel(index: number): CreateParcelDto {
        const countries = ['Estonia', 'USA', 'UK', 'Germany', 'Poland', 'Latvia'];
        const randomCountryIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomCountryIndex];

        // Generate a random date within the last 30 days
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 30);
        const endDate = new Date();
        const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

        const mockParcel = new CreateParcelDto();
        mockParcel.sku = `SKU-${index}`;
        mockParcel.description = 'A very important parcel';
        mockParcel.address = '123 Mock Street';
        mockParcel.town = 'Mocktown';
        mockParcel.country = randomCountry;
        mockParcel.deliveryDate = randomDate;
        return mockParcel;
    }
}
