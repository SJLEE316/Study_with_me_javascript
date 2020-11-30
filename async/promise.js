'use strict';

// Promise is a JavaScript object for asynchronous operations.
// state : pending -> fulfiled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => { //Promise는 class라서 new를 사용해서 object생성 가능
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('lucy'); 성공
        reject(new Error('no network'));  //실패, 실패이유
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then(value => {   //callback함수의 값. 성공하였을 경우
        console.log(value);
    })
    .catch(error => {  //에러가 발생하였을 때
        console.log(error);
    })
    .finally(() => {  //성공과 실패에 관계없이 무조건 반환
        console.log('finally');
    });

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num *2)
    .then(num => num*3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error (`error! ${hen} => 🥚`)), 1000);        
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🐣`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .catch(error => {
        return '🥯';  //빵으로 대체
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(meal => console.log(meal));
//간단히 쓰면
getHen()
    .then(getEgg)
    .catch(error => {
        return '🥯';  //빵으로 대체
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);  //reject

