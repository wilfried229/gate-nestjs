import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('sites')
export class Site {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    site:String; 
    @Column()
    voie:String;
    @Column()
    montant:number;  
    @Column()
    solde_initial:number;
    @Column()
    montant_restant:number;
    @Column()
    abonner_id:number;
    @Column()
    idBadge:String;
    @Column()
    is_sent: boolean;
    @Column()
    is_sentE: boolean;
    @Column()
    is_sentA: boolean;
    @Column()
    is_sentG: boolean;
    @Column()
    passage_verified_at: Date;
    @Column()
    type_passage: boolean;
    @Column()
    percepteur: boolean;
    @Column()
    statut: boolean;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;


}
