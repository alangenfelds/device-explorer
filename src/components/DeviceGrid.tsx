import React from 'react';
import { Device } from '../types/Device';
import DeviceCard from './DeviceCard';

type Props = {
  devices: Device[];
};

const DeviceGrid = ({ devices }: Props) => {
  console.log('devices', devices);
  return (
    <div className="pl-20 pb-20 pt-6 pr-6 font-lato devices-container overflow-y-auto">
      <div className="text-[#BDBDBD] text-xs font-light">
        {devices.length} devices
      </div>
      <div className="mt-[10px]  flex flex-wrap gap-6">
        {devices.map((item) => (
          <DeviceCard key={item.model_id} device={item} />
        ))}
      </div>
    </div>
  );
};

export default DeviceGrid;
