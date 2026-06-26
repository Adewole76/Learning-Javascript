'use strict'
const arrOfnum = [2,1,4,3,4]

const calculateAverage = (arr) => {
    let result= 0;
    for(let i =0; i< arr.length; i++){
        result = result + arr[i]
    }
    return result / arr.length;

}
console.log(calculateAverage(arrOfnum));




//Number greater than 18 challenge
const numgreaterthan18 = (arr) => {
    const result = [] 
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 18){
        result.push(arr[i])
    }
  }
  return result
}
console.log(numgreaterthan18([23, 15, 11, 67, 19, 18]))

//reversing an array
const reverseArray = (arr) => {
    const result = [];
  for(let i = arr.length - 1; i<=arr.length; i--){
    console.log(arr[i])
  }
  return result
}
console.log(reverseArray([1, 2, 3, 4, 5]))