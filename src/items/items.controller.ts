import { 
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param
    //Req,
    //Res 
} from '@nestjs/common';
import { create } from 'istanbul-reports';
import { updateExpression } from '@babel/types';
import { CreateItemDto } from "./dto/create-item.dto";
import { CreateConfigItemOptions } from '@babel/core';
import {ItemsService } from "./items.service";
import {Item } from "./interfaces/item.interface";
//import {Request,Response} from 'express'

@Controller('items')
export class ItemsController {
    //instanciamos una variable con la clase item servicio
    constructor(private readonly itemService: ItemsService){}
    
    //metodo get en caso de usar express
    // @Get()
    //     findAll(@Req() req: Request, @Res() res: Response): Response {
    //         console.log(req.url);
    //         return res.send('hola mundo');
    // }

    //metodo get consulta sola
    // @Get()
    //     findAll(): string {
    //         return 'hola get dsfgsfsd'
    // }

    //metodo get consulta para traeer un dato de otra clase
    @Get()
    findAll(): Item[] {
         return this.itemService.findAll();
    }

    //metodo get consulta que resibe un parametro
    @Get(':id')
    findOne(@Param('id') id): Item{
        return this.itemService.findOne(id);
    }

    //metodo post crear o cargar un archivo o registro etc
    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }

    //metodo delete Eliminar un registro 
    @Delete(':id')
    delete(@Param('id') id): string{
        return `Eliminando item ${id}`;
    }

    //metodo delete Actualizar un registro
    @Put(':id')
    update(@Body() updateItemDto:CreateItemDto, @Param('id') id: string){
        return `Actualizando item ${id} - Name ${updateItemDto.name}`;
    }
}
    