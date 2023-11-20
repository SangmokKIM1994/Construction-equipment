import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ConstructionCompany } from "./construction_company.entity";

@Entity()
export class ConstructionSite {
  @PrimaryGeneratedColumn()
  construction_site_id: number;

  @Column()
  site_address: string;

  @Column()
  site_details: string;

  @Column()
  worker: number;

  @Column()
  equipment: number;

  @ManyToOne(() => ConstructionCompany, (company) => company.site)
  company: ConstructionCompany;
}
