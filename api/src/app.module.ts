import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ParcelsModule} from './parcels/parcels.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [ParcelsModule, TypeOrmModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
