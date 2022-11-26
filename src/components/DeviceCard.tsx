import React from 'react';
import { useNavigate } from 'react-router-dom';

import deviceUrl from '../assets/devices/device-big.png';
import { Device } from '../types/Device';

type Props = {
  device: Device;
};

const DeviceCard = ({ device }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-[233px] h-[193px] rounded-lg border border-solid border-[##DBDCE1]  hover:shadow-md hover:cursor-pointer"
      onClick={() => navigate(`/device/${device.model_id}`)}
    >
      <div className="w-full">
        <img
          src={deviceUrl}
          alt="device"
          className="w-full h-[124px] object-contain"
        />
      </div>
      <div className="p-3">
        <div className="text-sm font-bold leading-6 truncate">
          {device.product.name}
        </div>
        <div className="text-sm font-normal leading-6 text-black/40 truncate">
          {device.line.name}
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
