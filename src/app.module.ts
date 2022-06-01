/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TestsModule } from './tests/tests.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SitesModule } from './sites/sites.module';
import { AbonnersModule } from './abonners/abonners.module';
import { RechargesModule } from './recharges/recharges.module';
import { DemandeCartesModule } from './demande-cartes/demande-cartes.module';
import ormConfig from './config/ormconfig';
import { AbonnersService } from './abonners/abonners.service';

@Module({
  imports: [
    UsersModule,
    TestsModule,
    TypeOrmModule.forRoot(ormConfig),
    SitesModule,
    AbonnersModule,
    RechargesModule,
    DemandeCartesModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, AbonnersService],
})
export class AppModule {}
