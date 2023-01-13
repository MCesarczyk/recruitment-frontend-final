import styled from "styled-components";
import { DEFAULT_BACKDROP_Z_INDEX } from "../app/constants";

export const Backdrop = styled.div<{ zIndex: number }>`
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.blackTransparent40};
  z-index: ${({ zIndex }) => zIndex || DEFAULT_BACKDROP_Z_INDEX};
`;
