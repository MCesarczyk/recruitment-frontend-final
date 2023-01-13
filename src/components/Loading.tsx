import Spinner from "react-spinner-material";
import styled from "styled-components";
import { theme } from "../app/theme";
import { Backdrop } from "./Backdrop";

export const Loading = () => {
  return (
    <Backdrop zIndex={1050}>
      <LoadingWrapper>
        <Spinner
          radius={60}
          color={theme.color.white}
          stroke={4}
          visible
        />
      </LoadingWrapper>
    </Backdrop>
  );
};

const LoadingWrapper = styled.div`
  display: grid;
  place-items: center;
  padding-top: 42px;
`;
