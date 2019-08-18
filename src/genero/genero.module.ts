import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './dto/genero.entity';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';
import { CreateDto } from './dto/create.dto';

@Module({
    imports: [TypeOrmModule.forFeature([Genero])],
    providers: [GeneroService],
    controllers: [GeneroController, GeneroController],
  })
export class GeneroModule {}







