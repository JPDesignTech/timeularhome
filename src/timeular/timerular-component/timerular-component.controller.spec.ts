import { Test, TestingModule } from '@nestjs/testing';
import { TimerularComponentController } from './timerular-component.controller';
import { TimerularComponentService } from './timerular-component.service';

describe('TimerularComponentController', () => {
  let controller: TimerularComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimerularComponentController],
      providers: [TimerularComponentService],
    }).compile();

    controller = module.get<TimerularComponentController>(TimerularComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
