const binarySearch = (arr, target)=>{
  let tempArr = arr.slice(0)
  for(let i=0; i<arr.length-1; i++){
    let mid = tempArr[Math.floor(tempArr.length/2)]
    if(target === mid){
      return arr.indexOf(mid)
    }else if(target < mid){
      tempArr= tempArr.slice(0, tempArr.indexOf(mid))
    }else if(target > mid){
      tempArr= tempArr.slice(tempArr.indexOf(mid))
    }
  }
  return -1
}
// console.log(binarySearch([-5,2,4,6,10], 10)); // 4
// console.log(binarySearch([-5,2,4,6,10], 6)); // 3
// console.log(binarySearch([-5,2,4,6,10], 20)); // -1


// Big O(n) - The above Algorithm has a Linear Time Complexity


// Another solution
const binarySearcher = (arr, target) =>{
  let leftIndex = 0
  let rightIndex = arr.length - 1
  
  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[middleIndex]) {
      return middleIndex
    } 
    else if(target < arr[middleIndex]) {
      rightIndex = middleIndex -1
    }
    else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}
// Big O(logn) - The above Algorithm has a Linear Time Complexity




// Recursive Binary Search


const recursiveBinarySearch =(arr, target)=>{
  return searchBinary(arr, target, 0, arr.length -1)
}

const searchBinary =(arr, target, leftIndex, rightIndex) =>{
  if(leftIndex > rightIndex){
    return -1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex)/2)
  if(target ===arr[middleIndex]) {
    return middleIndex
  }
  if(target < arr[middleIndex]) {
    return searchBinary(arr, target, leftIndex, middleIndex -1)
  }else {
    return searchBinary(arr, target, middleIndex + 1, rightIndex)
  }
}

// Big O(logn)

console.log(recursiveBinarySearch([-5,2,4,6,10], 10)); // 4
console.log(recursiveBinarySearch([-5,2,4,6,10], 6)); // 3
console.log(recursiveBinarySearch([-5,2,4,6,10], 20)); // -1