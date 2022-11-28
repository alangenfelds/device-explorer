import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../app/GlobalContext';

import backIcon from '../assets/back.svg';

import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { getImageUrl } from '../helpers/getImageUrl';

type Props = {};

const DeviceDetails = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { deviceMap, isLoading, error } = useGlobalContext();

  const selectedDevice = id ? deviceMap[id] : undefined;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="sticky top-0 w-full font-lato">
      <div className="flex w-full justify-between items-center px-6 h-12 border-b-[1px] border-t-[1px] bg-white">
        <div
          className="flex items-center justify-center w-12 h-12 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={backIcon} alt="goback" />
        </div>
        <div>{selectedDevice ? selectedDevice.product.name : ''}</div>
        <div />
      </div>
      <div className="device-details-container grid place-items-center">
        {selectedDevice ? (
          <div className="flex items-center w-[688px] h-64">
            <img
              src={getImageUrl(selectedDevice, 257)}
              alt="device"
              className="w-64 h-64 object-contain"
            />
            <div className="ml-8 flex flex-col w-full">
              <div className="flex justify-between h-[30px] border-b-[1px] border-[#EDEDF0]">
                <div>Product line</div>
                <div className="text-right">{selectedDevice.line?.name}</div>
              </div>
              <div className="flex justify-between h-[30px] border-b-[1px] border-[#EDEDF0]">
                <div>ID</div>
                <div className="text-right">{selectedDevice.model_id}</div>
              </div>
              <div className="flex justify-between h-[30px] border-b-[1px] border-[#EDEDF0]">
                <div>Name</div>
                <div className="text-right">{selectedDevice.product?.name}</div>
              </div>
              <div className="flex justify-between h-[30px] border-b-[1px] border-[#EDEDF0]">
                <div>Short name</div>
                <div className="text-right">
                  {selectedDevice.shortnames?.length
                    ? selectedDevice.shortnames[0]
                    : ''}
                </div>
              </div>
              <div className="flex justify-between h-[30px] border-b-[1px] border-[#EDEDF0]">
                <div>Max. power</div>
                <div className="text-right">-</div>
              </div>
              <div className="flex justify-between h-[30px] border-b-[1px] border-[#EDEDF0]">
                <div>Speed</div>
                <div className="text-right">-</div>
              </div>
              <div className="flex justify-between h-[30px] border-b-[1px] border-[#EDEDF0]">
                <div>Number of ports</div>
                <div className="text-right">-</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-2xl font-lato">404 - PAGE NOT FOUND</div>
        )}
      </div>
    </div>
  );
};

export default DeviceDetails;
