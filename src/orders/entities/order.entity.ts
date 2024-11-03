import { Base } from 'src/common/entities/base.entity';
import { OrderItem } from 'src/order-items/entities/order-item.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

export enum Stage {
  ORDER_PLACED = 'Order Placed',
  IN_PROGRESS = 'In Progress',
  PREPARED = 'Prepared',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
}

@Entity()
export class Order extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deliveryAddress: string;

  @Column({ type: 'real' })
  orderPrice: number;

  @Column({ type: 'real' })
  deliveryCost: number;

  @Column({ type: 'real' })
  discount: number;

  @Column({ type: 'real' })
  totalPrice: number;

  @Column()
  paymentMethod: string;

  @Column({
    type: 'enum',
    enum: Stage,
    default: Stage.ORDER_PLACED,
  })
  orderStage: Stage;

  @Column({
    nullable: true,
  })
  instruction: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItem: OrderItem[];
}
