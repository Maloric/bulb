import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {
  scanInProgress$ = new BehaviorSubject<boolean>(false);
  peripherals$ = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) {}

  startScan() {
    this.httpClient.get('/api/startScan').subscribe(() => {
      this.scanInProgress$.next(true);
    });
  }

  stopScan() {
    this.httpClient.get('/api/stopScan').subscribe(() => {
      this.scanInProgress$.next(false);
    });
  }

  refresh() {
    this.httpClient.get('/api/peripherals').subscribe((p: any[]) => {
      this.peripherals$.next(p);
    });
  }
}
