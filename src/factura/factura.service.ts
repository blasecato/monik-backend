import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Model} from 'mysql'

import { Factura} from './dto/factura.entity';

@Injectable()
export class FacturaService {
    
    constructor(
        @InjectRepository(Factura)
        private readonly facturaRepository: Repository<Factura>,
      ) {}

        //consultar todoa las facturas
        async findAll(): Promise<Factura[]> {
            return await this.facturaRepository.find();
        }

      //consulta a la bd la factura cuyo id == id
      getById(id) {
        return this.facturaRepository.createQueryBuilder("factura")
        .select("factura.id", "factura_Id#")
        .addSelect("total_f", "total_de_la_factura")
        .addSelect("fecha", "fecha_de_la_factura")
        .addSelect("id_usu", "usuiario")
        .innerJoinAndSelect("factura.id_usu","User")
        .where("factura.id = :ids", { ids: id })
        .execute();
      }

      delete(id) {
        return this.facturaRepository.createQueryBuilder()
        .delete()
        .from(Factura)
        .where("id = :ids", { ids: id })
        .execute();
      }
}
