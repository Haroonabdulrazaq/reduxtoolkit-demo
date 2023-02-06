const isPowerOfTwo = (num) =>{
  const maxNum = Math.pow(2, num)
  for(let i=0; i < maxNum; i++){
    if(num === Math.pow(2, i)){
      console.log(i);
      return true
    }
  }
  return false
}

// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(2)); // true
// console.log(isPowerOfTwo(4)); // true
// console.log(isPowerOfTwo(5)); // false

// Another solution

const isPowerTwo = (num) =>{
  if(num< 1) return false
  while(num > 1) {
    if(num%2 !== 0) {
      return false
    }
    num /=2
  }
  return true
}

console.log(isPowerTwo(1)); // true
console.log(isPowerTwo(2)); // true
console.log(isPowerTwo(4)); // true
console.log(isPowerTwo(5)); // false

// Big O(log n)