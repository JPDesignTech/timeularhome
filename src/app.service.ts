import { Injectable } from '@nestjs/common';
import { EnvConfig } from '../src/interfaces/env-config.interface';

import * as devConfig from '../config/dev';
import * as prodConfig from '../config/prod';

@Injectable()
export class AppService {
    private ENV = process.env.NODE_ENV;
    private prod: EnvConfig = prodConfig.config;
    private dev: EnvConfig = devConfig.config;

    constructor() {}

    getEnvironmentConfig(): EnvConfig {
        const environment = process.env.NODE_ENV;

        return this[environment] || this.prod;
    }

    getHello(): string {
        return 'Hello World!';
    }
}
