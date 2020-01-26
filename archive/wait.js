function first(){
// doing stuff
    setTimeout( function(){ 
    console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS (lang, callback) {
    console.log("I'm learning " + lang);
    callback();

}

function done() {
    console.log("3rd lesson passed");
}

learnJS("JavaScript", done);

// let y = 1; 
// let x = y = 2; 
// console.log("345"[1]); 