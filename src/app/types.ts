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

export enum ColorScaleType {
  water = 'water',
};

export type ScatterPlotPoint = [number, number, number, string] | never[];

export interface ScatterplotData {
  coordinates_bounding_box: Boundary;
  data: number[][];
};
