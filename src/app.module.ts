import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TestsModule } from './tests/tests.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormconfig';

@Module({
  imports: [UsersModule, TestsModule,TypeOrmModule.forRoot(ormConfig)],
  controllers: [AppController,UsersController],
  providers: [AppService,UsersService],
})
export class AppModule {}
