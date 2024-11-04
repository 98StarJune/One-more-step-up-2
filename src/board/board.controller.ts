import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { BoardService } from "./board.service";
import { BoardPostReqDto } from "../board.post.req.dto";

@Controller('board')
export class BoardController {
  private readonly boardService: BoardService
  constructor(_boardService: BoardService) {
    this.boardService = _boardService;
  }

  @Post()
  async post(@Body() body: BoardPostReqDto){
    return this.boardService.post(body);
  }

  @Get('all')
  async getAll(){
    return this.boardService.getAll();
  }

}
