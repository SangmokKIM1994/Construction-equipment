import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
