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
import { CreateDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';import {GeneroService } from "./genero.service";
import {Genero } from "./dto/genero.entity";
import { Roles } from '../common/decorators/roles.decorator';


@Controller('genero')
export class GeneroController {
    constructor(private readonly generoService: GeneroService){}
    //sirve
    @Get()
    findAll(): Promise<Genero[]>{
         return this.generoService.findAll();
    }
    //NO sirve
    @Get('get/:id/:id2')
    @UseGuards(AuthGuard('bearer'))
    getById(@Param('id') id, @Param('id2') id2, @Request() req) {
        console.log(req.user);
        console.log(id);
        return this.generoService.getById(id);
    }
    //sirve
    @Get(':id')
    findOne(@Param('id') id): Promise<Genero>{
        return this.generoService.getById(id); 
    }
    //sirve
    @Post('create')
    create(@Body() body: CreateDto) {
        console.log(body);
        return this.generoService.create(body);
    }
    //Sirve
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.generoService.delete(id);
    }
    //
    // @Put(':id')
    //  update(@Param('id') idG: string, @Body() updateGeneroDto:CreateDto): Promise<Genero>{
    //      return this.generoService.update(idG , updateGeneroDto);
    // }

    @Put(':id')
    update(@Param('id') id: string,@Body() updateGeneroDto:CreateDto){
        console.log(updateGeneroDto);
        return this.generoService.update(id,updateGeneroDto); 
    }

}
