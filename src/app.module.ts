import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Totzip@rtS501',
      database: 'nest_test',
      models: [],
      autoLoadModels  : true
    }),
    UserModule,
  ]
})
export class AppModule {}
