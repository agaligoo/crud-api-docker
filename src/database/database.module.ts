import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { join } from "path";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
    },
            useFactory: (configService: ConfigService) => ({
                type: "mysql",
                host: configService.getOrThrow("MYSQL_HOST"),
                port: configService.getOrThrow("MYSQL_PORT"),
                username: configService.getOrThrow("MYSQL_USER"),
                password: configService.getOrThrow("MYSQL_PASSWORD"),
                database: configService.getOrThrow("MYSQL_DATABASE"),
                //autoLoadEntities: true,
                keepConnectionAlive: false,
                // For dev set false
                synchronize: true,
                entities: [join(__dirname, "/../**/**.entity{.ts,.js}")],
                logging: false,
            }),
            imports: [ConfigModule],
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}