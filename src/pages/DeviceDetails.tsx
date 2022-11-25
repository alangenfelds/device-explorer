import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const DeviceDetails = (props: Props) => {
  const { id } = useParams();

  return <div className="flex w-full">DeviceDetails {id}</div>;
};

export default DeviceDetails;
