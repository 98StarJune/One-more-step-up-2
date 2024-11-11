import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from './user.entity';

@Entity()
export class BoardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  data: string;

  @ManyToOne((type) => UserEntity)
  @JoinColumn()
  user: UserEntity;
}
