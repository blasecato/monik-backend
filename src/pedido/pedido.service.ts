import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Model} from 'mysql'

import { Pedido } from './dto/pedido.entity';

@Injectable()
export class PedidoService {

    constructor(
        @InjectRepository(Pedido)
        private readonly pedidoRepository: Repository<Pedido>,
      ) {}

       //consultar todos los Pedidos
       async findAll(): Promise<Pedido[]> {
        return await this.pedidoRepository.find();
      }

      //consulta a la bd el pedido cuyo id == id
      //falta inner join
      getById(id) {
        return this.pedidoRepository.createQueryBuilder("pedido")
        .select("pedido.id", "pedido_Id#")
        .addSelect("pedido.cant", "cant_pedida")
        .addSelect("total", "total_pedido")
        .innerJoinAndSelect("pedido.id_emp","Empleado")
        .innerJoinAndSelect("pedido.id_pro","Producto")
        .innerJoinAndSelect("pedido.id_fac","Factura")
        .where("pedido.id = :ids", { ids: id })
        .execute();
      }
}
