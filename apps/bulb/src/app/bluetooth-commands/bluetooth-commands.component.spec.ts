import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothCommandsComponent } from './bluetooth-commands.component';
import { BluetoothService } from './bluetooth-service';
import { BehaviorSubject } from 'rxjs';

describe('BluetoothCommandsComponent', () => {
  let component: BluetoothCommandsComponent;
  let fixture: ComponentFixture<BluetoothCommandsComponent>;
  let element: any;

  let mockService: any;

  beforeEach(async(() => {
    mockService = {
      scanInProgress$: new BehaviorSubject<boolean>(false),
      startScan: jest.fn(),
      stopScan: jest.fn(),
      refresh: jest.fn()
    };

    TestBed.configureTestingModule({
      declarations: [BluetoothCommandsComponent],
      providers: [
        {
          provide: BluetoothService,
          useValue: mockService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluetoothCommandsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the refresh button is clicked', () => {
    beforeEach(() => {
      element.querySelector('#refresh').click();
    });
    it('should call the refresh method on the service', () => {
      expect(mockService.refresh).toHaveBeenCalledTimes(1);
    });
  });

  describe('when a scan is in progress', () => {
    beforeEach(() => {
      mockService.scanInProgress$.next(true);
      fixture.detectChanges();
    });

    it('should hide the start button and show the stop button', () => {
      expect(element.querySelector('#startScan')).toBeFalsy();
      expect(element.querySelector('#stopScan')).toBeTruthy();
    });

    describe('and the stop scan button is clicked', () => {
      beforeEach(() => {
        element.querySelector('#stopScan').click();
      });

      it('should call the stopScan method on the service', () => {
        expect(mockService.stopScan).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('when a scan is not in progress', () => {
    beforeEach(() => {
      mockService.scanInProgress$.next(false);
      fixture.detectChanges();
    });

    it('should hide the stop button and show the start button', () => {
      expect(element.querySelector('#stopScan')).toBeFalsy();
      expect(element.querySelector('#startScan')).toBeTruthy();
    });

    describe('and the start scan button is clicked', () => {
      beforeEach(() => {
        element.querySelector('#startScan').click();
      });

      it('should call the startScan method on the service', () => {
        expect(mockService.startScan).toHaveBeenCalledTimes(1);
      });
    });
  });
});
