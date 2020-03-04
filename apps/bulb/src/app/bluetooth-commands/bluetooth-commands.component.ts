import { Component } from '@angular/core';
import { BluetoothService } from './bluetooth-service';

@Component({
  selector: 'bulb-bluetooth-commands',
  template: `
    <p>
      <button *ngIf="(service.scanInProgress$ | async) === false" id="startScan" (click)="startScan()">Start Scan</button>
      <button *ngIf="service.scanInProgress$ | async" id="stopScan" (click)="stopScan()">Stop Scan</button>
      <button id="refresh" (click)="refresh()">Refresh</button>
    </p>
  `,
  styles: []
})
export class BluetoothCommandsComponent {
  constructor(public service: BluetoothService) {}

  startScan(): void {
    this.service.startScan();
  }

  stopScan(): void {
    this.service.stopScan();
  }

  refresh(): void {
    this.service.refresh();
  }
}
