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
        return this.productoRepository.createQueryBuilder()
        .select("id", "producto_Id#")
        .addSelect("nombre", "nombre_producto")
        .addSelect("precio_c", "precio_campra")
        .addSelect("precio_v", "precio_venta")
        .addSelect("fecha_c", "fecha_compra")
        .addSelect("id_prov", "proveedor")
        .addSelect("image", "foto_url")
        .addSelect("cant_comprada", "cantidad_comprada")
        .addSelect("id_emp", "empleado_compro")
        .where("id = :ids", { ids: id })
        .execute();
      }
}
