import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tile } from '../items/tile.entity.js';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class TilesService {

  constructor(@InjectRepository(Tile) private repo: Repository<Tile>) {}

  create(data: Partial<Tile>) {
    return this.repo.save(this.repo.create(data));
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: string,data: Partial<Tile>) {
    return this.repo.update(id, data);
  }
  
  delete(id: string) {
    return this.repo.delete(id);
  }

}
