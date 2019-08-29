import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateDto {
    @Length(5, 100)
    id: number;

    @Length(5, 100)
    nombre: string;

    @Length(5, 100)
    precio_c: number;

    @Length(5, 100)
    precio_v: number;

    @Length(5, 100)
    fecha_c: Date;

    @Length(5, 100)
    image:string;

    @Length(5, 100)
    cant_comprada: number;

    @Length(5, 100)
    id_emp:  number;

    @Length(5, 100)
    id_prov:  number;

}