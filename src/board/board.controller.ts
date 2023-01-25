import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardService.getBoardById(id);
  }

  @Post('/')
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardService.deleteBoard(id);
  }
}
