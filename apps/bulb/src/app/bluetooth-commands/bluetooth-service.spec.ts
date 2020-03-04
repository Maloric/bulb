import { TestBed } from '@angular/core/testing';
import { BluetoothService } from './bluetooth-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Bluetooth Service', () => {
  let service: BluetoothService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BluetoothService]
    }).compileComponents();

    service = TestBed.inject(BluetoothService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('when startScan is called', () => {
    beforeEach(() => {
      service.startScan();
    });

    it('should call startScan on the API', () => {
      const req = httpMock.expectOne('/api/startScan');
      expect(req.request.method).toBe('GET');

      let scanInProgress: boolean;
      service.scanInProgress$.subscribe(x => (scanInProgress = x));

      expect(scanInProgress).toBe(false);
      req.flush('Some value');
      expect(scanInProgress).toBe(true);
    });
  });

  describe('when stopScan is called', () => {
    beforeEach(() => {
      service.scanInProgress$.next(true);
      service.stopScan();
    });

    it('should call stopScan on the API', () => {
      const req = httpMock.expectOne('/api/stopScan');
      expect(req.request.method).toBe('GET');

      let scanInProgress: boolean;
      service.scanInProgress$.subscribe(x => (scanInProgress = x));

      expect(scanInProgress).toBe(true);
      req.flush('Some value');
      expect(scanInProgress).toBe(false);
    });
  });

  describe('when refresh is called', () => {
    beforeEach(() => {
      service.refresh();
    });

    it('should get the peripherals from the API', () => {
      const req = httpMock.expectOne('/api/peripherals');
      expect(req.request.method).toBe('GET');

      let peripherals: any[];
      service.peripherals$.subscribe(x => (peripherals = x));

      expect(peripherals).toEqual([]);
      req.flush([{ some: 'value' }]);
      expect(peripherals).toEqual([{ some: 'value' }]);
    });
  });
});
