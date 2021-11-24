import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoogleAssisantComponentService } from './google-assistant-component.service';
import { CreateGoogleAssisantComponentDto } from './dto/create-google-assisant-component.dto';
import { UpdateGoogleAssisantComponentDto } from './dto/update-google-assisant-component.dto';

@Controller('google-assisant-component')
export class GoogleAssisantComponentController {
    constructor(private readonly googleAssisantComponentService: GoogleAssisantComponentService) {}

    @Post()
    create(@Body() createGoogleAssisantComponentDto: CreateGoogleAssisantComponentDto) {
        return this.googleAssisantComponentService.create(createGoogleAssisantComponentDto);
    }

    @Get()
    findAll() {
        return this.googleAssisantComponentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.googleAssisantComponentService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGoogleAssisantComponentDto: UpdateGoogleAssisantComponentDto) {
        return this.googleAssisantComponentService.update(+id, updateGoogleAssisantComponentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.googleAssisantComponentService.remove(+id);
    }
}
