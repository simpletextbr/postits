import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from 'uuid'

@Entity("PostIt")
class PostIt {

  @PrimaryColumn()
  readonly id:string

  @Column()
  title:string

  @Column()
  description:string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }

}


export { PostIt }
