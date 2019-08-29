import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './dto/pedido.entity';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';

@Module({
    imports: [TypeOrmModule.forFeature([Pedido])],
    providers: [PedidoService],
    controllers: [PedidoController, PedidoController],
})
export class PedidoModule {

}
