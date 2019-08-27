import { Controller,Get,Post,Put,Delete,Body,Param,UseGuards,Request } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import {UsuarioService } from "./usuario.service";
import { User } from "./dto/usuario.entity";
import { Roles } from '../common/decorators/roles.decorator';


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly userService: UsuarioService){}

    //sirve
    @Get()
    findAll(): Promise<User[]>{
         return this.userService.findAll();
    }

    @Post()
    create(@Body() body: CreateDto) {
        console.log(body);
        return this.userService.create(body);
    }
}
