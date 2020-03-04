import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BluetoothCommandsComponent } from './bluetooth-commands/bluetooth-commands.component';
import { BluetoothPeripheralsComponent } from './bluetooth-peripherals/bluetooth-peripherals.component';

@NgModule({
  declarations: [AppComponent, BluetoothCommandsComponent, BluetoothPeripheralsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
