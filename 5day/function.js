// Function

// 1. Function declaration
function printHello() {
    console.log('Hello');
}
printHello(); //함수호출

function  log(message) {
    console.log(message);
}
log('Hello@')
log(1234);

// 2. Parameters
function changeName(obj) {
    obj.name = 'coder';
}
const lucy = { name: 'lucy'};
changeName(lucy);
console.log(lucy);

// 3. Default parameters (added in ES6)
function showMessage(message, from) { //undefined으로 출력
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); 

function showMessage2(message, from = 'unknown') { //원하는 default값 지정
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i=0; i<args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'lucy');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message); //밖에서는 안을 볼 수 있다
        let childMessage = 'hello';
    }
}
printMessage();

// 6. Return a value
sum(2, 3); //hoisted 가능
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.poing > 10) {
        //log upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.poing <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function

// 1. Function expression
// print(); //no hoisted
const print = function () { //anonymous function
    console.log('print');
};
print();

const print2 = function print () { //named function
    console.log('print');
};
print2();

const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes()
    } else {
        printNo();
    }  
} 

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() { 
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => console.log(a + b);

simplePrint();
add(2, 3);

const simpleMultiply = (a, b) => {
    //do something more
    return (a * b);
}

// IIFE: Immediately Invoked Function Expression
function hello() {
    console.log('IIFE');
}
hello();
// 같은 코드
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculation(command, a, b)
// command: add, substract, divide, multiply, remainder

//My solution
function calculation(command, a, b) {
    switch(command) {
        case 'add':
            console.log(a + b);
            break;
        case 'substract':
            console.log(a - b);
            break;
        case 'multiply':
            console.log(a * b);
            break;
        case 'divide':
            console.log(a / b);
            break;
        case 'remainder':
            console.log(a % b);
            break;
    }
}

calculation('remainder',6,4);

//Ellie solution
function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));