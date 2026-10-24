import { Module } from '@nestjs/common';
import { TilesService } from './tiles.service.js';
import { TilesController } from './tiles.controller.js';
import { Tile } from '../items/tile.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tile])],
  controllers: [TilesController],
  providers: [TilesService],
})
export class TilesModule {}
