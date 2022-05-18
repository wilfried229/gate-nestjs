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
    role:String;
    @Column()
    api_token:String;
    @Column()
    account_number:number;
    @Column()
    remember_token:String;
    @CreateDateColumn()
    email_verified_at: Date;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}
