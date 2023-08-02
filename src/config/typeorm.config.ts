import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const typeORMConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.PGHOST,
  port: 5432,
  username: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
