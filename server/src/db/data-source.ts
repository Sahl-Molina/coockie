import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3301,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})