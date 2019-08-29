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
        return this.pedidoRepository.createQueryBuilder()
        .select("id", "pedido_Id#")
        .addSelect("cant", "cant_pedida")
        .addSelect("total", "total_pedido")
        .addSelect("id_emp", "empleado")
        .addSelect("id_pro", "producto")
        .addSelect("id_fac", "factura")
        .where("id = :ids", { ids: id })
        .execute();
      }
}
