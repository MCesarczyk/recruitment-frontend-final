import chroma from "chroma-js";
import { ColorScaleType } from "./enums";
import { Boundary, ColorMappingType } from "./interfaces";
import { ScatterPlotPoint } from "./types";

export const postprocessPolygonHelper = (polygon: string): number[][] => {
  const trimmed = polygon?.replace(/SRID=4326;POLYGON \(\(/, "").replace(/\)\)/, "");
  const roughed = trimmed.split(', ');
  const chunked = roughed.map(item => item.split(' '));
  return chunked.map(item => item.map(str => parseFloat(str)));
};

export const calculatePolygonCenterHelper = (polygon: number[][]) => {
  const latsArray = polygon.map(([lat, _lng]) => lat);
  const lngsArray = polygon.map(([_lat, lng]) => lng);

  const average = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const latAverage = average(latsArray);
  const lngAverage = average(lngsArray);

  return [latAverage, lngAverage];
};

export const alterArrayElementsHelper = (array: any) => {
  const alterSubArrayElements = (item: any): any => {
    return (Array.isArray(item) && Array.isArray(item[0]))
      ? item.map((sub) => alterSubArrayElements(sub))
      : [item[1], item[0]]
  };

  return array.map(alterSubArrayElements);
};

export const transformPolygonFormat = (polygonString: string): any => {
  const swappedPolygon = postprocessPolygonHelper(polygonString);
  const polygon = alterArrayElementsHelper(swappedPolygon);
  const center = calculatePolygonCenterHelper(polygon);
  return { polygon, center };
};

export const prepareBoundaryHelper = (boundary: Boundary) => {
  return [
    [boundary.top, boundary.left],
    [boundary.top, boundary.right],
    [boundary.bottom, boundary.right],
    [boundary.bottom, boundary.left],
    [boundary.top, boundary.left]
  ];
};

export const calculateBoundaryCenter = (boundary: Boundary) => {
  return [
    (boundary.right + boundary.left) / 2,
    (boundary.bottom + boundary.top) / 2
  ];
};

export const buildColorScaleHelper = (type?: ColorScaleType) => {
  if (!type) {
    return chroma.scale();
  }

  const { colors, domain } = colorMappingHelper(type);

  return chroma.scale(colors).domain(domain);
};

export const buildScatterMapHelper = (
  boundaryBox: Boundary,
  rawData: number[][],
  maxValue: number,
  minValue: number,
  colorScaleType: ColorScaleType,
) => {
  let array: ScatterPlotPoint[] = [];

  const latitudeStep = (boundaryBox.top - boundaryBox.bottom) / (rawData.length - 1);
  const lontitudeStep = (boundaryBox.right - boundaryBox.left) / (rawData[0].length - 1);

  const startLat = boundaryBox.top;
  const startLon = boundaryBox.left;

  const f = buildColorScaleHelper(colorScaleType);

  rawData.forEach((tempRow: number[], indexLat: number) => {
    const currentLat = startLat - indexLat * latitudeStep
    tempRow.forEach((value: number, indexLon: number) => {
      const currentLon = startLon + indexLon * lontitudeStep
      if (value !== 0 && value < maxValue) {
        const color = f((value - minValue) / (maxValue - minValue)).toString();
        array.push([currentLon, currentLat, value, color])
      };
    });
  });

  return array;
};

export const colorMappingHelper = (type: ColorScaleType): ColorMappingType => {
  switch (type) {
    case 'water':
      return {
        colors: ['86AFD6', '8668FF', 'FF6868', 'FCFF68'],
        domain: [0, 0.3073, 0.6615, 1]
      }
    default:
      return {
        colors: [],
        domain: []
      }
  }
};
