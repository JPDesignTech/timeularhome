import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeularComponentService } from './timeular-component.service';
import { CreateTimeularComponentDto } from './dto/create-timeular-component.dto';
import { UpdateTimeularComponentDto } from './dto/update-timeular-component.dto';
import { AppService } from 'src/app.service';
import { EnvConfig } from 'src/interfaces/env-config.interface';

@Controller('timeular')
export class TimeularComponentController {
    envConfig: EnvConfig;

    constructor(private appService: AppService, private readonly timeularComponentService: TimeularComponentService) {
        this.envConfig = appService.getEnvironmentConfig();
    }

    @Post()
    create(@Body() createTimeularComponentDto: any) {
        return this.timeularComponentService.trackEvent(createTimeularComponentDto);
    }

    @Post('tracker')
    webhook(@Body() timeularDto: any) {
        return this.timeularComponentService.createWebhook(timeularDto);
    }

    @Get()
    findAll() {
        return this.timeularComponentService.generateToken();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.timeularComponentService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTimeularComponentDto: UpdateTimeularComponentDto) {
        return this.timeularComponentService.update(+id, updateTimeularComponentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.timeularComponentService.remove(+id);
    }
}
