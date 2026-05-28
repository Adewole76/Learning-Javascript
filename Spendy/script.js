'use strict'
const transactionContainer = document.querySelector('.transaction-container');
const addTransactionButton = document.querySelector('.add-transaction');
const totalAmount = document.querySelector('.total-balances');
console.log(totalAmount);
const updatetotalAmountBtn = document.querySelector('.update-amount-button');
const transactionForm = document.querySelector('.transaction-form');
const backDropOverlay = document.querySelector('.overlay');
const incomeButton = document.querySelector('.income-button');
const ExpenseButton = document.querySelector('.Expense-button');
const ExpenseCategory = document.querySelector('.Expense');
const IncomeCategory = document.querySelector('.Income');
const actualAddtransaction = document.querySelector('.add')
const closeButton = document.querySelector('.close-button');
const selectExpense = document.querySelector('.ExpenseCat')
const selectIncome = document.querySelector('.incomeCat');

//form input DOM variables
const amountInput = document.querySelector('.amount-input');
const description_input = document.querySelector('.description-input');
const CategoryInput = document.querySelector('.category-select');
console.log(CategoryInput);

//loading tasks array from localStorage to ensure info persistence
let storedTasks = localStorage.getItem('transactions');
let parsedStoredTasks =JSON.parse(storedTasks);
let transactionsArray = parsedStoredTasks ? parsedStoredTasks:[];
console.log(transactionsArray);

//user monetary info
let totalBalance = 0;
let totalIncome = 0;
let totalExpense =0;

//Variable tracking transactions category
let transactionType = 'Expense'
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
    console.log(CategoryInput)
})

ExpenseButton.addEventListener('click', function(){
 ExpenseCategory.classList.remove('hidden');
  IncomeCategory.classList.add('hidden');
  transactionType ='Expense';
  console.log(transactionType)
  console.log(CategoryInput);
})

actualAddtransaction.addEventListener('click', function(){
    addTransaction(transactionType, amountInput.value, description_input.value, CategoryInput.value);
    mappingTransaction();
    console.log(transactionsArray);
})
closeButton.addEventListener('click', function(){
    transactionForm.classList.add('hidden'); 
    backDropOverlay.classList.add('hidden');
});


const mappingTransaction = () => {
    const mappedTransactionsArray = transactionsArray.map(transaction => transaction.type === 'Income'?`
    <div class="transaction-income">
    <p class="income-category">${transaction.category}</p>
    <button class= "delete-button">Delete</button>
    </div>
    `:`<div class="transaction-expense">
    <p class="expense-category">${transaction.category}</p>
    <button class= "delete-button">Delete</button>
    </div>`).join('');
    
   
    transactionContainer.innerHTML= mappedTransactionsArray;
};
mappingTransaction();
const deleteButtons = document.querySelectorAll(".delete-button");
console.log(deleteButtons);

//delete Transaction from transactions Array
const deleteTransaction = (arr) => {
    let filteredTransactionsArray = arr.filter(transaction => transaction.type !== 'Deleted');
    transactionsArray = filteredTransactionsArray;
    localStorage.setItem('transactions', JSON.stringify(transactionsArray))
deleteTransaction(arr); 
}
 
//event listener for all delete buttons 
for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', function(){
        console.log(transactionsArray[i]);
        transactionsArray[i].type = 'Deleted'
        deleteTransaction(transactionsArray); 
    })
}
//for loop for all transaction amounts 
for(let i = 0; i < transactionsArray.length; i++){
    let transactionAmount = Number(transactionsArray[i].amount);
    if(transactionsArray[i].type === 'Income'){
    totalBalance = totalBalance + transactionAmount;
    console.log(totalBalance);
    }else if(transactionsArray[i].type === 'Expense'){
    totalBalance = totalBalance - transactionAmount;
    console.log(totalBalance);
    }
}
totalAmount.innerHTML = totalBalance;
console.log(totalAmount.innerHTML);


