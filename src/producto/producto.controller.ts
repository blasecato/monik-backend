import {  Controller,Get,Post,Put,Delete,Body,Param, UseGuards, Request } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import {ProductoService } from "./producto.service";
import {Producto} from "./dto/producto.entity";
import { Roles } from '../common/decorators/roles.decorator';

@Controller('producto')
export class ProductoController {
    
    constructor(private readonly productoService:ProductoService){}

    //sirve
    @Get()
    findAll(): Promise<Producto[]>{
         return this.productoService.findAll();
    }
    //sirve
    @Get(':id')
    findOne(@Param('id') id):Promise<Producto>{
        return this.productoService.getById(id);
    }
}