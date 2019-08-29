import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateDto {
    @Length(5, 100)
    id: number;

    @Length(5, 100)
    cant: number;

    @Length(5, 100)
    total: number;

    @Length(5, 100)
    id_emp: number;

    @Length(5, 100)
    id_pro: number;

    @Length(5, 100)
    id_fac: number;
}