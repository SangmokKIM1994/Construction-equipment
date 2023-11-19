import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConstructionCompany } from "./construction_company.entity";
import { Repository } from "typeorm";

@Injectable()
export class ConstructionService {
  constructor(
    @InjectRepository(ConstructionCompany)
    private readonly constructionCompanyRepository: Repository<ConstructionCompany>
  ) {}
}
