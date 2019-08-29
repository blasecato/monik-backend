import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateDto {
    @Length(5, 100)
    id: number;

    @Length(5, 100)
    total_f: number;

    @Length(5, 100)
    fecha:Date;

    @Length(5, 100)
    id_usu: number;

}