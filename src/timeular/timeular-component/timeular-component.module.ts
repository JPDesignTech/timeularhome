import { Module } from '@nestjs/common';
import { TimeularComponentService } from './timeular-component.service';
import { TimeularComponentController } from './timeular-component.controller';
import { AppService } from 'src/app.service';
import { Axios } from 'axios';

@Module({
    controllers: [TimeularComponentController],
    providers: [TimeularComponentService, AppService, Axios],
})
export class TimeularComponentModule {}
