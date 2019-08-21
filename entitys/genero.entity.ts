import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";

@Entity('genero',{schema:"monicanela" } )
export class Genero {
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
nombre:string;

}