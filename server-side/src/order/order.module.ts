import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { dbClient } from 'src/prisma.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, dbClient],
})
export class OrderModule {}
