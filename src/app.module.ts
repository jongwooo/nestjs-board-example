import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';

@Module({
  imports: [BoardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
