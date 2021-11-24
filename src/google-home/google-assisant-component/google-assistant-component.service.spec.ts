import { Test, TestingModule } from '@nestjs/testing';
import { GoogleAssisantComponentService } from './google-assistant-component.service';

describe('GoogleAssisantComponentService', () => {
    let service: GoogleAssisantComponentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [GoogleAssisantComponentService],
        }).compile();

        service = module.get<GoogleAssisantComponentService>(GoogleAssisantComponentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
