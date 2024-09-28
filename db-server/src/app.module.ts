import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GpShopModule } from './gpShop/modules/gpShop.module';
import configuration from './config/configuration';
import { Product } from './gpShop/entities';

const ENV_FILE_PATH = '';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // if variable found in multiple files the first one takes precedence
      envFilePath: ['.env', ENV_FILE_PATH, `.env.${process.env.ENV}`],
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'fwmwZh88!',
      database: 'mystore',
      entities: [
        Product,
        __dirname + '/*.entity{.ts,.js}',
      ],
    }),
    GpShopModule,
  ],
})
export class AppModule {}
