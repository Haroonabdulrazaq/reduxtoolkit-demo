const recursiveFactorial =(n)=>{
  if(n <= 1){
    return 1
  }
  let factorialAnswer = n * recursiveFactorial(n-1)
  return factorialAnswer
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(2))
console.log(recursiveFactorial(3))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))

// Big(O) of the above Algorithm is Linear O(n)
// Big(O) of the above Algorithm is Linear O(n)


// Solutions Using Loop

const factorial = (n)=>{
  let product = 1
  for(let i=1; i <= n; i++){
    product *=i
    console.log('R', product);
  }
  console.log(product);
}
  factorial(0)
  factorial(1)
  factorial(5)
  factorial(10)
  // Big(O) of the above Algorithm is Linear O(n)
    
  const factorialD = (n)=>{
    let product = 1
    for(let i=2; i <= n; i++){
        product *=i
        console.log('D', product);
    }
    console.log(product);
  }
        
  factorialD(0)
  factorialD(1)
  factorialD(5)
  factorialD(10)
  // Big(O) of the above Algorithm is Linear O(n)