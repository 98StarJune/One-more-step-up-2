import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BoardPostReqDto } from '../board.post.req.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardEntity } from '../entity/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private readonly boardEntity: Repository<BoardEntity>,
  ) {}

  async post(body: BoardPostReqDto) {
    const data = new BoardEntity();
    data.inSert(body);

    return this.boardEntity.save(data);
  }

  async getAll() {
    const data = await this.boardEntity
      .createQueryBuilder('b')
      .select()
      .getMany();

    if(!data[0]) throw new NotFoundException(`그런 사람 없음`)
    return data;
  }
}
