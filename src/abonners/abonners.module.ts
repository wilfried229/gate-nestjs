import { Module } from '@nestjs/common';
import { AbonnersService } from './abonners.service';
import { AbonnersController } from './abonners.controller';
import { Abonner } from './entities/abonner.entity';

@Module({
  controllers: [AbonnersController],
  providers: [AbonnersService],
  imports:[Abonner]
  
})
export class AbonnersModule {}
  