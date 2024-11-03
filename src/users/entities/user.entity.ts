import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  mobileNo: string;

  @Column()
  address: string;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ type: 'timestamp' })
  otpVerifiedTime: Date;

  @Column({ nullable: true })
  stripeId: string;

  @Column()
  role: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
