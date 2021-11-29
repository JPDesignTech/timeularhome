import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeularComponentModule } from './timeular/timeular-component/timeular-component.module';
import { GoogleAssisantComponentModule } from './google-home/google-assisant-component/google-assistant-component.module';

@Module({
    imports: [TimeularComponentModule, GoogleAssisantComponentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
