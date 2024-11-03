import { Base } from "src/common/entities/base.entity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Setting extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  reviewSetting: boolean;

  @Column({ default: false })
  paymentMethod: boolean;

  @Column({ default: false })
  appleIdSignIn: boolean;

  @Column({ default: false })
  googleIdSignIn: boolean;

  @Column()
  currency: string;

  @Column()
  restaurant_contactNos: string;

  @Column({ length: 2000 })
  restaurant_description: string;

  @Column()
  restaurant_timings: string;

  @Column({ nullable: true })
  restaurant_socialLinks: string;

  @Column()
  restaurant_LOGO_UUID: string;

  @Column()
  restaurant_LOGO_Name: string;

  @Column()
  restaurant_cuisines: string;

  @Column()
  restaurant_location: string;

  @Column()
  restaurant_name: string;

  @Column()
  restaurant_SplashImage_UUID: string;

  @Column()
  restaurant_SplashImage_Name: string;
}
