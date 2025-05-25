export function determinant(m: number[][]): number {
  if (m.length === 1) return m[0][0];
  if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  return m.reduce((acc, row, i) => {
    return acc + (i % 2 === 0 ? 1 : -1) * m[0][i] * determinant(m.slice(1).map(row => row.filter((_, j) => j !== i)));
  }, 0);
}


