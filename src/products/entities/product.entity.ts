import { Category } from 'src/categories/entities/category.entity';
import { Base } from 'src/common/entities/base.entity';
import { SubCategory } from 'src/subcategories/entities/subcategory.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ProductSizesPrices } from './productsizesprice.entity';

export enum Status {
  ACTIVE = 'Active',
  INACTIVE = 'InActive',
}

@Entity()
export class Product extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ length: 2000 })
  description: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;

  @Column()
  imageName: string;

  @Column()
  imageUUID: string;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.product)
  subCategory: SubCategory;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;

  @OneToMany(
    () => ProductSizesPrices,
    (productsSizesPrices) => productsSizesPrices.product,
  )
  productsSizesPrices: ProductSizesPrices[];
}
