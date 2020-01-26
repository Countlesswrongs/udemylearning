function TeachMePlease() {
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';

btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';


var coloringCount = -1, coloringStop = 3;
function f() {
    
        if ( coloringCount<circle.length ) {
            if (coloringCount == -1) { setTimeout( f, 1000); coloringCount++; }
            else {
            setTimeout( f, 3000);
        console.log('much time so slow ' + coloringCount);
        circle[coloringCount].style.backgroundColor = 'black';
        coloringCount++;
            }
        }




}
f();

// heart.forEach(function(item, i, hearts) {
// item.style.backgroundColor = 'blue';
// });
// 

let div = document.createElement('div'),
    text = document.createTextNode('Lorem ipsum lol mango wango');

div.classList.add('black');


// div.innerHTML = "<h1>Hello world!</h1>";

div.textContent = "hewwo worwd!!! *__*";

// document.body.appendChild(div);

//wrapper.appendChild(div);

document.body.insertBefore(div, circle[0]);
//document.body.removeChild(circle[1]);
document.body.replaceChild(btn[1], circle[1]);



console.log(div);



}