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

      //consulta a la bd de el empleado cuyo id == i     
      getById(id) {
        return this.empleadoRepository.createQueryBuilder("empleado")
        .select("empleado.id", "empleado_Id")
        .innerJoinAndSelect("empleado.id_usu","User")
        .innerJoinAndSelect("empleado.id_cargo","Rol")
        .where("empleado.id = :ids", { ids: id })
        .execute();
      } 

      delete(id) {
        return this.empleadoRepository.createQueryBuilder()
        .delete()
        .from(Empleado)
        .where("id = :ids", { ids: id })
        .execute();
      }


}
