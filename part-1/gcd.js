function gcd(a, b) {
  let baseDivisor = 2;
  let highestDivisor = 1;

  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= baseDivisor && b >= baseDivisor) {
    if (a % baseDivisor === 0 && b % baseDivisor === 0) {
      highestDivisor = baseDivisor;
    }
    baseDivisor++;
  }
  return highestDivisor;
}

console.log(gcd(12, 144));
