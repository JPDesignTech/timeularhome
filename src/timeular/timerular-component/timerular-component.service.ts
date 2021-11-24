import { Injectable } from '@nestjs/common';
import { CreateTimerularComponentDto } from './dto/create-timerular-component.dto';
import { UpdateTimerularComponentDto } from './dto/update-timerular-component.dto';

@Injectable()
export class TimerularComponentService {
  create(createTimerularComponentDto: CreateTimerularComponentDto) {
    return 'This action adds a new timerularComponent';
  }

  findAll() {
    return `This action returns all timerularComponent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timerularComponent`;
  }

  update(id: number, updateTimerularComponentDto: UpdateTimerularComponentDto) {
    return `This action updates a #${id} timerularComponent`;
  }

  remove(id: number) {
    return `This action removes a #${id} timerularComponent`;
  }
}
