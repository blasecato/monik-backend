import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Model} from 'mysql'
import { Genero } from './dto/genero.entity';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private readonly generoRepository: Repository<Genero>,
  ) {}

  async findAll(): Promise<Genero[]> {
    return await this.generoRepository.find();
  }

  // async getById(id: string): Promise<Genero> {
  //   return await this.generoRepository.find({Genero => Genero.id === id });  
  // }

  getById(id) {
    return this.generoRepository.createQueryBuilder()
    .select("id", "generoId")
    .addSelect("nombre", "generoNames")
    .where("id = :ids", { ids: id })
    .execute();
  }
  
  create(genero) {
    return this.generoRepository.save({ ...genero, fecha_registro: new Date() });
  }

  delete(id) {
    return this.generoRepository.createQueryBuilder()
    .delete()
    .from(Genero)
    .where("id = :ids", { ids: id })
    .execute();
  }
  
  // async update(id, Genero): Promise<Genero>{
  //    return await this.generoRepository.update(id , Genero);
  // }
}