import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Model} from 'mysql'

import { Empleado } from './dto/empleado.entity';
@Injectable()
export class EmpleadoService {
    constructor(
        @InjectRepository(Empleado)
        private readonly empleadoRepository: Repository<Empleado>,
      ) {}

      //consultar todos los empleados
      async findAll(): Promise<Empleado[]> {
        return await this.empleadoRepository.find();
      }

      //consulta a la bd de el empleado cuyo id == id
      //falta inner join
      getById(id) {
        return this.empleadoRepository.createQueryBuilder()
        .select("id", "empleado_Id")
        .addSelect("id_usu", "id_usuario")
        .addSelect("id_cargo", "id_cargo")
        .where("id = :ids", { ids: id })
        .execute();
      }
}
