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
}
