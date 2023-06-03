import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const { ENV_LOADED } = process.env;
    console.log({ returning: 'hello world', thisValue: this });
    console.log({ ENV_LOADED });
    return 'hello world';
    //return this.appService.getHello();
  }
}
