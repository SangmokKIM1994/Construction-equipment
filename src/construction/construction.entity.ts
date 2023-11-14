import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ConstructionCompany {
  @PrimaryGeneratedColumn()
  constructionId: number;

  @Column()
  company_name: string;

  @Column()
  company_address: string;

  @Column()
  construction_site: string;
}
