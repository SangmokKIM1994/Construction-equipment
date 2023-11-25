import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  equipment_id: number;

  @Column()
  equipment_type: number;

  @Column()
  equipment_size: string;

  @Column()
  equipment_history: string;
}
