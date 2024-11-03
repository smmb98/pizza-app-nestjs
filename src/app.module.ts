import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { SizesModule } from './sizes/sizes.module';
import { ToppingsModule } from './toppings/toppings.module';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { TypeormModule } from './typeorm.module';

@Module({
  imports: [
    CategoriesModule,
    SubcategoriesModule,
    ProductsModule,
    SizesModule,
    ToppingsModule,
    UsersModule,
    SettingsModule,
    OrdersModule,
    OrderItemsModule,
    TypeormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
