// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals : 1 + 2 = ${1 + 2}`); //``(back key)

console.log("lucy's book");
console.log('lucy\'s book');
console.log("lucy's \nbook"); //줄바꿈
console.log("lucy's \tbook"); //tab key

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiplay
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //counter에 1을 먼저 증가 -> preIncrement에 할당
//위의 코드와 같은 코드
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++; //preIncrement에 할당 -> counter을 1 증가
//위의 코드와 같은 코드
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less thatn or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false; //false
const value2 = 4 < 2; //false
const value3 = true; //true

// || (or)
console.log(`or: ${value1 || value2 || check()}`); 
//세 개 중에 하나라도 true이면 true가 되는 연산자
//앞에서부터 하나라도 true이면 멈춘다
//따라서 check()같은 복잡한 연산은 뒤에 둔다

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('Nope');
    }
    return true; //결국에는 true를 return하는 함수
}

console.log(`or: ${value3 || value2 || check()}`); 
//value3가 true이기 때문에 뒤에 계산하지 않는다

// && (and)
console.log(`and: ${value1 && value2 && check()}`);
///3개 모두 true가 되어야 한다
//하나라도 false면 뒤에가 실행되지 않는다. 무조건 false니까!
//heavy operator은 뒤에 넣는다

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('Nope');
    }
    return true; //결국에는 true를 return하는 함수
}

//often used to compress long if-statement
//nullableObject && nullableObject.something
//코드로 바꾸면
// if (nullableObject != null) {
//     nullableObject.something;
// }

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
const lucy1 = { name: 'lucy'}; //ref1
const lucy2 = { name: 'lucy'}; //ref2
const lucy3 = lucy1; //ref1
console.log(lucy1 == lucy2); //다른 ref -> false
console.log(lucy1 === lucy2); //다른 ref -> false
console.log(lucy1 === lucy3); //같은 ref -> true

// equality = puzzler
console.log(0 == false); //true
console.log(0 === false); //false, 0 is not a boolean type 
console.log('' == false); //true
console.log('' === false); //false, '' is not a boolean type
console.log(null == undefined); //true
console.log(null === undefined); //false, null and undefined are different types

// 8. Conditional operators: if
// if, else if, else
const name = 'lucy';
if (name === 'lucy') {
    console.log('Welcome, Lucy');
} else if (name = 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Tenary operator: ?
// condition ? value1 : value2;
console.log(name === 'lucy' ? 'yes' : 'no');
//간단할 때만 사용

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE': //no semi-colon
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i-2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// 01. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++ ) {
    if (i % 2 === 0) {
        console.log(`even number: ${i}`);
    } else {
        continue;
    }

}

//another solution
for (let i = 0; i < 11; i++ ) {
    if (i % 2 !== 0) {
        continue;
    } else {
        console.log(`even number: ${i}`);
    }

}

//another solution
for (let i = 0; i < 11; i++ ) {
    if (i % 2 === 0) {
        console.log(`even number: ${i}`);
    }
}

// 02. iterte from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i < 9) {
        console.log(`number: ${i}`);
    } else {
        break;
    }
}

//another solution
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    } else {
        console.log(`number: ${i}`);
    }
}