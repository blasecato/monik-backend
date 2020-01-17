import {  Controller,Get,Post,Put,Delete,Body,Param, UseGuards, Request } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import {FacturaService} from "./factura.service";
import {Factura} from "./dto/factura.entity";
import { Roles } from '../common/decorators/roles.decorator';

@Controller('factura')
export class FacturaController {

    constructor(private readonly facturaService:FacturaService){}

    //sirve
    @Get()
    findAll(): Promise<Factura[]>{
         return this.facturaService.findAll();
    }
    //sirve
    @Get(':id')
    findOne(@Param('id') id):Promise<Factura>{
        return this.facturaService.getById(id);
    }

    //Sirve
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.facturaService.delete(id);
    }

}
