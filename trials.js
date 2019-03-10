// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers['home'] =  '510-867-5309';
phoneNumbers['mobile'] =  '415-555-1212';
phoneNumbers['business'] =  '415-123-4567';

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function getAccountInformation(accName, phNumber, busiName) {
  console.log(`Account Holder Name: ${accName}`);
  console.log(`Account Holder Number: ${phNumber}`);
  console.log(`Business Name: ${busiName}`);
}

getAccountInformation(accountHolder, '123456', businessName);
console.log(`Home phone number: ${phoneNumbers['home']}`);

// Add function to print all addresses, including a header
function showAddresses(addressArray) {
  console.log('Address:');
  for (let address of addressArray) {
    console.log(address);
  }
}

showAddresses(addresses);

// Add function to print phone types and numbers
function showPhoneNums(phoneNumArray) {
  console.log('Phone Numbers:');
  for (let key of Object.keys(phoneNumArray)) {
    console.log(`${key}: ${phoneNumArray[key]}`);
  }
}

showPhoneNums(phoneNumbers);

// ///////////////////////////////////////////////////////
// Transactions:


// Create an empty map of transactions
const accountTransaction = new Map()

// Add function to add transactions
function addTransaction(date, amount) {
  accountTransaction[date] = amount;
  console.log(`Amount: ${accountTransaction[date]} added for date: ${date}`);
}


// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);


// Add function to show balance status
function showBalanceStatus(amount) {
  console.log(`Balance: ${amount}`);
  if (amount <= 0) {
    console.log('YOU ARE OVERDRAWN');
  } else if ((amount > 0) && (amount < 20)) {
    console.log('Warning: You are close to zero balance');
  } else {
    console.log('Thank you for your business');
  }
}

showBalanceStatus(-333);
showBalanceStatus(15);
showBalanceStatus(20);
showBalanceStatus(2100);

// Add function to show transactions
function showTransactions(tranMaps, beginBalance) {
  console.log(`The begining balance is ${beginBalance}`);
  let amount = beginBalance; 

  for (let key of Object.keys(tranMaps)) {
    console.log(`The transaction date is: ${key}`); 
    if (tranMaps[key] < 0 ) {
      console.log('Withdrawal');
    } else {
      console.log('Deposit');
    }
    console.log(`Amount changed: ${tranMaps[key]}`);
    amount = amount + tranMaps[key];
    if (amount < 0) {
      console.log('Charges of $25 added');
    }
    
  }

}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




