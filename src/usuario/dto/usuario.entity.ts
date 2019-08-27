import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Genero} from "../../genero/dto/genero.entity";
import {Rol} from "../../rol/dto/rol.entity";
import { Factura } from "../../../entitys/factura.entity";

@Entity('usuario',{schema:"monicanela" } )
@Index("fk_genero",["id_genero",])
@Index("fk_cargo",["id_cargo",])
export class User {

  @PrimaryGeneratedColumn({
    type:"int", 
    name:"id"
  })
  id: number;

  @Column({ 
    type:"int",
    name:"dni"
    })
    dni:number;

  @Column("varchar",{ 
    nullable:false,
    length:100,
    name:"nombres"
    })
    nombres:string;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"apeliidos"
        })
    apeliidos:string;

    @Column({ 
        type:"date",
        name:"fecha_registro"
        })
      fecha_registro:Date;

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
        type:"int",
        name:"telefoto"
        })
    telefoto:number;

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

    @ManyToOne(type => Genero, genero => genero.id_genero,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_genero'})
    id_genero:  Genero | null;

    @ManyToOne(type => Rol, rol => rol.id_cargo,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_cargo'})
    id_cargo:  Rol| null;

    @OneToMany(type => Factura, factura => factura.id_usu,{ onDelete: 'SET NULL' ,onUpdate: 'SET NULL' }) // note: we will create author property in the Photo class below
    id_usu: User[];

    
}