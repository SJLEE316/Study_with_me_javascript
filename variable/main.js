// number, string, boolean,, null, undefined

let age = 2;
let num = '2';
let number = num;
console.log(number);
console.log(num);

// object
let obj = {
  name : 'lucy',
  age : 5,
};

console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log(obj2.name);

let a = 2;
a = 5;

const b = 2;
b = 4; //변경 불가능

const obj3 = {
  name : 'lucy',
  age : 5,
}; //reference는 변경 불가능하지만 object 내용은 가능하다.

obj3.name = 'james'; //변경 가능하다.
