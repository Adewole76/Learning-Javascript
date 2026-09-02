'use strict'
function waitTwoSeconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi, I am late on purpose");
    }, 2000);
  });
}

console.log("1. I start");

waitTwoSeconds()
  .then(function (message) {
    console.log("3. " + message);
  });

console.log("2. I did not wait");

function fetchQuote (){ return new Promise((resolve, reject) => {
    let randomNumber = Math.random(); 
    console.log(randomNumber)
    
     if(randomNumber > 0.3){
        setTimeout(() => {
     resolve({ text: "Stay hungry, stay foolish.", author: "Steve Jobs" });
}, 2000);
     }
     
     else{
       setTimeout(() => {
     reject(new Error('Failed to load info'));
}, 2000);
     }
     
})
}

fetchQuote().then((result)=> console.log(`title:${result.text} author: ${result.author}`)).catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done, either way"); 
  });

const getQuote = async () => {
   try {
    const result = await fetchQuote();
    console.log(result);
   } catch (error) {
    console.log(error);
   }finally{
    console.log('done either way')
   }
};

getQuote()