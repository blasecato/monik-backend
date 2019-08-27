import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Producto } from "./producto.entity";

@Entity('proveedor',{schema:"monicanela" } )
export class Proveedor {
    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
    })
    id: number;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"nombres"
        })
    nombres:string;

    @Column({ 
        type:"int",
        name:"telefoto"
        })
    telefoto:number;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"direccion"
        })
    direccion:string;

    @OneToMany(type => Producto, producto => producto.id_prov,{ onDelete: 'SET NULL' ,onUpdate: 'SET NULL' }) // note: we will create author property in the Photo class below
    id_prov: Producto[];

}