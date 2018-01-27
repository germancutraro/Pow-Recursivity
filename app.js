const pow = (a, b) => b < 2 ? a : a * pow(a, b - 1);
console.log( pow(3, 3) );