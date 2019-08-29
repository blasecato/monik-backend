import {  Controller,Get,Post,Put,Delete,Body,Param, UseGuards, Request } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import {PedidoService } from "./pedido.service";
import {Pedido} from "./dto/pedido.entity";
import { Roles } from '../common/decorators/roles.decorator';

@Controller('pedido')
export class PedidoController {
    
    constructor(private readonly pedidoService:PedidoService){}

    //sirve
    @Get()
    findAll(): Promise<Pedido[]>{
         return this.pedidoService.findAll();
    }
    //sirve
    @Get(':id')
    findOne(@Param('id') id):Promise<Pedido>{
        return this.pedidoService.getById(id);
    }
}
