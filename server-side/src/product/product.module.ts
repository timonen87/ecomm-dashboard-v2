import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { dbClient } from 'src/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, dbClient],
})
export class ProductModule {}
