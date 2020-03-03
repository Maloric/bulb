import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let unit: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    unit = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(unit.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });

  describe('onDiscover', () => {
    let peripheral: any;
    beforeEach(() => {
      peripheral = {
        foo: 'bar'
      };
      unit.onDiscover(peripheral);
    });

    it('should store the provided peripheral in memory', () => {
      expect(unit.peripherals).toEqual([peripheral]);
    });
  });
});
