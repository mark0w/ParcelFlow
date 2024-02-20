import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {ParcelsService} from './parcels.service';
import {Parcel} from '../entity/parcel.entity';

@Controller('parcels')
export class ParcelsController {
    constructor(private readonly parcelsService: ParcelsService) {
    }

    @Post()
    async create(@Body() parcel: Parcel): Promise<Parcel> {
        return this.parcelsService.create(parcel);
    }

    @Post('mock-data')
    async createMockData(): Promise<boolean> {
        return this.parcelsService.createMockData();
    }

    @Get()
    async findAll(
        @Query('country') country?: string,
        @Query('description') description?: string,
    ): Promise<Parcel[]> {
        return this.parcelsService.findAll(country, description);
    }
}
