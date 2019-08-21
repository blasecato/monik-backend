import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Genero} from "./genero.entity";
import {Rol} from "./rol.entity";

@Entity('usuario',{schema:"monicanela" } )
@Index("id_rol",["id_rol",])
@Index("id_genero",["id_genero",])
export class Usuario {
  @PrimaryGeneratedColumn({
    type:"int", 
    name:"id"
  })
  id: number;

  @Column({ 
    nullable:false,
    type:"int",
    name:"dni"
    })
    dni:number;

  @Column("varchar",{ 
    nullable:false,
    length:100,
    name:"nombres"
    })
    nombre:string;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"apeliidos"
        })
    apeliidos:string;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"email"
        })
    email:string;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"contrasenia"
        })
    contrasenia:string;

    @Column({ 
        nullable:false,
        type:"int",
        name:"telefono"
        })
    telefono:number;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"nombre_em"
        })
    nombre_em:string;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"direccion"
        })
    direccion:string;

    @ManyToOne(type=>Rol, Rol=>Rol.id,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'fk_user'})
    id_rol:Rol | null;


   
    @ManyToOne(type=>Genero, Genero=>Genero.id,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'fk_rol'})
    id_genero:Genero | null;
}