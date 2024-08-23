import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { dbClient } from 'src/prisma.service';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService, dbClient],
})
export class StatisticsModule {}
