import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BluetoothCommandsComponent } from './bluetooth-commands/bluetooth-commands.component';
import { BluetoothPeripheralsComponent } from './bluetooth-peripherals/bluetooth-peripherals.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BluetoothCommandsComponent, BluetoothPeripheralsComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
