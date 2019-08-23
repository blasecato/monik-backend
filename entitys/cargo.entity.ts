import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity('cargo',{schema:"monicanela" } )
export class Cargo {
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