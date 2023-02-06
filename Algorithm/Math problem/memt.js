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

console.log(isPowerOfTwo(5));