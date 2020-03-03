
import * as events from "events";
import { Peripheral } from '@abandonware/noble';

export interface Noble {
  state: string;

  startScanning(callback?: (error?: Error) => void): void;
  startScanning(serviceUUIDs: string[], callback?: (error?: Error) => void): void;
  startScanning(serviceUUIDs: string[], allowDuplicates: boolean, callback?: (error?: Error) => void): void;
  stopScanning(callback?: () => void): void;
  
  on(event: "stateChange", listener: (state: string) => void): events.EventEmitter;
  on(event: "scanStart" | "scanStop", listener: () => void): events.EventEmitter;
  on(event: "discover", listener: (peripheral: Peripheral) => void): events.EventEmitter;
  on(event: string, listener: Function): events.EventEmitter;
  
  removeListener(event: "stateChange", listener: (state: string) => void): events.EventEmitter;
  removeListener(event: "scanStart" | "scanStop", listener: () => void): events.EventEmitter;
  removeListener(event: "discover", listener: (peripheral: Peripheral) => void): events.EventEmitter;
  removeListener(event: string, listener: Function): events.EventEmitter;
  removeAllListeners(event?: string): events.EventEmitter;
}
