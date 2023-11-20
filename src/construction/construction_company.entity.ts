import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ConstructionSite } from "./construction_site.entity";

@Entity()
export class ConstructionCompany {
  @PrimaryGeneratedColumn()
  construction_company_id: number;

  @Column()
  company_name: string;

  @Column()
  company_address: string;

  @OneToMany(() => ConstructionSite, (site) => site.company)
  site: ConstructionSite[];
}
