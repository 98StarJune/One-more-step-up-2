import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardPostReqDto } from '../board.post.req.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardEntity } from '../entity/board.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private readonly boardEntity: Repository<BoardEntity>,
  ) {}

  async post(body: BoardPostReqDto) {
    const content = new BoardEntity();
    content.data = body.data;
    content.contents = body.contents;
    content.title = body.title;
    const user = new UserEntity();
    user.id = body.userid;
    content.user = user;

    return this.boardEntity.save(content);
  }

  async getAll() {
    const result = await this.boardEntity
      .createQueryBuilder('b')
      .select()
      .innerJoinAndSelect('b.user', 'u')
      .getMany();
    for (const boardEntity of result) {
      boardEntity.
    }
    return
    return await this.boardEntity.find({
      select: {
        user: {
          id: true,
          phone: false,
        },
      },
      relations: {
        user: true,
      },
    });
    /*const data = await this.boardEntity
      .createQueryBuilder('b')
      .select()
      .innerJoinAndSelect('b.user', 'u')
      .getMany();

    if (!data[0]) throw new NotFoundException(`그런 사람 없음`);
    return data;*/
  }
}
