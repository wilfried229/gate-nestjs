import { ApiProperty } from "@nestjs/swagger";

export class CreateSiteDto {
 
    @ApiProperty({ required: true })
    site:String; 
    @ApiProperty({ required: true })
    voie:String;
    @ApiProperty({ required: true })
    montant:number;  
    @ApiProperty({ required: true })
    solde_initial:number;
    @ApiProperty({ required: true })
    montant_restant:number;
    @ApiProperty({ required: true })
    abonner_id:number;
    @ApiProperty({ required: true })
    idBadge:String;
    @ApiProperty({ required: true })
    is_sent: boolean;
    @ApiProperty({ required: true })
    is_sentE: boolean;
    @ApiProperty({ required: true })
    is_sentA: boolean;
    @ApiProperty({ required: true })
    is_sentG: boolean;
    @ApiProperty({ required: true })
    passage_verified_at: Date;
    @ApiProperty({ required: true })
    type_passage: boolean;
    @ApiProperty({ required: true })
    percepteur: boolean;
    @ApiProperty({ required: true })
    statut: boolean;
     
}
