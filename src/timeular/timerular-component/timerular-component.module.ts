import { Module } from '@nestjs/common';
import { TimerularComponentService } from './timerular-component.service';
import { TimerularComponentController } from './timerular-component.controller';

@Module({
  controllers: [TimerularComponentController],
  providers: [TimerularComponentService]
})
export class TimerularComponentModule {}
