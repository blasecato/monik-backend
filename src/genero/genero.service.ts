import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
  getById(id) {
    return this.generoRepository.createQueryBuilder()
    .select("id", "id")
    .addSelect("nombre", "nombre")
    .where("id = :ids", { ids: 1 })
    .execute();
  }
}