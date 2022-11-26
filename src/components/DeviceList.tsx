import React from 'react';
import { Device } from '../types/Device';
import DeviceListItem from './DeviceListItem';

type Props = {
  devices: Device[];
};

const DeviceList = ({ devices }: Props) => {
  return (
    <div className="content-container pl-20 pb-20 pt-6 pr-6 overflow-y-auto">
      <table className="table-auto w-full text-sm text-left text-black font-lato">
        <thead className="">
          <tr>
            <th
              scope="col"
              className="w-[140px] text-[#BDBDBD] text-xs font-light text-center"
            >
              {devices.length} devices
            </th>
            <th scope="col" className="w-[254px] uppercase pl-2">
              Product line
            </th>
            <th scope="col" className="">
              NAME
            </th>
          </tr>
        </thead>
        <tbody>
          {devices.map((item) => (
            <DeviceListItem key={item.model_id} device={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceList;
