import React from 'react';

import deviceUrl from '../assets/devices/device1.png';
import { Device } from '../types/Device';

type Props = {
  device: Device;
};

const DeviceListItem = ({ device }: Props) => {
  // return <div className="flex items-center">{device.model_id}</div>;
  return (
    <tr className="h-[33px] bg-white border-b hover:bg-gray-50">
      <td className="text-right">
        <img src={deviceUrl} alt="device" />
      </td>
      <td className="pl-2">{device.line.name}</td>
      <td className="">{device.product.name}</td>
    </tr>
  );
};

export default DeviceListItem;
