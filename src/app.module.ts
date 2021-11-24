import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimerularComponentModule } from './timeular/timerular-component/timerular-component.module';
import { GoogleAssisantComponentModule } from './google-home/google-assisant-component/google-assistant-component.module';

@Module({
  imports: [TimerularComponentModule, GoogleAssisantComponentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
