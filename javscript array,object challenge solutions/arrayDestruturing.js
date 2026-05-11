//Destructuring Arrays

//Practice Challenges
const fruits =['apple', 'banana', 'orange'];
const [firstFruit, secondFruit]= fruits;
console.log(firstFruit, secondFruit);

//Swapping values
let a = 10;
let b = 20;
[a, b] = [b, a]
console.log(b);

const numbers =[100, 200, 300, 400, 500,]
const [firstValue, , , , lastValue ] = numbers
console.log(firstValue, lastValue)

//
const Scores =[85, 97, 90, 34, 45];
const restScores = [...Scores, 67, 68, 69]
console.log(restScores);
