'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 선언들이 자동적으로 제일 위로 올라가는 것
console.log('1');

setTimeout(function() { //비동기
    console.log('2');
}, 1000)
// 간단하게 작성하기
setTimeout(() => console.log('2'), 1000);

console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(function() {
    console.log('hello');
})
// 간단하게 작성하기
printImmediately(() => console.log('hello'));

// 함수 선언 -> console.log출력(1, 3) -> hello -> 2

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(function () { //비동기
    console.log('async callback');
}, 2000);

// Callback Hell example
class UserStorage { //class
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'lucy' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError ) {
        setTimeout(() => {
            if (user === 'lucy') {
                onSuccess({name: 'lucy', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

console.clear();
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }
);