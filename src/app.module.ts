import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Genero } from './genero/dto/genero.entity';
import { GeneroModule } from './genero/genero.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'monicanela',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), GeneroModule,UsuarioModule],
  controllers: [AppController, ItemsController], 
  providers: [AppService, ItemsService],
})
export class AppModule {}
