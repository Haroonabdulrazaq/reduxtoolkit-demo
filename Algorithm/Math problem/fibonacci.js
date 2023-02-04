const fibonacci = (num) =>{
  let fib = [0, 1]
  for(let i=2; i < num; i++){
    console.log(i);
    fib[i].push(fib[i-1] + fib[i-2])
  }
  return fib
}
fibonacci(5)

// The Big-O is Linear -- it has a single for loop