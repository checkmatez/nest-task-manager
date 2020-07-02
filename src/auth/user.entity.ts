import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from './user.model';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;
}
