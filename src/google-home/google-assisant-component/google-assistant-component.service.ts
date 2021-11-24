import { Injectable } from '@nestjs/common';
import { CreateGoogleAssisantComponentDto } from './dto/create-google-assisant-component.dto';
import { UpdateGoogleAssisantComponentDto } from './dto/update-google-assisant-component.dto';

@Injectable()
export class GoogleAssisantComponentService {
  create(createGoogleAssisantComponentDto: CreateGoogleAssisantComponentDto) {
    return 'This action adds a new googleAssisantComponent';
  }

  findAll() {
    return `This action returns all googleAssisantComponent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} googleAssisantComponent`;
  }

  update(id: number, updateGoogleAssisantComponentDto: UpdateGoogleAssisantComponentDto) {
    return `This action updates a #${id} googleAssisantComponent`;
  }

  remove(id: number) {
    return `This action removes a #${id} googleAssisantComponent`;
  }
}
