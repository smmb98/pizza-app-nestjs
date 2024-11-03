import { Category } from 'src/categories/entities/category.entity';
import { Base } from 'src/common/entities/base.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class SubCategory extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.subCategory)
  category: Category;

  @OneToMany(() => Product, (product) => product.subCategory)
  product: Product[];
}
