import { Component, OnInit } from '@angular/core';
import { BluetoothService } from '../bluetooth-commands/bluetooth-service';

@Component({
  selector: 'bulb-bluetooth-peripherals',
  template: `
    <ul>
      <li *ngFor="let p of service.peripherals$ | async">{{ p.id }}</li>
    </ul>
  `,
  styles: []
})
export class BluetoothPeripheralsComponent implements OnInit {
  constructor(public service: BluetoothService) {}

  ngOnInit(): void {}
}
