import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { dbClient } from 'src/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, dbClient],
})
export class UserModule {}
