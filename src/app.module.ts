import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
