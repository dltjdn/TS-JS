// JS is synchronous
// Execute the code block in order after hoisting
// hoisting : var, function declaration 

console.log('1');
setTimeout(() => console.log('2'),1000);
console.log('3');


// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'),2000);
// 1 3 'hello' 2 'async callback' 순으로 출력됨


// 콜백 지옥 예시
class UserStorage{
    loginUSer(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'seowoo' && password ==='12345')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not Found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'seowoo'){
                onSuccess({name:'seowoo', role:'admin'});
            } else{
                onError(new Error('no access'));
            }

        },1000);

    } 
}

const userStorage = new UserStorage();
const id = 'seowoo';
const password = '12345'
userStorage.loginUSer(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {console.log(error)} 
) 