import { Module } from '@nestjs/common';
import { GoogleAssisantComponentService } from './google-assistant-component.service';
import { GoogleAssisantComponentController } from './google-assistant-component.controller';

@Module({
    controllers: [GoogleAssisantComponentController],
    providers: [GoogleAssisantComponentService],
})
export class GoogleAssisantComponentModule {}
