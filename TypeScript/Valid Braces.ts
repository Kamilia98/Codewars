export function validBraces(braces: string): boolean {
  const stack: string[] = [];
  for (const brace of braces) {
    if (stack.length == 0 || brace === '(' || brace === '{' || brace === '[')
      stack.push(brace);
    else {
      if (brace === ')' && stack[stack.length - 1] === '(') stack.pop();
      else if (brace === '}' && stack[stack.length - 1] === '{') stack.pop();
      else if (brace === ']' && stack[stack.length - 1] === '[') stack.pop();
      else {
        stack.push(brace);
      }
    }
    console.log(stack);
  }
  return stack.length === 0;
}
