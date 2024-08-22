import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { dbClient } from 'src/prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, dbClient],
})
export class CategoryModule {}
