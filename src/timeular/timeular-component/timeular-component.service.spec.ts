import { Test, TestingModule } from '@nestjs/testing';
import { TimeularComponentService } from './timeular-component.service';

describe('TimeularComponentService', () => {
    let service: TimeularComponentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TimeularComponentService],
        }).compile();

        service = module.get<TimeularComponentService>(TimeularComponentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
