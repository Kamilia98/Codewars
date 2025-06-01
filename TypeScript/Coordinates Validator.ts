export function isValidCoordinates(coordinates: string): boolean {
  const [latitude, longitude] = coordinates.split(', ').map((el) => Number(el));
  if (!latitude || !longitude) return false;
  if (
    Math.abs(latitude) < 0 ||
    Math.abs(latitude) > 90 ||
    Math.abs(longitude) < 0 ||
    Math.abs(longitude) > 180
  )
    return false;
  return true;
}
