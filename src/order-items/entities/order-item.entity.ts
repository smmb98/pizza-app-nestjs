import { Base } from 'src/common/entities/base.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { Size } from 'src/sizes/entities/size.entity';
import { Topping } from 'src/toppings/entities/topping.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class OrderItem extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.orderItem)
  order: Order;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  itemQty: number;

  @Column({ type: 'real' })
  productPrice: number;

  @Column({ type: 'real' })
  subTotalPrice: number;

  @Column()
  sizeMeasurement: string;

  @Column()
  sizeDescription: string;

  @Column()
  productName: string;

  @ManyToMany(() => Topping, { nullable: true })
  @JoinTable({ name: 'order_items_toppings' })
  topping: Topping[];

  @ManyToOne(() => Size, (size) => size.orderItem)
  size: Size;
}
