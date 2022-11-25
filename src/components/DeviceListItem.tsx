import React from 'react';

import deviceUrl from '../assets/devices/device1.png';
import { Device } from '../types/Device';

type Props = {
  device: Device;
};

const DeviceListItem = ({ device }: Props) => {
  return (
    <tr className="h-[33px] bg-white border-b hover:bg-gray-50 cursor-pointer">
      <td>
        <img src={deviceUrl} alt="device" className="ml-auto pr-12" />
      </td>
      <td className="pl-2">{device.line.name}</td>
      <td className="">{device.product.name}</td>
    </tr>
  );
};

export default DeviceListItem;
