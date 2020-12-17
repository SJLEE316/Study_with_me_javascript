// asyncs & await
// clear style of using promise :)

// 1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs....
        resolve('lucy');
    });
}

// async추가해서 Promise를 사용하지 않고 간단하게 사용할 수 있다

async function fetchUser() {
    return 'lucy';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

// async추가해서 간단하게 사용할 수 있다
async function pickFruits() {
    const apple = await getApple(); //1초
    const banana = await getBanana();  //1초, 총 2초가 걸린다.
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

async function pickFruits2() {
    const applePromise = getApple();  //1초
    const bananaPromise = getBanana();  //1초, 동시에 진행되어서 총 1초가 걸린다.
    const apple = await applePromise; 
    const banana = await bananaPromise;  
    return `${apple} + ${banana}`;
}

pickFruits2().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);