// async && await
// clear style of using promise

// 1. async

// Promise 사용
// function fetchUser(){
//     return new Promise((resolve,reject) => {
//         resolve('seowoo');
//     });
// }

// 함수 앞에 async 쓰면 코드블록들이 자동으로 Promise로 변환
async function fetchUser(){
    return 'seowoo';
}

const user = fetchUser();
user.then(user => console.log(user));


// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(2000);
    return '사과';
}

async function getBanana(){
    await delay(1000);
    return '바나나';
}

// calback으로 !
// function getBanana(){
//     return delay(3000)
//     .then(() => '바나나');
// }

// callback으로 !
// function pickFruits(){
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// pickFruits().then(console.log); // 사과 + 바나나


// async function pickFruits(){
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }

// await 병렬적 진행
async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs

// all : Promise 배열 전달하면 모든 Promise 병렬적으로 다 받을 때 까지 모음
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log); // 사과 + 바나나

//race : 배열에 전달된 Promise 중 가장 먼저 값을 리턴하는 것만 전달됨
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); // 바나나