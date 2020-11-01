'use strict';

// 1. Variables
// let
let globalName = 'global name'; //global scope
let name = 'lucy';
console.log(name);

{
    let age = '24';
    console.log(globalName); //global scope-블록 안에서도 가능
}
// console.log(age); 
// 블럭 안에서 정의되어서 밖에는 유효하지 않음 -> console을 해도 값이 나오지 않음

console.log(globalName); //global scope-블록 밖에서도 가능

// var -  사용하지마!!

// 2. constant
const dayInWeek = 7;
const maxNumber = 5;

// 3. Variable types
//number
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt
const bigInt = 12342222222223222222222222222222222222222222222222222222222222n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //tenplate literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log(`value:` + helloBob + `, type:` + typeof helloBob); //{}을 사용하지 않으면 이렇게 길게 써야한다.

//Boolean
const canRead = true;
const test = 3 < 1 ; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identiiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}. type: ${typeof symbol1}`); //.description을 붙여서 string으로 변환해줘야 error가 안뜬다

//object, real-life object, data structure
const lucy = {name:'lucy', age:20}; //lucy는 변경 불가능
lucy.age = 21; //변경 가능

// 4. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h출력
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+ 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //text는 더이상 'hello'가 아니다. -> error발생



