import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Empleado} from "../../empleado/dto/empleado.entity";
import {Proveedor} from "../../proveedor/dto/proveedor.entity";
import {Pedido} from "../../pedido/dto/pedido.entity";

@Entity('usuario',{schema:"monicanela" } )
@Index("fk_empleado",["id_emp",])
@Index("fk_proveedor",["id_prov",])
export class Producto {

  @PrimaryGeneratedColumn({
    type:"int", 
    name:"id"
  })
  id: number;

  @Column("varchar",{ 
    nullable:false,
    length:100,
    name:"nombre"
    })
    nombres:string;

    @Column({
        type:"int", 
        name:"precio_c"
    })
    precio_c: number;

    @Column({
        type:"int", 
        name:"precio_v"
    })
    precio_v: number;

    @Column({ 
        type:"date",
        name:"fecha_c"
        })
    fecha_c:Date;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"image"
        })
    image:string;

    @Column({
        type:"int", 
        name:"cant_comprada"
    })
    cant_comprada: number;

    @ManyToOne(type => Empleado, empleado => empleado.id_emp,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_emp'})
    id_emp:  Empleado | null;

    @ManyToOne(type => Proveedor, proveedor => proveedor.id_prov,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_prov'})
    id_prov:  Proveedor| null;

    @OneToMany(type => Pedido, pedido => pedido.id_pro,{ onDelete: 'SET NULL' ,onUpdate: 'SET NULL' }) // note: we will create author property in the Photo class below
    id_pro: Pedido[];
}