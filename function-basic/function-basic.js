// 함수 선언
// 함수 호출

function doSomething() {
    console.log('hello');
}

doSomething();

// 값을 리턴하는 함수
function add(a, b) {
    const sum = a + b;
    return sum;
}

const result = add(2, 3);
console.log(result);

// 함수를 인자로 전달
function doSomething2(add) {
    console.log(add);
    const result = add(2, 3); //그리고 함수 호출
    console.log(result);
}

function doSomething3(add) {
    console.log(add);
}

doSomething2(add); //함수를 전달할 때는 함수 이름만 전달
doSomething3(add(2,3)); //함수 바로 호출

// 함수를 변수에 할당
const addFun = add;
console.log(add);
addFun(1, 2);