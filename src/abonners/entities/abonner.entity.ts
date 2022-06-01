/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('abonners')
export class Abonner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idBadge: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  tel: number;

  @Column()
  adresse: number;

  @Column()
  nip: number;

  @Column()
  iduhf: string;
  @Column()
  codeuhf: string;
  @Column()
  plaque: string;
  @Column()
  essieu: string;
  @Column()
  solde: number;
  @Column()
  type: string;
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
