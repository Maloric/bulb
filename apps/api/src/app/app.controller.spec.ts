import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { startScanning } from '@abandonware/noble';

describe('AppController', () => {
  let app: TestingModule;
  let unit: AppController;

  let mockService;
  let mockNoble;

  beforeAll(async () => {
    mockService = {
      onDiscover: jest.fn()
    };

    mockNoble = {
      on: jest.fn(),
      startScanning: jest.fn(),
      stopScanning: jest.fn()
    };

    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: AppService,
          useValue: mockService
        },
        {
          provide: 'NOBLE',
          useValue: mockNoble
        }
      ]
    }).compile();
  });

  beforeEach(() => {
    unit = app.get<AppController>(AppController);
  });

  it('should set up the correct event handlers', () => {
    expect(mockNoble.on).toHaveBeenCalledWith('discover', mockService.onDiscover);
  });

  describe('when the startScan endpoint is called', () => {
    beforeEach(() => {
      unit.startScan();
    });

    it('should start scanning for peripherals', () => {
      expect(mockNoble.startScanning).toHaveBeenCalled();
    });
  });

  describe('when the stopScan endpoint is called', () => {
    beforeEach(() => {
      unit.stopScan();
    });

    it('should stop scanning for peripherals', () => {
      expect(mockNoble.stopScanning).toHaveBeenCalled();
    });
  });

  describe('when the peripherals endpoint is called', () => {
    let testData;
    let result: any;
    beforeEach(() => {
      testData = [
        {
          foo: 'bar'
        },
        {
          foo: 'bar2'
        }
      ];
      mockService.peripherals = testData;
      result = unit.getPeripherals();
    });

    it('should return a list of discovered peripherals', () => {
      expect(result).toEqual(testData);
    });
  });
});
