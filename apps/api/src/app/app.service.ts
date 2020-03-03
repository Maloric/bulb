import { Injectable } from '@nestjs/common';
import { Message } from '@bulb/api-interfaces';
import { Peripheral } from '@abandonware/noble';

@Injectable()
export class AppService {
  public peripherals: any[] = [];

  constructor() {
    this.peripherals = [];
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  onDiscover(peripheral: Peripheral): void {
    this.peripherals.push(peripheral);
  }
}
