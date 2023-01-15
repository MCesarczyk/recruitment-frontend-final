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
