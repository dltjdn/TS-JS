// Function
// - 프로그램을 구성하는 가장 기본적인 building block
// - subprogram이라고도 불리며 여러번 재사용 가능
// - 한가지 task나 어떤 값을 계산하기 위해 사용 


/*

< 1. Function declaration >
- function name(param1, param2) { body... return;}
- one function === one thing
- naming : doSomethingm command, verb
- e.g. createCardAndPoint -> CreateCarad, CreatePoint
- function is object in JS  

*/
function printHello(){
    console.log('Hello');
}
printHello(); //'Hello'

function log(message){
    console.log(message);
}
log('hi'); // 'hi'
log(1234); // 1234



/*

< 2. Parameters >
- premitive parameters: passed by value
- object parameters: passed by reference

*/
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie); // {name : 'coder'}



/*

< 3. Default parameters (added in ES6) >

*/
function showMessage(message, from = 'unknown'){
   console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // Hi! by unknown



/*

< 4. Rest parameters (added in ES6 ) >

*/
function printAll(...args){ //... -> 배열형태로 전달
    // for(let i = 0; i < args.length; i++){
    //     console.log(args[i]);
    // }

    // for ( const arg of args ){
    //     console.log(arg);
    // }

    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');



/*

< 5. Local scope >
중첩된 함수에서 자식의 함수가 부모함수에 
정의된 변수에 접근 가능 -> 클로져

*/
let globalMessage = 'global'; // global variable
function printMessage(){
    let message='hello'; // local variable
    console.log(message); 
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); 오류
}
printMessage(); 
//console.log(message); 오류



/*

< 6. Early return, early exit >

*/
//bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logig...
}



// First-class function
// - function are treated like any other variable
// - can be assigned as a value to variable
// - can be passed as an argument to other function
// - can be returned by another function 
//-> 이것이 가능하게 하는게 function expression


/*

< 7. Function expression >
- a function declaration 
  -> can be called earlier than it is defined ( hoisted )
- a function expression
  -> is created when excution reaches it

*/
//print(); 함수 선언되기 전 호출 -> 오류 
const print = function(){ //anonymous function
    console.log('print');
}
print(); // print
const printAgain = print;
printAgain(); //print



/*

< 8. Callback function using function expression > 

*/
function randomQuiz(answer, printYes, printNo){
    if(answer == 'love you'){
        printYes();
    } else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('Yes');
}

// named function
// - better debugging in debugger's stack traces
// - recursions (재귀호출)
const printNo = function print(){
    console.log('No');
    //print();
}

randomQuiz('wrong',printYes, printNo); // No
randomQuiz('love you', printYes, printNo); // Yes



/*

< 9. Arrow function >
always anonymous

*/
const simplePrint = function(){
    console.log('simplePart!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a,b) => a+b;
const simpleMultiply = (a,b) => {
    //don something more
    return a+b; // block쓰면 return키워드 써야함
}


/*

< 10. IFEE : Immediately invoked Function Expression

*/
(function hello(){
    console.log('IIFE')
})();
