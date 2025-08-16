// 1. Select a paragraph with id "message" and change its text to "Welcome!".

var message = document.querySelector("#message");
message.innerHTML = "After Change";





// 2. Get the value from an input with id "nameInput" and display it inside a div with id
// "result".

var input = document.querySelector("#nameInput");
var result = document.querySelector("#result");
input.addEventListener("input", function () {
  result.innerHTML = input.value;
});





// 3. When a button is clicked, change the background color of a section with id
// "container" to light blue.

var cantainer = document.querySelector("#cantainer");
function changecolor() {
  cantainer.style.backgroundColor = "lightblue";
}





// 4. Select a heading (h1) with id "mainTitle" and change its color to red.

var title = document.getElementById("mainTitle");
title.style.color = "red";





// 5. Get the number from an input with id "num1" and show it inside a paragraph with id
// "output".

var num1 = document.querySelector("#num1");
var r = document.querySelector("#output");
function output() {
  r.innerHTML = num1.value;
}





// 6. Select a button with class "submit-btn" and log "Button Clicked" to the console
// when it's clicked.

function click1() {
    console.log("Button Clicked");
}





// 7. Get values from two inputs with ids "first" and "second", add them (as numbers),
// and show the result in a span with id "sum".

function add(){
    var n1 = document.querySelector('#first')
    var n2 = document.querySelector('#second')
    var n3 = document.querySelector('#sumofthem')
    n1 = parseInt(n1.value)
    n2 = parseInt(n2.value)
    n3.innerHTML = n1+n2
}


// 8. Change the text of a paragraph with class "description" to "Updated
// successfully".

var des = document.querySelector('#des')
des.innerHTML = 'Updated Successfully'




// 9. Select a div with id "box" and set its width to 200px and background color to green.

var box = document.querySelector('#box')
box.style.width = '200px'
box.style.backgroundColor = 'green'




// 10. Get the email entered in an input with id "email" and print it in the console.

var email = document.querySelector('#email')
function printonconsole(){
    console.log(email.value)
}










// 11. Select a paragraph and update its font size to 24px.

var p1 = document.querySelector('#p')
p1.style.fontSize = '24px'




// 12. On button click, get a name from input "fullName" and set the text "Hello,
// [name]" inside a div "greeting".

var  greeting = document.querySelector('#greeting')
function clickme(){
    let x = prompt("Enter Your Full Name:")
    greeting.innerHTML = `Hello ${x}`
    
}



// 13. Select an image with id "profilePic" and change its src to another image URL.
var img = document.querySelector('#profilePic')
function changeprofile(){
    img.src = 'https://scontent.fuet1-1.fna.fbcdn.net/v/t39.30808-6/476762370_1339229327099806_7784388897008284433_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=D2koWuC_534Q7kNvwGnuMGU&_nc_oc=Adn3wfL66neYOdzffvgsa6tBJlntpTD2cfw34suPXhWXG41YBf0b-ElhG7WmfUX8XOg&_nc_zt=23&_nc_ht=scontent.fuet1-1.fna&_nc_gid=ZFcMbHVlMdu-_7nLndGUag&oh=00_AfWeeQSYdBMnDeo3O8Qf9bPYEfQievvM2aQk563aKE24Og&oe=68A5E76C'
}





// 14. Change the text color of all elements with class "highlight" to orange. (Hint: You’ll
// need querySelectorAll for multiple)

var highlight = document.querySelectorAll('.highlight').forEach((el, index) => {
    if (index % 2 === 0) {
        el.style.backgroundColor = 'red';
}
    else{
    el.style.backgroundColor = 'green';

    }
});



// 15. Select a checkbox with id "agree" and check whether it is checked or not, then display




// "Agreed" or "Not Agreed" in a paragraph.
// 16. Get the selected value from a dropdown (select element) with id "options" and display
// it in "selectedValue" span.
// 17. When a button is clicked, show the current date and time inside a paragraph with id
// "dateTime".
// 18. Select a paragraph with id "togglePara" and hide it (set display: none).
// 19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18,
// else "Not Eligible" in a span.
// 20. When a button is clicked, clear the value of an input with id "searchBox".

//21. check number is prime or not
// 03353113644

var prim = document.querySelector('#prim')
var primediv = document.querySelector('#primediv')
function primecheck(){
    let y = parseInt(prim.value);
    if (y < 2) {
        primediv.innerHTML = "Not Prime";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(y); i++) {
        if (y % i === 0) {
            isPrime = false;
            break;
        }
    }
    primediv.innerHTML = isPrime ? "Prime" : "Not Prime";
}