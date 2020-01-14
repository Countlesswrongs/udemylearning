let num = 50;

if (num < 49) {
    console.log('wrong');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log ('yeah boiiii');
};

(num == 50) ? console.log ('yeah boiiii') : console.log('wrong');

switch (num) {
    case num < 49:
        console.log('wrong');
        break;
    case num > 100:
        console.log('too much');
        break;
    case num > 80:
        console.log('a lil bit too much');
        break;
    case 50:
        console.log('yeah boiiiiii');
        break;
    default: 
        console.log("something's wrong i can feel it");
        break;
}