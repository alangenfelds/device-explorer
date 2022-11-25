export interface Device {
  sysids: any[];
  model_id: string;
  icon: Icon;
  line: Line;
  guids: any[];
  uisp: Uisp;
  product: Product;
  shortnames: string[];
  triplets: any[];
}

export interface Icon {
  resolutions: Array<number[]>;
  id: string;
}

export interface Line {
  name: string;
  id: string;
}

export interface Product {
  abbrev: string;
  name: string;
}

export interface Uisp {
  nameLegacy: any[];
  bleServices: BleServices;
  line: string;
  firmware: Firmware;
}

export interface BleServices {}

export interface Firmware {
  platform: null;
  board: any[];
}

export type DevicesResponse = {
  version: string;
  devices: Device[];
};
