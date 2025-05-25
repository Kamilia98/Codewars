export function validISBN10(isbn: string): boolean {
  if (isbn.length !== 10) return false;
  if (!isbn.match(/^\d{9}[\dX]$/)) return false;
  return isbn.split('').reduce((acc, char, index) => {
    return acc + (char === 'X' ? 10 : parseInt(char)) * (index + 1);
  }, 0) % 11 === 0;
}

