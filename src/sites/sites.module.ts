import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { Site } from './entities/site.entity';

@Module({
  controllers: [SitesController],
  providers: [SitesService],
  imports:[Site]
})
export class SitesModule {}
