import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  equipment_id: number;

  @Column()
  equipment_type: number;

  @Column()
  equipment_size: string;

  @Column({ type: "json", nullable: true })
  equipment_history: Record<string, any>[];
}
