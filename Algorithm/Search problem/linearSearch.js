const linearSearch =(arr,target) =>{
  return arr.findIndex((element)=> element ===target)
}

console.log(linearSearch([-5,2,10,4,6], 10)); // 2
console.log(linearSearch([-5,2,10,4,6], 6)); // 4
console.log(linearSearch([-5,2,10,4,6], 20)); // -1

 // Big O(n) Linear  -- FindIndex loop through the array under the hood