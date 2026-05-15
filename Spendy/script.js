
const transactionContainer = document.querySelector('.transaction-container');
const addTransactionButton = document.querySelector('.add-transaction');
const totalAmountDiv = document.querySelector('.total-balance');
const updatetotalAmountBtn = document.querySelector('.update-amount-button')
const transactionForm = document.querySelector('.transaction-form');
const backDropOverlay = document.querySelector('.overlay');
const incomeButton = document.querySelector('.income-button');
const ExpenseButton = document.querySelector('.Expense-button')
const ExpenseCategory = document.querySelector('.Expense');
const IncomeCategory = document.querySelector('.Income');
const actualAddtransaction = document.querySelector('.add')

//loading tasks array from localStorage to ensure info persistence
let storedTasks = localStorage.getItem('transactions');
let parsedStoredTasks =JSON.parse(storedTasks);
const transactionsArray = parsedStoredTasks ? parsedStoredTasks:[];
console.log(transactionsArray);

let totalBalance = 0;
let totalIncome = 0;
let totalExpense =0;


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
    };
   totalBalance = totalBalance + transactionObject[amount];
    localStorage.setItem('transactions', JSON.stringify(transactionsArray));
    console.log(transactionsArray);
}


addTransactionButton.addEventListener('click', function(){
    transactionForm.classList.remove('hidden');
    backDropOverlay.classList.remove('hidden');
});
backDropOverlay.addEventListener('click', function(){
    transactionForm.classList.add('hidden'); 
    backDropOverlay.classList.add('hidden')
})

incomeButton.addEventListener('click', function(){
    IncomeCategory.classList.remove('hidden');
    ExpenseCategory.classList.add('hidden');
})

ExpenseButton.addEventListener('click', function(){
 ExpenseCategory.classList.remove('hidden')
  IncomeCategory.classList.add('hidden');
})

actualAddtransaction.addEventListener('click', function(){
    addTransaction()
})

