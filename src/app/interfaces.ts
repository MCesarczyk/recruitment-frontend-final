export interface UserData {
  username: string;
  password: string;
};

export interface Boundary {
  left: number;
  right: number;
  bottom: number;
  top: number;
};

export interface ValueAndLabel {
  value: string | number;
  label: string;
};

export interface ColorMappingType {
  colors: string[];
  domain: number[];
};

export interface ScatterplotData {
  coordinates_bounding_box: Boundary;
  data: number[][];
};
