import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from "./entity/board.entity";
import { UserEntity } from "./entity/user.entity";

@Module({
  imports: [
    BoardModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8899,
      username: 'postgres',
      password: '98starjune',
      database: 'ones',
      entities: [BoardEntity, UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
