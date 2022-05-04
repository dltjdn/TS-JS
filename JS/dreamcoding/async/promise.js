// Promise : JavaScript object for asynchronous operation
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, ""the executor runs automatically"""
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
});


// 2. Consumer : 
// - then(성공시, return Promise)
// - catch(실패시)
// - finally(성공,실패에 상관없이 모두 실행)
promise
    .then(value => {
    console.log(value) 
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });



// 3. Promise chaining
const fetchNumer = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumer
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num-1), 1000);
        });
    })
    .then(num => console.log(num)); // 2초후 5출력



// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('A'), 1000);
    });


const getEgg = hen => 
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => B`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => B`)), 1000);
    });


const cook = egg => 
    new Promise((resolve,reject) => {
        setTimeout(() => resolve(`${egg} => C`), 1000);
    });


getHen()
    .then(hen => getEgg(hen))
    .catch(error => {
        return 'X';
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal)); // X => C 출력


// 위와 의미 같은 코드
// getHen()
//     .then(getEgg)
//     .catch(error => {
//     return 'X';
//     })
//     .then(cook)
//     .then(console.log);

