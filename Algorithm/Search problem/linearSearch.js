const linearSearch =(t,n) =>{
  return t.findIndex((element)=> element ===n)
}

console.log(linearSearch([-5,2,10,4,6], 10)); // 2
console.log(linearSearch([-5,2,10,4,6], 6)); // 4
console.log(linearSearch([-5,2,10,4,6], 20)); // -1