'use strict'
const transactionContainer = document.querySelector('.transaction-container');
const addTransactionButton = document.querySelector('.add-transaction');
const totalAmount = document.querySelector('.total-balances');
console.log(totalAmount);
const clButton = document.querySelector('.cl-btn');
const recentTransaction = document.querySelector('.actual-transactions');
const updatetotalAmountBtn = document.querySelector('.update-amount-button');
const updateButton = document.querySelector('.update-button');
const updateAmountInput = document.querySelector('.update-amount-input');
console.log(updateAmountInput);
const transactionForm = document.querySelector('.transaction-form');
const backDropOverlay = document.querySelector('.overlay');
const incomeButton = document.querySelector('.income-button');
const ExpenseButton = document.querySelector('.Expense-button');
const ExpenseCategory = document.querySelector('.Expense-cate');
console.log(ExpenseCategory);
const IncomeCategory = document.querySelector('.Income-category');
console.log(IncomeCategory)
const actualAddtransaction = document.querySelector('.add')
const closeButton = document.querySelector('.close-button');
const selectExpense = document.querySelector('.ExpenseCat');
console.log(selectExpense);
const okayButton = document.querySelector('.okay-btn');
const selectIncome = document.querySelector('.incomeCat');
const incomeContainer = document.querySelector('.income-container');
const expenseContainer = document.querySelector('.expense-container');
const recentsContainer = document.querySelector('.recents');
const insufficientModal = document.querySelector('.Insufficient-balance-modal');
console.log(insufficientModal);
const emptyState = document.querySelector('.empty-state');
console.log(emptyState)


//loading tasks array from localStorage to ensure info persistence
let storedTasks = localStorage.getItem('transactions');
let parsedStoredTasks =JSON.parse(storedTasks);
let transactionsArray = parsedStoredTasks ? parsedStoredTasks:[];
console.log(transactionsArray);

//form input DOM variables
const amountInput = document.querySelector('.amount-input');
const description_input = document.querySelector('.description-input');
let CategoryInput= document.querySelector('.category-select');
console.log(CategoryInput);
//user monetary info
let storeBalance = localStorage.getItem('totalBalance');
let parsedStoredBalance = JSON.parse(storeBalance)
let totalBalance = parsedStoredBalance;
let totalIncome = 0;
let totalExpense =0;


//Variable tracking transactions type changes with every
let transactionType = 'Expense';

//Functions to add a transaction
const addTransaction =(transactiontype, transactionamount, transactiondescription, transactioncategory) => {
    let transactionObject = {
        id: 'txn_' + Date.now() + Math.floor(Math.random() * 1000),
        type: transactiontype,
        amount: transactionamount,
        description: transactiondescription,
        category: transactioncategory,
        date: new Date(),
    }
    transactionObject.month = transactionObject.date.toLocaleString('default', { month: 'long' })
    transactionObject.year = new Date().getFullYear();
       
    if(transactionObject.type === 'Income'){
        totalBalance = totalBalance + Number(transactionObject.amount);
        totalIncome = totalIncome + Number(transactionObject.amount);
        console.log(totalIncome);
        console.log(totalBalance);
        transactionsArray.unshift(transactionObject); 
        }else if(transactionObject.type === 'Expense' && totalBalance > 0 && !(Number(transactionObject.amount) > totalBalance)){
        totalBalance = totalBalance - Number(transactionObject.amount);
        totalExpense = totalExpense + Number(transactionObject.amount);
        console.log(totalExpense);
        console.log(totalBalance);
        transactionsArray.unshift(transactionObject); 
        }else if(Number(transactionObject.amount) > totalBalance && transactiontype === 'Expense'){
            insufficientModal.classList.remove('hidden');
            backDropOverlay.classList.remove('hidden');
            transactionForm.classList.add('hidden')
            console.log('i looked at what you wrote here')
            console.log(totalBalance)
        }
    console.log(transactionObject.month);
    console.log(transactionObject.year);
   //totalBalance = totalBalance + transactionObject[amount];
   localStorage.setItem('totalBalance', JSON.stringify(totalBalance));
    localStorage.setItem('transactions', JSON.stringify(transactionsArray));
    console.log(transactionsArray);
}

//Button Events
addTransactionButton.addEventListener('click', function(){
    transactionForm.classList.remove('hidden');
    backDropOverlay.classList.remove('hidden');
});
backDropOverlay.addEventListener('click', function(){
    transactionForm.classList.add('hidden'); 
    backDropOverlay.classList.add('hidden');
    insufficientModal.classList.add('hidden');
})
clButton.addEventListener('click', function(){
    insufficientModal.classList.add('hidden');
    backDropOverlay.classList.add('hidden');
})
okayButton.addEventListener('click', function(){
    insufficientModal.classList.add('hidden');

    backDropOverlay.classList.add('hidden');
})

incomeButton.addEventListener('click', function(){
  ExpenseCategory.classList.add('hidden');
  IncomeCategory.classList.remove('hidden');
  incomeButton.classList.add('active')
  ExpenseButton.classList.remove('active');
  selectExpense.classList.remove('category-select')
  selectIncome.classList.add('category-select');
  transactionType = 'Income';
  CategoryInput = document.querySelector('.category-select');
  console.log(CategoryInput);
})
ExpenseButton.addEventListener('click', function(){
    ExpenseCategory.classList.remove('hidden');
    IncomeCategory.classList.add('hidden');
    incomeButton.classList.remove('active');
    ExpenseButton.classList.add('active');
    selectIncome.classList.remove('category-select');
    selectExpense.classList.add('category-select');
    transactionType = 'Expense'
    CategoryInput = document.querySelector('.category-select')
    console.log(CategoryInput);
})

actualAddtransaction.addEventListener('click', function(){
    addTransaction(transactionType, amountInput.value, description_input.value, CategoryInput.value);
    mappingTransaction();
    mapRecentTransactions();
    console.log(transactionsArray);
})
closeButton.addEventListener('click', function(){
    transactionForm.classList.add('hidden'); 
    backDropOverlay.classList.add('hidden');
});


const mappingTransaction = () => {
    if(transactionsArray.length > 0){
    const mappedTransactionsArray = transactionsArray.map(transaction => {
        const isIncome = transaction.type === 'Income';
        
        return `
            <div class="${isIncome ? 'transaction-income' : 'transaction-expense'}" data-id="${transaction.id}">
            <section class="important-info">
            <img class="transaction-icon" src="${isIncome ? 'icons/income.png':'icons/expenses.png'}">
            <footer class="description-date-category">
              <p>${transaction.description}</p>
                <section class="date-category">
                <p>${transaction.month},${transaction.year}</p>
                <p class="${isIncome ? 'income-category' : 'expense-category'}">.${transaction.category}</p>
                </section>
            </footer>
            </section>

            <section class="amount-deletebtn">
            <p class="${isIncome ? 'income-amount':'expense-amount'}">${isIncome ? '+'+transaction.amount : '-' + transaction.amount}</p>
            <footer class="footer-btn"><button class="delete-button">Delete</button></footer>
            </section>
                
            </div>
        `;
    }).join('');
        transactionContainer.innerHTML = mappedTransactionsArray;
}else{
transactionContainer.innerHTML = emptyState.innerHTML;
}
   
};
mappingTransaction();


const recentTransactionArr = transactionsArray.filter(transaction => transactionsArray.indexOf(transaction) <= 3);
console.log(recentTransactionArr);


//Recents Dashboard Mapping
const mapRecentTransactions = () => {
    console.log('I am working');
    const mappedRecentsArr = recentTransactionArr.map(transaction => {
        const isIncome = transaction.type === 'Income';
        
        return `
            <div class="${isIncome ? 'transaction-income' : 'transaction-expense'}" data-id="${transaction.id}">
                <p class="${isIncome ? 'income-category' : 'expense-category'}">${transaction.category}</p>
                <button class="delete-button">Delete</button>
            </div>
        `;
    }).join('');
    recentTransaction.innerHTML =  mappedRecentsArr;
};
mapRecentTransactions()
console.log(recentTransaction);



// Delete using event delegation (put this once)
transactionContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-button')) {
        const transactionDiv = e.target.closest('[data-id]');
        const idToDelete = transactionDiv.dataset.id;

        // Remove from array
        transactionsArray = transactionsArray.filter(t => t.id !== idToDelete);

        // Save to localStorage
        localStorage.setItem('transactions', JSON.stringify(transactionsArray));

        // Re-render
        mappingTransaction();
    }
});

//delete Transaction from transactions Array
const deleteTransaction = (arr) => {
    let filteredTransactionsArray = arr.filter(transaction => transaction.type !== 'Deleted');
    transactionsArray = filteredTransactionsArray;
    localStorage.setItem('transactions', JSON.stringify(transactionsArray));
}


// Event delegation for delete buttons
transactionContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-button')) {
        console.log(transactionsArray)
        // Get the transaction ID from the parent element
        const transactionElement = e.target.closest('.transaction-income, .transaction-expense');
    
    }
});

//for loop for all transactions
// for(let i = 0; i < transactionsArray.length; i++){
//     let transactionAmount = Number(transactionsArray[i].amount);
//     if(transactionsArray[i].type === 'Income'){
//     totalBalance = totalBalance + transactionAmount;
//     totalIncome = totalIncome + transactionAmount;
//     console.log(totalIncome);
//     console.log(totalBalance);
//     }else if(transactionsArray[i].type === 'Expense' && totalBalance > 0){
//     totalBalance = totalBalance - transactionAmount;
//     totalExpense = totalExpense + transactionAmount;
//     console.log(totalExpense);
//     console.log(totalBalance);
//     }
// }
console.log(totalBalance);
totalAmount.innerHTML = totalBalance;
incomeContainer.innerHTML = totalIncome;
expenseContainer.innerHTML = totalExpense;
console.log(totalAmount.innerHTML);
