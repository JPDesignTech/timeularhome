import { Injectable } from '@nestjs/common';
import { CreateTimerularComponentDto } from './dto/create-timerular-component.dto';
import { UpdateTimerularComponentDto } from './dto/update-timerular-component.dto';
var request = require('request');

@Injectable()
export class TimerularComponentService {
    create(createTimerularComponentDto: CreateTimerularComponentDto) {
        return 'This action adds a new timerularComponent';
    }

    findAll() {
        return `This action returns all timerularComponent`;
    }

    findOne(id: number) {
        return `This action returns a #${id} timerularComponent`;
    }

    update(id: number, updateTimerularComponentDto: UpdateTimerularComponentDto) {
        return `This action updates a #${id} timerularComponent`;
    }

    remove(id: number) {
        return `This action removes a #${id} timerularComponent`;
    }

    generateToken() {
        var options = {
            method: 'POST',
            url: 'https://api.timeular.com/api/v3/developer/sign-in',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiKey: '{{API_KEY}}',
                apiSecret: '{{API_SECRET}}',
            }),
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
    }
}
