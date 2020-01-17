import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Model} from 'mysql'

import { Producto } from './dto/producto.entity';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
      ) {}

       //consultar todos los Productos
       async findAll(): Promise<Producto[]> {
        return await this.productoRepository.find();
      }

      //consulta a la bd el producto cuyo id == id
      //falta inner join
      getById(id) {
        return this.productoRepository.createQueryBuilder("producto")
        .select("producto.id", "producto_Id#")
        .addSelect("producto.nombre", "nombre_producto")
        .addSelect("precio_c", "precio_campra")
        .addSelect("precio_v", "precio_venta")
        .addSelect("fecha_c", "fecha_compra")
        .addSelect("id_prov", "proveedor")
        .addSelect("image", "foto_url")
        .addSelect("cant_comprada", "cantidad_comprada")
        .innerJoinAndSelect("producto.id_emp","Empleado")
        .innerJoinAndSelect("producto.id_prov","Proveedor")
        .where("producto.id = :ids", { ids: id })
        .execute();
      }

      delete(id) {
        return this.productoRepository.createQueryBuilder()
        .delete()
        .from(Producto)
        .where("id = :ids", { ids: id })
        .execute();
      }
}
