function MoonScript(){
'use strict';

let money = prompt ('What is your budget for this month?', ''),
    date  = prompt ('Please input date in format YYYY-MM-DD', '');

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
    savings : false
};
// console.log('budget ', appData.budget);
let a1 = prompt("Please input name of obligatory expense (1 item) this month", ''),
	a2 = prompt("How much it will cost you?", ''),
	a3 = prompt("Please input name of obligatory expense (1 item) this month", ''),
	a4 = prompt("How much it will cost you?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert('Your daily budget for this month is ' + appData.budget / 30);

console.log(appData.expenses.a1);

console.log('информация');
}