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
import { EmpleadoController } from './empleado/empleado.controller';
import { EmpleadoService } from './empleado/empleado.service';
import { EmpleadoModule } from './empleado/empleado.module';
import { PedidoModule } from './pedido/pedido.module';
import { FacturaController } from './factura/factura.controller';
import { FacturaService } from './factura/factura.service';
import { FacturaModule } from './factura/factura.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { ProductoService } from './producto/producto.service';
import { ProductoController } from './producto/producto.controller';
import { ProductoModule } from './producto/producto.module';

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
  }), GeneroModule,UsuarioModule, EmpleadoModule, PedidoModule, FacturaModule, ProveedorModule, ProductoModule],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
