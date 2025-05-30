const isAnagram = function (test, original) {
  const fun = (str) => str.toLowerCase().split('').sort().join('');
  return fun(test) === fun(original);
};
