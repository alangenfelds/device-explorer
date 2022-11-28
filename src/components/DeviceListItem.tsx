import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../helpers/getImageUrl';

// import deviceUrl from '../assets/devices/device1.png';
import { Device } from '../types/Device';

type Props = {
  device: Device;
};

const DeviceListItem = ({ device }: Props) => {
  const navigate = useNavigate();

  return (
    <tr
      className="h-[33px] bg-white border-b hover:bg-gray-50 cursor-pointer"
      onClick={() => navigate(`/device/${device.model_id}`)}
    >
      <td>
        <img src={getImageUrl(device)} alt="device" className="ml-auto pr-12" />
      </td>
      <td className="pl-2">{device.line.name}</td>
      <td className="">{device.product.name}</td>
    </tr>
  );
};

export default DeviceListItem;
