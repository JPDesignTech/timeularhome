import { Module } from '@nestjs/common';
import { GoogleAssisantComponentService } from './google-assisant-component.service';
import { GoogleAssisantComponentController } from './google-assisant-component.controller';

@Module({
  controllers: [GoogleAssisantComponentController],
  providers: [GoogleAssisantComponentService]
})
export class GoogleAssisantComponentModule {}
