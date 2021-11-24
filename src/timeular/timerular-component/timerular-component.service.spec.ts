import { Test, TestingModule } from '@nestjs/testing';
import { TimerularComponentService } from './timerular-component.service';

describe('TimerularComponentService', () => {
  let service: TimerularComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimerularComponentService],
    }).compile();

    service = module.get<TimerularComponentService>(TimerularComponentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
