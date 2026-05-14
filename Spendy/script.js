const transactionContainer = document.querySelector('.transaction-container');
const addTransactionButton = document.querySelector('.add-transaction');
let storedTasks = localStorage.getItem('transactions');
let parsedStoredTasks =JSON.parse(storedTasks);
const transactionsArray = parsedStoredTasks;
console.log(transactionsArray);
//Functions to add a transaction
const addTransaction =(transactiontype, transactionamount, transactiondescription, transactioncategory) => {
    let transactionObject = {
        id: 'txn_' + Date.now() + Math.floor(Math.random() * 1000),
        type: transactiontype,
        amount: transactionamount,
        description: transactiondescription,
        category: transactioncategory,
        date: new Date()
    }
    if(Number.isFinite(transactionamount)){
        transactionsArray.push(transactionObject); 
    }else{
      console.log('amount must be a number');
    }
   
    localStorage.setItem('transactions', JSON.stringify(transactionsArray));
    console.log(transactionsArray)
}
addTransactionButton.addEventListener('click', function(){
    addTransaction('income', 2500, 'money from my sis', 'food and snacks', )
});

