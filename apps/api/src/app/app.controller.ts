import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';
import { Noble } from './types/noble';
import { Peripheral } from '@abandonware/noble';

import { getPeripheralDTO } from './types/peripheral';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('NOBLE') private noble: Noble) {
    noble.on('stateChange', (state: string) => {
      console.log(state);
    });
    noble.on('discover', (p: Peripheral) => {
      this.appService.onDiscover(p);
    });
  }

  @Get('startScan')
  startScan(): void {
    console.log('startScan');
    this.noble.startScanning();
  }

  @Get('stopScan')
  stopScan(): void {
    console.log('stopScan');
    this.noble.stopScanning();
  }

  @Get('peripherals')
  getPeripherals() {
    return this.appService.peripherals.map(getPeripheralDTO);
  }
}
