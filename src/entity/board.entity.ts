import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardPostReqDto } from "../board.post.req.dto";

@Entity()
export class BoardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  name: string;

  @Column()
  contents: string;

  @Column()
  data: string;

  inSert(body: BoardPostReqDto){
    this.title = body.title;
    this.name = body.name;
    this.contents = body.contents;
    this.data = body.data;
  }
}
