'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

const name = 'lucy';
const age = 4;
print(name, age);

function print(name, age) {  //귀찮아
    console.log(name);
    console.log(age);
}

function print2(person) {
    console.log(person.name);
    console.log(person.age);
}
const lucy = {name: 'lucy', age: '4'}; //object만듦. key(name, age), value(lucy, 4)
print2(lucy);

// with JavaScript magic(dynamically typed language)
// can add properties later
lucy.hasJob = true;
console.log(lucy.hasJob);

// can delete properties later
delete lucy.hasJob;
console.log(lucy.hasJob); //undefined

// 2. Computed properties 
// 계산된 properties
// key should be always string
console.log(lucy.name); //코딩하는 순간, 그 key에 해당하는 값을 불러올 때
console.log(lucy['name']); //정확하게 어떤 key가 필요한지 모를 때, runtime에서 결정될 때
lucy['hasJob'] = true; //add properties
console.log(lucy.hasJob);

function printValue(obj, key) {
    console.log(obj.key); //obj에 key라는 property없다! undefined
    console.log(obj[key]); 
    //computed property쓴다. 사용자에게 받아와야 하는 값이기 때문에 코딩하는 시점에는 정확한 value값을 보른다
}

printValue(lucy, 'name');
printValue(lucy, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('lucy', 20);

function makePerson(name, age) { //object만들었다
    return {
        name: name, //key와 value의 값이 같으면 name으로 생략 가능
        age: age, //age 가능
    }
}

// 4. Constructor Function
// 순수하게 Object를 생성하는 함수
function Person(name, age) { //Person처럼 대문자로 적는다
    // this = {}
    this.name = name;
    this.age = age;
    // return this;
}

const person5 = new Person('lucy', 12); //class에서 object만들듯이,,

// 5. in operator: property existence check (key in obj)
console.log('name' in lucy); //true
console.log('age' in lucy); //true
console.log('random' in lucy); //false ->정의하는 key가 object에 있는지 확인 가능
console.log(lucy.random) //undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear() //console창 clear
for (let key in lucy) { //'use strict'를 사용하면 let을 사용하여 key를 정의해줘야 한다
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) { //귀찮아
    console.log(array[i]);
}

for(let value of array) { //let으로 value 정의
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'lucy', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
// 수동적으로 입력
const user3 = {}; //빈 object를 만들고
for (let key in user) { 
    user3[key] = user[key]; //user3의 key에 user의 key를 할당
}
console.log(user3);

// new way
const user4 = {}; //빈 object를 만들고
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //fruit2가 fruit2를 덮어씌운다
console.log(mixed.color); //blue
console.log(mixed.size); //big
