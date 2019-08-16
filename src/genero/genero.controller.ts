import { 
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    UseGuards,
    Request 
    //Res 
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {GeneroService } from "./genero.service";
import {Genero } from "./dto/genero.entity";


@Controller('genero')
export class GeneroController {
    constructor(private readonly generoService: GeneroService){}
    @Get()
    findAll(): Promise<Genero[]>{
         return this.generoService.findAll();
    }
    
    @Get('get/:id')
    getById(@Param('id') id, @Request() req) {
        console.log(req.user);
        console.log(id);
        return this.generoService.getById(id);
    }
}
