import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genero')
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nombre: string;

}