import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Model} from 'mysql'
import { User } from './dto/usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    
    async findAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ["id_genero", "id_cargo"] });
    }

    create(usuario) {
        return this.userRepository.save({ ...usuario, fecha_registro: new Date() });
    }
}
