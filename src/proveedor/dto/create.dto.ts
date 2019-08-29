import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateDto {
    @Length(5, 100)
    id: number;

    @Length(5, 100)
    nombre: string;

    @Length(5, 100)
    telefono: number;

    @Length(5, 100)
    direccion: string;

}