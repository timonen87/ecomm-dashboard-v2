import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { CategoryModule } from './category/category.module';
import { FileModule } from './file/file.module';
import { ProductModule } from './product/product.module';
import { ColorModule } from './color/color.module';
import { OrderModule } from './order/order.module';
import { ReviewModule } from './review/review.module';
import { StatisticsModule } from './statistics/statistics.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    StoreModule,
    CategoryModule,
    FileModule,
    ProductModule,
    ColorModule,
    OrderModule,
    ReviewModule,
    StatisticsModule,
  ],

})
export class AppModule {}
