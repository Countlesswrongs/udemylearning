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


for (let i = 0; i<2; i++) {
let a = prompt("Please input name of obligatory expense (1 item) this month (50 symbols max)", ''),
    b = prompt("How much it will cost you?", '');
    if ( typeof(a) === "string" && typeof(a) != null 
         && a !='' && b !='' && a.length < 50 && typeof(b) != null && isNaN(b) != true) {
             b=+b;
        console.log('done');
        console.log(typeof(b));
        appData.expenses[a] = b;
    }
    else {
        i--;
        continue;
    }

}

console.log(appData.expenses);
alert('Your daily budget for this month is ' + appData.budget / 30);

}