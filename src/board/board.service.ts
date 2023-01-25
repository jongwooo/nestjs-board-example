import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
