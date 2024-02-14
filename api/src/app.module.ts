import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ParcelsModule} from './parcels/parcels.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [ParcelsModule, TypeOrmModule.forRoot({
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "username",
        "password": "password",
        "database": "database",
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": true
    })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
