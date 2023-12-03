import { Injectable } from "@nestjs/common";
import { Equipment } from "./equipment.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private readonly equipmentRepository: Repository<Equipment>
  ) {}

  async create_equipment({
    equipment_type,
    equipment_size,
    equipment_history,
  }): Promise<Equipment> {
    const result = this.equipmentRepository.create({
      equipment_type,
      equipment_size,
      equipment_history,
    });
    await this.equipmentRepository.save(result);
    return result;
  }

  async find_equipment({ equipment_id }): Promise<Equipment> {
    const equipment = await this.equipmentRepository.findOne({
      where: { equipment_id },
    });
    return equipment;
  }
}
