import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './dto/usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { CreateDto } from './dto/create.dto';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsuarioService],
    controllers: [UsuarioController, UsuarioController],
})
export class UsuarioModule {
    
}
