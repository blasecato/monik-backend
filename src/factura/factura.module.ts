import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './dto/factura.entity';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';

@Module({
    imports: [TypeOrmModule.forFeature([Factura])],
    providers: [FacturaService],
    controllers: [FacturaController,FacturaController],
})
export class FacturaModule {

}