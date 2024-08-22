import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { dbClient } from 'src/prisma.service';

@Module({
  controllers: [StoreController],
  providers: [StoreService, dbClient],
})
export class StoreModule {}
