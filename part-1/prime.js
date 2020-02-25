function isPrime(num) {
  let divisor = 2;
  // Running loop while number is greater than half of the divisor
  while (num / 2 > divisor) {
    if (num % divisor === 0) {
      console.log(divisor);
      return false;
    } else divisor++;
  }
  console.log(divisor);
  return true;
}

console.log(isPrime(137));
