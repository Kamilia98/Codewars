export function sumArray(array: number[] | null): number {
  if (!array || !array.length || array.length === 1) return 0;
  const sortedArray = array.sort((a, b) => a - b);
  const sum = sortedArray.reduce((acc, curr) => acc + curr, 0);
  return sum - sortedArray[0] - sortedArray[sortedArray.length - 1];
}
