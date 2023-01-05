import { Controller } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
	constructor(private boardService: BoardService) {}
}
