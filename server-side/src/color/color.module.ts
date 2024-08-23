import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { dbClient } from 'src/prisma.service';

@Module({
  controllers: [ColorController],
  providers: [ColorService, dbClient],
})
export class ColorModule {}
