import { Module } from "@nestjs/common";
import { ConstructionController } from "./construction.controller";
import { ConstructionService } from "./construction.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConstructionCompany } from "./construction_company.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ConstructionCompany])],
  controllers: [ConstructionController],
  providers: [ConstructionService],
})
export class ConstructionModule {}
