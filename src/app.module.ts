import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, BoardModule, CommentModule, PostModule],
  providers: [CommentService],
  controllers: [CommentController],
})
export class AppModule {}
