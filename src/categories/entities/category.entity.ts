import { Base } from 'src/common/entities/base.entity';
import { Product } from 'src/products/entities/product.entity';
import { SubCategory } from 'src/subcategories/entities/subcategory.entity';
import { Topping } from 'src/toppings/entities/topping.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Category extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
  subCategory: SubCategory[];

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];

  @ManyToMany(() => Topping, (topping) => topping.categories)
  toppings: Topping[];
}
