import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Empleado} from "../../empleado/dto/empleado.entity";
import {Producto} from "../../producto/dto/producto.entity";
import {Factura} from "../../factura/dto/factura.entity";

@Entity('pedido',{schema:"monicanela" } )
@Index("fk_empleado",["id_emp",])
@Index("fk_producto",["id_pro",])
@Index("fk_factura",["id_fac",])
export class Pedido {
 
  @PrimaryGeneratedColumn({
    type:"int", 
    name:"id"
  })
  id: number;

  @Column({ 
    type:"int", 
    name:"cant"
  })
  cant: number;

  @Column({ 
    type:"int", 
    name:"total"
  })
  total: number;

  //id_emp
  @ManyToOne(type => Empleado, empleado => empleado.id_emp,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_emp'})
    id_emp:  Empleado | null;
  //id_pro
  @ManyToOne(type => Producto, producto => producto.id_pro,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_pro'})
    id_pro:  Producto | null;
  //id_fac
  @ManyToOne(type => Factura, factura => factura.id_fac,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
  @JoinColumn({ name:'id_fac'})
  id_fac:  Factura | null;

}