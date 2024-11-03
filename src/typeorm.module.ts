import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST ?? '127.0.0.1',
      port: parseInt(process.env.DATABASE_PORT) ?? 3306,
      username: process.env.DATABASE_USER ?? 'root',
      password: process.env.DATABASE_PASS ?? 'root',
      database: process.env.DATABASE_NAME ?? 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class TypeormModule {}
