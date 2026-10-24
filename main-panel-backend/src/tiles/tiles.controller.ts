import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { TilesService } from './tiles.service.js';
import { Tile } from '../items/tile.entity.js';

@Controller('tiles')
export class TilesController {
  constructor(private readonly tilesService: TilesService) {}
    
  @Post()
  create(@Body() body: Tile) {
    return this.tilesService.create(body);
  }

  @Get()
  findAll() {
    return this.tilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.tilesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: Partial<Tile>) {
    return this.tilesService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.tilesService.delete(id);
  }

}
