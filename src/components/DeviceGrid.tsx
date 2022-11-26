import React from 'react';
import { Device } from '../types/Device';
import DeviceCard from './DeviceCard';

type Props = {
  devices: Device[];
};

const DeviceGrid = ({ devices }: Props) => {
  return (
    <div className="content-container pl-20 pb-20 pt-6 pr-6 overflow-y-auto flex flex-wrap gap-6">
      {devices.map((item) => (
        <DeviceCard key={item.model_id} device={item} />
      ))}
    </div>
  );
};

export default DeviceGrid;
