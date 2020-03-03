import { Peripheral } from '@abandonware/noble';

export type PeripheralDTO = Pick<
  Peripheral,
  'id' | 'uuid' | 'address' | 'addressType' | 'connectable' | 'advertisement' | 'rssi' | 'services' | 'state'
>;

export const getPeripheralDTO = (peripheral: Peripheral): PeripheralDTO => {
  return {
    id: peripheral.id,
    uuid: peripheral.uuid,
    address: peripheral.address,
    addressType: peripheral.addressType,
    connectable: peripheral.connectable,
    advertisement: peripheral.advertisement,
    rssi: peripheral.rssi,
    services: peripheral.services,
    state: peripheral.state
  };
};
