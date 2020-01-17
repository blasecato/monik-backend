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

    //consulta a la bd el pedido cuyo id == id
      //falta inner join
      getById(id) {
        return this.userRepository.createQueryBuilder("usuario")
        .select("usuario.id", "usuario_Id#")
        .innerJoinAndSelect("usuario.id_genero","Genero")
        .innerJoinAndSelect("usuario.id_cargo","Rol")
        .where("usuario.id = :ids", { ids: id })
        .execute();
      }

    create(usuario) {
        return this.userRepository.save({ ...usuario, fecha_registro: new Date() });
    }

    createuser(usuario) {
        return this.userRepository.createQueryBuilder()
        .insert()
        .into(User)
        .values(usuario)
        .execute();
    }

    delete(id) {
        return this.userRepository.createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :ids", { ids: id })
        .execute();
    }

}
