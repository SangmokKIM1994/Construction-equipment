import { Test, TestingModule } from "@nestjs/testing";
import { EquipmentService } from "./equipment.service";

describe("EquipmentService", () => {
  let service: EquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipmentService],
    }).compile();

    service = module.get<EquipmentService>(EquipmentService);
  });

  it("건설 기계 등록 성공", () => {
    const data = {
      equipment_type: 2,
      equipment_size: "140w",
      equipment_history: [{}],
    };

    const result = service.create_equipment(data);
    expect(service).toBeDefined();
  });
});
