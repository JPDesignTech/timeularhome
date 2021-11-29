import { Injectable } from '@nestjs/common';
import axios, { Axios, AxiosRequestConfig } from 'axios';
import { AppService } from 'src/app.service';
import { EnvConfig } from 'src/interfaces/env-config.interface';
import { CreateTimeularComponentDto } from './dto/create-timeular-component.dto';
import { UpdateTimeularComponentDto } from './dto/update-timeular-component.dto';
var request = require('request');

@Injectable()
export class TimeularComponentService {
    envConfig: EnvConfig;
    timeToken: any;

    constructor(private appService: AppService, private http: Axios) {
        this.envConfig = appService.getEnvironmentConfig();
    }

    create(createTimeularComponentDto: CreateTimeularComponentDto) {
        return 'This action adds a new timeularComponent';
    }

    findAll() {
        return `This action returns all timeularComponent`;
    }

    findOne(id: number) {
        return `This action returns a #${id} timeularComponent`;
    }

    update(id: number, updateTimeularComponentDto: UpdateTimeularComponentDto) {
        return `This action updates a #${id} timeularComponent`;
    }

    remove(id: number) {
        return `This action removes a #${id} timeularComponent`;
    }

    async generateToken(): Promise<any> {
        var options: AxiosRequestConfig<any> = {
            method: 'post',
            url: 'https://api.timeular.com/api/v3/developer/sign-in',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                apiKey: `${this.envConfig.timeularAPI.api_key}`,
                apiSecret: `${this.envConfig.timeularAPI.secret}`,
            }),
        };

        return await axios(options).then((res) => {
            this.timeToken = res.data;
            return res.data;
        });
    }

    getActivity() {}

    trackEvent(body: any) {
        console.log(`🐛 🐞  body ➡ ${JSON.stringify(body, null, 2)} 🐞 🐛 `);
    }

    async createWebhook(webhookInfo: any) {
        console.log(`🐛 🐞  webhookInfo ➡ ${JSON.stringify(webhookInfo, null, 2)} 🐞 🐛 `);
        // const data = JSON.stringify({
        //     event: `trackingStxarted`,
        //     target_url: `${webhookInfo.url}/api/v1/timeular`,
        // });
        var data = JSON.stringify({
            event: 'trackingStarted',
            target_url: 'https://example.org/some-endpoint',
        });

        await this.generateToken()
            .then(async (token) => {
                console.log(`🐛 🐞  token ➡ ${JSON.stringify(token)} 🐞 🐛 `);
                var options: any = {
                    method: 'post',
                    url: 'https://api.timeular.com/api/v3/webhooks/subscription',
                    headers: {
                        Authorization: `Bearer ${token.token}`,
                    },
                    data: data,
                    // data: `{\n    "event": "trackingStarted",\n    "target_url": "${webhookInfo.url}/api/v1/timeular"\n}`,
                };
                return await axios(options);
            })
            .then((result) => {
                console.log(`🐛 🐞  results ➡ ${JSON.stringify(result, null, 2)} 🐞 🐛 `);
            })
            .catch((error) => {
                console.log(`❗❗ Error  ➡ ${JSON.stringify(error, null, 2)}❗ ❗`);
            });
    }

    webhook(timeular: any) {
        console.log(`🐛 🐞  timeular ➡ ${JSON.stringify(timeular, null, 2)} 🐞 🐛 `);
    }
}
