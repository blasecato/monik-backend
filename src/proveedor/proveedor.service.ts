import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Model} from 'mysql'

import { Proveedor } from './dto/proveedor.entity';

@Injectable()
export class ProveedorService {
    constructor(
        @InjectRepository(Proveedor)
        private readonly proveedorRepository: Repository<Proveedor>,
      ) {}

       //consultar todos los Proveedors
       async findAll(): Promise<Proveedor[]> {
        return await this.proveedorRepository.find();
      }

       //consulta a la bd el proveedor cuyo id == id
      //falta inner join
      getById(id) {
        return this.proveedorRepository.createQueryBuilder()
        .select("id", "proveedor_Id#")
        .addSelect("nombre", "nombre_proveedor")
        .addSelect("telefoto", "telefono")
        .addSelect("direccion", "direccion")
        .where("id = :ids", { ids: id })
        .execute();
      }

      delete(id) {
        return this.proveedorRepository.createQueryBuilder()
        .delete()
        .from(Proveedor)
        .where("id = :ids", { ids: id })
        .execute();
      }
}
