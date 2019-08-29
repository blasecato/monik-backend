import {  Controller,Get,Post,Put,Delete,Body,Param, UseGuards, Request } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import {EmpleadoService } from "./empleado.service";
import {Empleado} from "./dto/empleado.entity";
import { Roles } from '../common/decorators/roles.decorator';

@Controller('empleado')
export class EmpleadoController {
    
    constructor(private readonly empleadoService:EmpleadoService){}

    //sirve
    @Get()
    findAll(): Promise<Empleado[]>{
         return this.empleadoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Empleado>{
        return this.empleadoService.getById(id); 
    }
}
