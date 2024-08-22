import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    StoreModule,
    CategoryModule,
  ],

})
export class AppModule {}
