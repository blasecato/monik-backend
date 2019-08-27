import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateDto {

    @Length(5, 100)
    dni: number;

    @Length(5, 100)
    nombres: string;

    @Length(5, 100)
    apeliidos: string;

    @Length(5, 100)
    email: string;

    @Length(5, 100)
    contrasenia: string;

    @Length(5, 100)
    telefoto: number;

    @Length(5, 100)
    nombre_em: string;

    @Length(5, 100)
    direccion: string;

    @Length(5, 100)
    id_genero: number;

}