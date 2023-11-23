import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeORMConfig } from "./config/typeorm.config";
import { ConstructionModule } from "./construction/construction.module";
import { EpuipmentModule } from './epuipment/epuipment.module';
import { EquipmentController } from './equipment/equipment.controller';
import { EquipmentService } from './equipment/equipment.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    ConstructionModule,
    EpuipmentModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: true,
    // }),
  ],
  controllers: [AppController, EquipmentController],
  providers: [AppService, EquipmentService],
})
export class AppModule {}
