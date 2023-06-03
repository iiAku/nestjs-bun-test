import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log({ returning: 'hello world', thisValue: this });
    return 'hello world';
    //return this.appService.getHello();
  }
}
