import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import * as dotenv from 'dotenv'
dotenv.config()

const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const database = process.env.DATABASE

export const AppDataSource = new DataSource({
    type: "mysql",
    host: dbHost,
    port: 3306,
    username: dbUser,
    password: dbPassword,
    database: database,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
