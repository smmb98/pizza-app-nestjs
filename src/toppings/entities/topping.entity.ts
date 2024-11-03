import { Category } from 'src/categories/entities/category.entity';
import { Base } from 'src/common/entities/base.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Topping extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'real' })
  price: number;

  @ManyToMany(() => Category, (category) => category.toppings, {
    nullable: true,
  })
  @JoinTable({
    name: 'categories_toppings',
  })
  categories: Category[];
}
