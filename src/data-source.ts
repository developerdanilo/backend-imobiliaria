import 'dotenv/config' 
import 'reflect-metadata'
import { DataSource } from "typeorm";

const portDB = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type:'mssql',
    host: process.env.DB_HOST,
    port: 1433,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    extra:{
        trustServerCertificate: true
    },
    entities: [`${__dirname}/**/entities/*.{ts, js}`] 
})