import { Test, TestingModule } from '@nestjs/testing';
import { GoogleAssisantComponentController } from './google-assisant-component.controller';
import { GoogleAssisantComponentService } from './google-assisant-component.service';

describe('GoogleAssisantComponentController', () => {
  let controller: GoogleAssisantComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleAssisantComponentController],
      providers: [GoogleAssisantComponentService],
    }).compile();

    controller = module.get<GoogleAssisantComponentController>(GoogleAssisantComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
