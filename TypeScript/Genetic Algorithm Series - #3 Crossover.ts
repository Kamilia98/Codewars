export const primeFactors = (n: number): string => {
  let str = '';
  let count = 0;

  for (let num = 2; num * num <= n; num++) {
    count = 0;
    while (n % num === 0) {
      count++;
      n /= num;
    }
    if (count > 0) {
      str += `(${num}${count > 1 ? `**${count}` : ''})`;
    }
  }

  if (n > 1) {
    str += `(${n})`;
  }

  return str;
};
