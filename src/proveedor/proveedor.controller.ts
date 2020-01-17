import {  Controller,Get,Post,Put,Delete,Body,Param, UseGuards, Request } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import {ProveedorService } from "./proveedor.service";
import {Proveedor} from "./dto/proveedor.entity";
import { Roles } from '../common/decorators/roles.decorator';

@Controller('proveedor')
export class ProveedorController {
    
    constructor(private readonly proveedorService:ProveedorService){}

    //sirve
    @Get()
    findAll(): Promise<Proveedor[]>{
         return this.proveedorService.findAll();
    }
    //sirve
    @Get(':id')
    findOne(@Param('id') id):Promise<Proveedor>{
        return this.proveedorService.getById(id);
    }

    //Sirve
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.proveedorService.delete(id);
    }
}