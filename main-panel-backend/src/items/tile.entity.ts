import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({unique: true})
  url: string;
}