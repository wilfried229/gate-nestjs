/* eslint-disable prettier/prettier */
import 'dotenv/config'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { OracleConnectionCredentialsOptions } from 'typeorm/driver/oracle/OracleConnectionCredentialsOptions';
import { OracleConnectionOptions } from 'typeorm/driver/oracle/OracleConnectionOptions';



const orclConfig:OracleConnectionOptions = {
    type: 'oracle',
    // url: process.env.DB_URL,
    // ssl: { rejectUnauthorized: false },
    // host: process.env.DATABASE_HOST,
    // port: (process.env.DATABASE_PORT as any) as number,
    // username: process.env.DATABASE_USER,
    // password: process.env.DATABASE_PASSWORD,
    // database: process.env.DATABASE_NAME,

    host: "localhost",
    port: 1521,
    username: "validation",
    password: "Validation",
    // database: "validation",
    sid: "oracle",
    

    entities: ["dist/**/*.entity{.ts,.js}"],

    synchronize: true,
    // migrations: ["dist/migrations/*.js"],
    cli: {
        // migrationsDir: "src/migrations",
        entitiesDir: "src/**/*"
    }
};

export default orclConfig;