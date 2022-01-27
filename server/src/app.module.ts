import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TeamModule } from './team/team.module';
import { ProjectsResolver } from './projects/projects.resolver';
import { ProjectsModule } from './projects/projects.module';
import { UserDataModule } from './user-data/user-data.module';
import * as dotenv from 'dotenv';

dotenv.config();
const nodeEnvironment = `${(process.env.NODE_ENV || 'development').toLowerCase()}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/env/${nodeEnvironment}.env`,
      isGlobal: true,
    }),
    
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        // ssl: true,
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        seeds: [__dirname + '/**/*.seed{.ts,.js}'],
        factories: [__dirname + '/**/*.factory{.ts,.js}'],
        synchronize: true,
        logging: nodeEnvironment === 'development' ? true : false,
        dropSchema: nodeEnvironment === 'test' ? true : false,
      }),
    }),
    AuthModule,
    UsersModule,
    TeamModule,
    ProjectsModule,
    UserDataModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProjectsResolver],
})

export class AppModule { }
