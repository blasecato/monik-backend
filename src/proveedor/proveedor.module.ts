import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proveedor } from './dto/proveedor.entity';
import { ProveedorController } from './proveedor.controller';
import { ProveedorService } from './proveedor.service';

@Module({
    imports: [TypeOrmModule.forFeature([Proveedor])],
    providers: [ProveedorService],
    controllers: [ProveedorController, ProveedorController],
})
export class ProveedorModule {}