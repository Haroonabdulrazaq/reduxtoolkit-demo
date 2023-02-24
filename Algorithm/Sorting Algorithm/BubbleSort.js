const bubbleSort=(arr) =>{
  let swapped 
  do{
    swapped= false
    for(let i=0; i< arr.length-1; i++){
      if(arr[i] > arr[i+1]){
        // console.log('swap', i);
        let temp = arr[i+1]
        arr[i+1] = arr[i]
        arr[i] = temp
        swapped= true
      }
    }
    console.log(arr);
  }while(swapped)
}
let arr = [90,70,88,-6,0]
bubbleSort(arr);
console.log(arr);

// const bubbleSort=(arr)=>{
//   let swapped 
//   do{
//     swapped= false
//     for(let i=0; i< arr.length-1; i++){
//       if(arr[i] > arr[i+1]){
//         let temp = arr[i+1]
//         arr[i+1] = arr[i]
//         arr[i] = temp
//         swapped=true
//       }
//     }
//   } while(swapped)
// }
// let arr= [-6,20,8,-2,4]
// bubbleSort(arr);
// console.log(arr);