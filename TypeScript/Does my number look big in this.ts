export function narcissistic(value: number): boolean {
  const digits = value.toString().split('');
  const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), digits.length), 0);
  return sum === value;
}
