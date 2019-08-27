import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {User} from "../src/usuario/dto/usuario.entity";
import { Pedido } from "./pedido.entity";

@Entity('factura',{schema:"monicanela" } )
export class Factura {
    
  @PrimaryGeneratedColumn({
    type:"int", 
    name:"id"
  })
  id: number;

  @Column({ 
    type:"int", 
    name:"total_f"
  })
  total_f: number;

  @Column({ 
    type:"date",
    name:"fecha"
    })
  fecha:Date;

  @ManyToOne(type => User, user => user.id_usu,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_usu'})
    id_usu:  User| null;

  @OneToMany(type => Pedido, pedido => pedido.id_fac,{ onDelete: 'SET NULL' ,onUpdate: 'SET NULL' }) // note: we will create author property in the Photo class below
    id_fac: Pedido[];

}