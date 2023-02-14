import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { BoardStatus } from './board-status.enum';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardService.createBoard(createBoardDto);
  }

  @Get()
  async getAllBoards(): Promise<Board[]> {
    return await this.boardService.getAllBoards();
  }

  @Get('/:id')
  async getBoardById(@Param('id') id: number): Promise<Board> {
    return await this.boardService.getBoardById(id);
  }

  @Patch('/:id/status')
  async updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return await this.boardService.updateBoardStatus(id, status);
  }

  @Delete('/:id')
  async deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.boardService.deleteBoard(id);
  }
}
