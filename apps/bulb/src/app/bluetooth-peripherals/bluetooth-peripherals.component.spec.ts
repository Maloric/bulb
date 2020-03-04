import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothPeripheralsComponent } from './bluetooth-peripherals.component';
import { BehaviorSubject } from 'rxjs';
import { BluetoothService } from '../bluetooth-commands/bluetooth-service';

describe('BluetoothPeripheralsComponent', () => {
  let component: BluetoothPeripheralsComponent;
  let fixture: ComponentFixture<BluetoothPeripheralsComponent>;
  let element: any;

  let mockService: any;
  let testData: any[];
  beforeEach(async(() => {
    testData = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

    mockService = {
      peripherals$: new BehaviorSubject<any[]>(testData)
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: BluetoothService,
          useValue: mockService
        }
      ],
      declarations: [BluetoothPeripheralsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluetoothPeripheralsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should show all peripherals found on the service', () => {
    const listItems = element.querySelectorAll('li');
    expect(listItems.length).toBe(3);
    expect(listItems[0].textContent).toEqual('a');
    expect(listItems[1].textContent).toEqual('b');
    expect(listItems[2].textContent).toEqual('c');
  });
});
