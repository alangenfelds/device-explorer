import { Device } from '../types/Device';

const BASE_URL = 'https://static.ui.com/fingerprint/ui/icons/';

export const getImageUrl = (device: Device, size = 25): string => {
  const resolution = device.icon?.resolutions?.find((resolution) =>
    resolution.includes(size)
  );

  if (resolution?.length) {
    return `${BASE_URL}${device.icon.id}_${resolution[0]}x${resolution[0]}.png`;
  } else {
    return '';
  }
};
