import { Base } from "src/common/entities/base.entity";
import { Size } from "src/sizes/entities/size.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class ProductSizesPrices extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Size, (size) => size.productsSizesPrices)
  size: Size;

  @ManyToOne(() => Product, (product) => product.productsSizesPrices)
  product: Product;

  @Column({ type: 'real' })
  price: number;
}
