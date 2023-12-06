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

  it("건설 기계 등록 성공", async () => {
    const data = {
      equipment_type: 2,
      equipment_size: "140w",
      equipment_history: [{}],
    };

    const result = await service.create_equipment(data);

    expect(result).toBeDefined();
    expect(result.equipment_id).toBeDefined();
    expect(result.equipment_type).toBe(data.equipment_type);
    expect(result.equipment_size).toBe(data.equipment_size);
    expect(result.equipment_history).toEqual(data.equipment_history);
    expect(result.equipment_history.length).toBe(data.equipment_history.length);
  });

  it("건설 기계 타입이 입력 안됬을 때", async () => {
    const data = {
      equipment_type: "",
      equipment_size: "140w",
      equipment_history: [{}],
    };

    const result = await service.create_equipment(data);
    expect(result).toBeNull();
  });

  it("건설 기계 용량이 입력 안됬을 때", async () => {
    const data = {
      equipment_type: 2,
      equipment_size: "",
      equipment_history: [{}],
    };

    const result = await service.create_equipment(data);
    expect(result).toBeNull();
  });

  it("건설 기계 조회 성공", async () => {
    const data = { equipment_id: 1 };
    const result = await service.find_equipment(data);
    expect(result).toBeDefined();
  });

  it("건설 기계 id가 숫자가 아닐 때", async () => {
    const data = { equipment_id: "r" };
    const result = await service.find_equipment(data);
    expect(result).toBeNull();
  });

  it("건설 기계 id값을 찾을 수 없을 때", async () => {
    const data = { equipment_id: "999999999" };
    const result = await service.find_equipment(data);
    expect(result).toBeNull();
  });
});
