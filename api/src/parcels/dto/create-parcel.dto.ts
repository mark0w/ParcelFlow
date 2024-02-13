import {IsDateString, IsNotEmpty, IsString} from "class-validator";

export class CreateParcelDto {
    @IsNotEmpty()
    @IsString()
    sku: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    town: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsNotEmpty()
    @IsDateString()
    deliveryDate: Date;
}
