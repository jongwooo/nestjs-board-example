import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [];

  getAllBoards() {
    return this.boards;
  }
}
