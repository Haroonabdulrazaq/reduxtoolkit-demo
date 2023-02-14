const isPrime = (num) => {
  if(num < 2) {        // Prime number are numbers divisible by 1 and itself
    return false    // Hence this condition checks for that and checks if its a natural number
  }
  for(let i=2; i < num; i++) {
    console.log(i);
    if(num%i===0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(27));

 // Big O(n)


// Another solution checking if its less than the sqrt of n

const amIPrime = (num)=> {
  if(num < 2) return false;
  for(let i =2; i< Math.sqrt(num); i++){
    if(num%i===0) {
      return false
    }
  }
  return true;
}

// console.log(amIPrime(1));
// console.log(amIPrime(5));
console.log(amIPrime(13));

// Big O(Math.sqrt(n))