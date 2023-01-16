import styled from 'styled-components';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MAP_DEFAULT_ZOOM, MAP_SOURCE_URL, MAP_VENDOR_NAME, MAP_VENDOR_URL } from '../app/constants';
import { Link, Outlet } from 'react-router-dom';
import { Button } from './Button';
import { ROUTES } from '../app/routes';
import { ReactComponent as Chevron } from '../assets/chevron.svg';

export const Map = () => {
  return (
    <>
      <ButtonWrapper>
        <Link to={ROUTES.home}>
          <Button><Icon /><Icon /> back </Button>
        </Link>
      </ButtonWrapper>
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
    </>
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

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.25rem 1rem;
  z-index: 900;
`;

const Icon = styled(Chevron)`
  width: 12px;
  transform: rotate(90deg) translateX(-2px);
`;
