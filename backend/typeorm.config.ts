import { DataSource } from "typeorm";
import { RequestStats } from "./src/entities/request-stats.entity";

export default new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [RequestStats],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
});