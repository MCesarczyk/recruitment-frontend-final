import styled from 'styled-components';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MAP_DEFAULT_ZOOM, MAP_SOURCE_URL, MAP_VENDOR_NAME, MAP_VENDOR_URL } from '../app/constants';
import { Outlet } from 'react-router-dom';

export const Map = () => {
  return (
    <StyledMapContainer
      center={[52.29354323765716, 18.509392400954617]}
      zoom={MAP_DEFAULT_ZOOM}
      scrollWheelZoom={true}
    >
      <TileLayer
        url={MAP_SOURCE_URL}
        attribution={`&copy; '<a href=${MAP_VENDOR_URL}>${MAP_VENDOR_NAME}</a>'`}
      />
      <Outlet />
    </StyledMapContainer>
  )
};

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;
