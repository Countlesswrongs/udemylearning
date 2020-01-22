'use strict';
let money, date;
function MoonScript(){

    function start() {

        money = +prompt ('What is your budget for this month?', ''); 
        date  = prompt ('Please input date in format YYYY-MM-DD', '');
        while (isNaN(money) || money == '' || money == null) {
            money = +prompt ('What is your budget for this month?', ''); 
        }
}


start();

var a,
    i,
    b;

// console.log(money);
var appData = 
{ 
    budget : money,
    timeData : date, // yyyy - mm - dd
    expenses: {},
    income : [],
    savings : true,
    level : 'ok',
    optionalExpenses : {},
    monthIncome : 0
};
console.log('budget ', appData.budget);


function chooseExpenses() {
    for (let i = 0; i<2; i++) {
let a = prompt("Please input name of obligatory expense (1 item) this month (50 symbols max)", ''),
    b = prompt("How much it will cost you?", '');
    if ( typeof(a) === "string" && typeof(a) != null 
         && a !='' && b !='' && a.length < 50 && typeof(b) != null && isNaN(b) != true) {
             b=+b;
        console.log("expense recorded to " + a + " and it is " + b + " and it is " + (i+1) + " of 2 total");
        console.log(typeof(b));
        appData.expenses[a] = b;
    }
    else {
        i--;
        continue;
    }
  }
}
function chooseOptExpenses() {
    for (let i = 0; i<3; i++) {
let a = prompt("Please input name of optional expense (1 item) this month (50 symbols max)", ''),
    b = prompt("How much it will cost you?", '');
    if ( typeof(a) === "string" && typeof(a) != null 
         && a !='' && b !='' && a.length < 50 && typeof(b) != null && isNaN(b) != true) {
             b=+b;
        console.log("expense recorded to " + a + " and it is " + b + " and it is " + (i+1) + " of 3 total");
        console.log(typeof(b));
        appData.optionalExpenses[a] = b;
    }
    else {
        i--;
        continue;
    }
  }


}
chooseExpenses();
chooseOptExpenses();

console.log(appData.expenses);
function detectDayBudget() {
appData.moneyperday = +((appData.budget / 30).toFixed(1));
alert('Your daily budget for this month is ' + appData.moneyperday);
console.log('type of: ' + typeof(appData.moneyperday));
}

function detectLevel() {
if (appData.moneyperday < 100) {
    appData.level = "low paycheck";
    console.log('low paycheck');

} else if (appData.moneyperday > 100 && appData.moneyperday < 2000) {
    appData.level = "decent paycheck";
    console.log('decent paycheck');
    
} else if (appData.moneyperday > 2000) {
    appData.level = "big paycheck";
    console.log('big paycheck');
}
  else {
      appData.level = "error";
      console.log('Error >.<');
}
console.log(appData);
}
detectDayBudget();
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Input the amount of the deposit", '');
        let percent = +prompt("Please input interest rate", '');

        appData.monthIncome = (save/100/12*percent);
        alert("The deposit will bring you " + appData.monthIncome + " per month");
    }
}
checkSavings();
}