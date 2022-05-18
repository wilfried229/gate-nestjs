import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:String; 
    @Column()
    email:String;
    @Column()
    password:String;  
    @Column()
    token:String; 
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}
