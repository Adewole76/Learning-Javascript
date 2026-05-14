const transactionContainer = document.querySelector('.transaction-container');
const transactionsArray = []
const addTransaction =(transactiontype, transactionamount, transactiondescription, transactioncategory, transactionDate) => {
    let transactionObject = {
        id: 'txn_' + Date.now() + Math.floor(Math.random() * 1000),
        type: transactiontype,
        amount: transactionamount,
        description: transactiondescription,
        category: transactioncategory,
        date: transactionDate
    }
    if(Number.isFinite(transactionamount)){
       transactionsArray.push(transactionObject); 
    }else{

    }
}