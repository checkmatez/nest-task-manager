import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 32209,
  username: 'postgres',
  password: 'postgres',
  database: 'test_task_manager',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
  logging: true,
};
