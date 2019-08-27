import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {User} from "../../usuario/dto/usuario.entity";
import {Rol} from "../../rol/dto/rol.entity";
import {Producto} from "../../producto/dto/producto.entity";

@Entity('empleado',{schema:"monicanela" } )
@Index("fk_usu",["id_usu",])
@Index("fk_cargo",["id_cargo",])
export class Empleado {

  @PrimaryGeneratedColumn({
    type:"int", 
    name:"id"
  })
  id: number;

 

    @ManyToOne(type => User, user => user.id_usu,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_usu'})
    id_usu:  User | null;

    @ManyToOne(type => Rol, rol => rol.id_cargo,{ onDelete: 'SET NULL',onUpdate: 'SET NULL' })
    @JoinColumn({ name:'id_cargo'})
    id_cargo:  Rol| null;

    @OneToMany(type => Producto, producto => producto.id_emp,{ onDelete: 'SET NULL' ,onUpdate: 'SET NULL' }) // note: we will create author property in the Photo class below
    id_emp: Producto[];
}