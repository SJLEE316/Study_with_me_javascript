'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); //""로 나타냄. 배열처럼 보인다
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(), //Date object
    jump : () => {
        console.log(`${this.name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json); //jump함수는 제외 <- object에 있는 데이터가 아니기 때문이지!

json = JSON.stringify(rabbit, ["name"]); //property를 array로 표현하면 그 propertyㅁ나 출력
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { //json = JSON.stringify(rabbit, function (key, value) { 의 생략버전
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);

console.log("------------------")

json = JSON.stringify(rabbit, (key, value) => { //json = JSON.stringify(rabbit, function (key, value) { 의 생략버전
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'lucy' : value; //key가 name이면 lucy로 바꾸고 아니면 value값 출력!
});
console.log(json); //lucy로 바뀐다

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); 
// 오류이다. rabbit이라는 object를 JSON으로 바꿀 때는 jump라는 함수는 포함이 안되어 있다. JSON을 obj라는 object로 바꿀 때 jump는 없으므로 obj.jump()는 당연히 오류!

console.log(rabbit.birthDate.getDate); //birthDate라는 object
// console.log(obj.birthDate.getDate()); birthDate는 string

const obj2 = JSON.parse(json, (key, value) => { //callback function
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj2.birthDate.getDate());