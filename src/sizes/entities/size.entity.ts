import { Base } from 'src/common/entities/base.entity';
import { OrderItem } from 'src/order-items/entities/order-item.entity';
import { ProductSizesPrices } from 'src/products/entities/productsizesprice.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Size extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  measurement: string;
  @Column({ nullable: true })
  description: string;

  @OneToMany(
    () => ProductSizesPrices,
    (productsSizesPrices) => productsSizesPrices.size,
  )
  productsSizesPrices: ProductSizesPrices[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.size)
  orderItem: OrderItem[];
}
