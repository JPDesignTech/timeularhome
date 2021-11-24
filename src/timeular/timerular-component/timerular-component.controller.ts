import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimerularComponentService } from './timerular-component.service';
import { CreateTimerularComponentDto } from './dto/create-timerular-component.dto';
import { UpdateTimerularComponentDto } from './dto/update-timerular-component.dto';

@Controller('timerular-component')
export class TimerularComponentController {
  constructor(private readonly timerularComponentService: TimerularComponentService) {}

  @Post()
  create(@Body() createTimerularComponentDto: CreateTimerularComponentDto) {
    return this.timerularComponentService.create(createTimerularComponentDto);
  }

  @Get()
  findAll() {
    return this.timerularComponentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timerularComponentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimerularComponentDto: UpdateTimerularComponentDto) {
    return this.timerularComponentService.update(+id, updateTimerularComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timerularComponentService.remove(+id);
  }
}
