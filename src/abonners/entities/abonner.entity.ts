
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from 'typeorm/repository/BaseEntity';
@Entity('abonners')
export class Abonner {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    idBadge:String;  
    @Column()
    nom:String; 
    @Column()
    prenom:String;
    @Column()
    tel:number;
    @Column()
    adresse:number;
    @Column()
    nip:number;
    @Column()
    iduhf:String;
    @Column()
    codeuhf:String;
    @Column()
    plaque: String;
    @Column()
    essieu: String;
    @Column()
    solde: number;
    @Column()
    type: String;
    @Column()
    is_active: boolean;
    @Column()
    is_sentE: boolean;
    @Column()
    is_sentA: boolean;
    @Column()
    is_sentG: boolean;
    @Column()
    statut: boolean;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}
