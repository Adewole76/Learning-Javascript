'use strict'


const hasProperties = (obj, key) => {
  let Key = key
 if(obj[Key]){
  return true
 }else if(!obj[Key]){
  return false
 }
}
const exampleObject = {
  name: 'segun',
  age: 'man'
};
const userObject = {
  name: 'segun',
  score: 8,
  level: 5
}

const updateScore = (player, points) => {
   let updatedScore = points + 1;
   player.score = updatedScore;
   const newObject = player;
 return newObject
}
console.log(updateScore(userObject, userObject.score))

const objectToArray = (obj) =>{
  const resultArray = []
 for(const [key, value] of Object.entries(obj)){
  const objectArray = [`${key}`, `${value}`];
  resultArray.push(objectArray)
 }
 return resultArray
}
const user = {
  name: "luffy",
  age: 12
}
console.log(objectToArray(user))

const arrayDifference = (arr1, arr2) => {
  const arrayToBeReturned = []
  for(let i = 0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){
     arrayToBeReturned.push(arr1[i]);
    }
  }
  return arrayToBeReturned
}

//console.log(arrayDifference(arrayFirst, arrSecond))

const countAndSegment = (arr) => {
  const results = {}
  for(let i= 0;i<arr.length;i++){
    let groupKey = arr[i]
    if(!results[groupKey]){
      results[groupKey] = 1
    }else if(results[groupKey]){
      results[groupKey] = results[groupKey] + 1;
    }
  }
  return results
}
const arrayFirst = [1,1,1,2,2,3,4,5,5]
console.log(countAndSegment(arrayFirst));


const advancedGrouping = (arr) => {
  return arr.sort((a,b) =>{
  if(a.grade !== b.grade){
    return a.name - b.name

  }});
}
const Students = [
{name: 'Alice', grade: 85},
{name: 'Bob', grade: 92},
{name: 'Charlie', grade: 85},
{name: 'Brad', grade: 85},
{name: 'Diana', grade: 95},
{name: 'Emma', grade: 92},
{name: 'Frank', grade: 78},
{name: 'Grace', grade: 85}
]
console.log(advancedGrouping(Students))
const mergeObjects = (obj1, obj2) => {
  const result = {}
  let obj1Keys = Object.keys(obj1)
  console.log(obj1Keys)
  let obj2Keys = Object.keys(obj2)
  console.log(obj2Keys)
  for(let i = 0; i < obj1Keys.length; i++){
    let particularProperty = obj1Keys[i]
    if(!result[particularProperty] && obj1[particularProperty]&& !obj2[particularProperty]){
      result[particularProperty] = obj1[particularProperty];
    }else if(!result[particularProperty] && obj1[particularProperty] && obj2[particularProperty])
      result[particularProperty] = obj2[particularProperty]
    }
    for(let i = 0; i< obj2Keys.length; i++){
      let particularProperty2 = obj2Keys[i]
      if(!result[particularProperty2] && !obj1[particularProperty2]){
        result[particularProperty2] = obj2[particularProperty2]
      }
    }
    return result
  }

 


const firstObject ={
  name: 'Oluwasegun', 
 age: 20,
 city: 'lagos',
 hobby: 'coding'
}
const secondObject ={
  age: 21, 
  city: 'ibadan',
  job: 'Developer',
  isStudent: false
}
console.log(mergeObjects(firstObject, secondObject))
const firstObjectKeys = Object.keys(firstObject)
console.log(firstObjectKeys)

const getDeepValue = (students, studentInfo) => {

  return studentInfo.split('.').reduce((acc, part) => acc && acc[part], students);
 
}
const student ={
  name: 'Alice',
  address: {
    city: 'lagos',
    country : 'Nigeria',
    coordinates:{
      lat: 6.5244,
      lng: 3.3792
    }
  },
  grades: [85, 92, 78]
}
console.log(getDeepValue(student, 'grades.0'))

const person = {
  name: 'Oluwasegun',
  greet: function(){
    console.log('Hello, my name is' + person.name)
  }
}
const extractedGreet = person.greet;

extractedGreet()
const removeFalsyValues = (arr) => {
  let result =[]
  for(let i =0; i < arr.length; i++){
    if(arr[i]){
      result.push(arr[i]);
    }
  }
  return result
}

const findMissingNumber =(arr, n) => {
  let numbersLessthanN = []
  let missingNumber = []
  for(let i = n;i >= 0;i--){
    let number= i
    numbersLessthanN.push(number)
  }
  console.log(numbersLessthanN);
  for(let i = 0;i<numbersLessthanN.length;i++){
    if(!arr.includes(numbersLessthanN[i])){
      missingNumber.push(numbersLessthanN[i]);
    }
  }
  return missingNumber;
}
const arrTest = [3,0,1]
console.log(findMissingNumber(arrTest, 3))

//Function to find the length of the longest set consecutive numbers
const longestConsecutives = (arr) => {
  let result =[];
  let nonDuplicateArray = [];
  for(let i =0; i<arr.length;i++){
    if(!nonDuplicateArray.includes(arr[i])){
      nonDuplicateArray.push(arr[i])
    }
  }
  nonDuplicateArray.sort((a, b) => a - b);
 let currentStreak = 1
 let maxStreak = 1
 for(let i =0;i<nonDuplicateArray.length-1;i++){
  if(nonDuplicateArray[i]+1 == nonDuplicateArray[i+1]){
    currentStreak = currentStreak + 1
    if(currentStreak > maxStreak){
      maxStreak = currentStreak;
    }
  }else{
    currentStreak = 1;
  }
 }
return maxStreak
}

console.log(longestConsecutives([100,200,1,4,5,2,3]))