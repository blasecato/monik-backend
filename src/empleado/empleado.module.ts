import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './dto/empleado.entity';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empleado])],
    providers: [EmpleadoService],
    controllers: [EmpleadoController, EmpleadoController],
})
export class EmpleadoModule {

}
