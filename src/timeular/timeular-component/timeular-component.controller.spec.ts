import { Test, TestingModule } from '@nestjs/testing';
import { TimeularComponentController } from './timeular-component.controller';
import { TimeularComponentService } from './timeular-component.service';

describe('TimeularComponentController', () => {
    let controller: TimeularComponentController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TimeularComponentController],
            providers: [TimeularComponentService],
        }).compile();

        controller = module.get<TimeularComponentController>(TimeularComponentController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
