
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
const closeButton = document.querySelector('.close-button');

//form input DOM variables
const amountInput =document.querySelector('.amount-input');
const description_input = document.querySelector('.description-input');
const CategoryInput = document.getElementById('category-select');

//loading tasks array from localStorage to ensure info persistence
let storedTasks = localStorage.getItem('transactions');
let parsedStoredTasks =JSON.parse(storedTasks);
const transactionsArray = parsedStoredTasks ? parsedStoredTasks:[];
console.log(transactionsArray);

let totalBalance = 0;
let totalIncome = 0;
let totalExpense =0;

let transactionType = 'Income'
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
    
        transactionsArray.push(transactionObject); 
   //totalBalance = totalBalance + transactionObject[amount];
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
    transactionType ='Income';
    console.log(transactionType);
})

ExpenseButton.addEventListener('click', function(){
 ExpenseCategory.classList.remove('hidden')
  IncomeCategory.classList.add('hidden');
  transactionType ='Expense';
  console.log(transactionType)
})

actualAddtransaction.addEventListener('click', function(){
    addTransaction(transactionType, amountInput.value, description_input.value, CategoryInput.value);
    console.log(transactionsArray);
})
closeButton.addEventListener('click', function(){
    transactionForm.classList.add('hidden'); 
    backDropOverlay.classList.add('hidden')
})
