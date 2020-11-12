'use strict';

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //배열의 마지막 요소

// 3. Looping over an array
// print all fruits
console.clear();
// a.for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index, array) {
    console.log('he'); //요소가 apple, banana 두 개라서 두 번 출력
    console.log(fruit);
    console.log(fruit, index);
});

// annoymous function + 코드가 한 줄이면 아래와 같이 축약가능
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🥝', '🍇', '🍉')
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍐','🍑')
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// pop, push는 뒤에서부터 넣고 빼고 넣고 빼고 -> 앞의 데이터는 건드리지 않는다
// shift : 삭제하고 한 칸씩 앞으로 당긴다
// unshift : 데이터를 한 칸씩 미루고 빈 칸에 데이터를 넣는다

// splice: remove an item by index position
fruits.splice(4); //몇 개 지울것인지 지정하지 않으면 끝까지 지운다
console.log(fruits);
fruits.splice(2, 1); //index 2부터 1개만 지운다
console.log(fruits);
fruits.splice(1, 1,'🍈','🍍'); //index 1부터 1개만 지운다 + 그 자리에 데이터 넣기
fruits.splice(1, 0,'🍈','🍍'); //index 1부터 0개만 지운다(삭제하지 않음) + 그 자리에 데이터 넣기 -> 지우지는 않고 데이터만 넣는 것도 가능!
console.log(fruits);

// combine two arrays
const fruits2 = ['🍒', '🥑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
// indexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍈')); //1번째
console.log(fruits.indexOf('🍒')); //배열에 없으면 -1번째라고 출력

// includes
console.log(fruits.includes('🍈')); //true
console.log(fruits.includes('🍒')); //false

// lastIndexOf
console.clear();
fruits.push('🍑');
console.log(fruits);
console.log(fruits.indexOf('🍑')); //두 개 이상이면 앞에 있는 index return
console.log(fruits.lastIndexOf('🍑')); //마지막에 있는 index return

// 🐰🐥🦊🐶🦁🦌🐮🐷🥕🍎🍇🍈🍉🍊🍋🍌🍍🥭🍐🍑🍒🍓🥝🍅🥥🥑🍆🥔🌽