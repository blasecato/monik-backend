import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {User} from "../../usuario/dto/usuario.entity";

@Entity('cargo',{schema:"monicanela" } )
export class Rol {
  @PrimaryGeneratedColumn({
    type:"int", 
    name:"id"
  })
  id: number;

  @Column("varchar",{ 
    nullable:false,
    length:100,
    name:"nombre",
    default:"1"
    })
  nombre:string;

  @OneToMany(type => User, user => user.id_cargo,{ onDelete: 'CASCADE',onUpdate: 'CASCADE' }) // note: we will create author property in the Photo class below
    id_cargo: User[];

}