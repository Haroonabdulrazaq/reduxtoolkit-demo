// Solution Using Recursion
const fib = (n)=>{
  if(n<2){
    return 1
  }
  const fibAnswer = fib(n-1) + fib(n-2)
  return fibAnswer
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))

// Solution Using Lopp or Iteration
const fibonacci = (num) =>{
  let fib = [0, 1]
  for(let i=2; i < num; i++){
    console.log(i);
    fib[i].push(fib[i-1] + fib[i-2])
  }
  return fib
}
fibonacci(5)

// // The Big-O is Linear O(n) -- it has a single for loop
// // The Big-O is Exponential O(2^n) -- it has terrible perfomance as the input grows