const sieveOfEratothenes = (num) => {
  const isPrime = new Array(num).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; i * j <= num; j++) {
      isPrime[i * j] = false;
    }
  }

  return isPrime.reduce((primes, isCurrentPrime, i) => {
    if (isCurrentPrime) {
      primes.push(i);
    }
    return primes;
  }, []);
};

const result = sieveOfEratothenes(20);
console.log(result);
