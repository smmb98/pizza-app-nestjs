import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

export class Base extends BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, { eager: false })
  @JoinColumn()
  createdBy: User;

  @ManyToOne(() => User, { eager: false })
  @JoinColumn()
  updatedBy: User;
}
