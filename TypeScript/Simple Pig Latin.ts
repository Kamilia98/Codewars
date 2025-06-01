export const pigIt = (a: string): string => {
  return a
    .split(' ')
    .map((word) =>
      /^[a-zA-Z]+$/.test(word) ? word.slice(1) + word[0] + 'ay' : word
    )
    .join(' ');
};
