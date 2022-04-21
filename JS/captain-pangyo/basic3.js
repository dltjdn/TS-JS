/*
< 실행 컨텍스트를 이해하기 위한 자바스크립트 동작과정 >
1. 변수, 함수 선언, arguments를 가진 활성 객체(Variable Object) 생성
2. Scope Chain 생성 및 초기화 ( 변수 값에 undefined 할당 )
3. this 바인딩
4. 코드 해석 및 실행 ( 변수 값 할당 : 변수에 실제 값 할당 )
*/


/*
< 변수 초기화 과정 >
1. 변수 선언 - 변수를 활성 객체에 할당
2. 변수 초기화 - 변수 값에 undefined 할당
3. 변수 실제 값 할당 - 변수에 실제 값을 할당
*/


// /*
// < 실행 컨텍스트를 이해하기 위한 문제 >
// */
// console.log("1");
// function exec(){
//     setTimeout(function(){
//         console.log("2");
//     }, 3000);
//     setTimeout(function(){
//         console.log("3");
//     }, 0);
//     console.log("4");
//     setTimeout(function(){
//         console.log("5");
//     }, 1000);
// }
// console.log(exec()); // 1 4 3 5 2 순으로 출력
// // setTimeout이 지연시간 0 일지라도 실행 컨텍스트가 다르기 때문에 1, 4 가 먼저 출력

// var i;
// for(i=0 ; i<5 ; i++){
//     setTimeout(function(){
//         console.log(i); // 5, 5, 5, 5, 5
//     },1000);
// }
// // 이 코드가 실행되는 메인 컨텍스트와 setTimeout이 실행되는 컨텍스트가 다르기 때문에
// // for문의 실행이 모두 끝난 후에 setTimeout의 콜백 함수가 실행되기 때문에 숫자 5가 다섯 번 출력된다



// /*
// < arguments 객체 >
// 함수 호출시에 넘겨진 실제 인자 값을 가진 배열
// */
// function add(a,b){
//     console.dir(arguments);
// }
// console.log(add(1)); // Arguments(1), 0: 1
// console.log(add(1, 2)); // Arguments(2), 0: 1, 1: 2
// console.log(add(1, 2, 3)); // Arguments(3), 0: 1, 1: 2, 2: 3

// // arguments는 메서드에 넘겨 받을 인자의 개수 모를 때 유용
// function sum(){
//     for(var i = 0, result=0 ; i<arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }
// console.log(sum(1,2,3)); //6
// console.log(sum(1,2,3,4,5,6)); // 21
// // arguments는 length속성과 arguments[i]와 같은 index를 지니지만 배열은 X
// // 이러한 객체를 배열과 비슷한 객체(array-like object)라고 한다



/*
< apply() VS call() >
arguments에 apply(), call()을 이용하여 실제 배열 메서드를 사용 가능
*/

// apply() 적용 전
function sum(){
    console.log("arguments length: " + arguments.length);
    //arguments.push(100); // Uncaught TypeError: arguments.push is not a function
    console.dir(arguments); // Arguments(3)
}
sum(1,2,3);

// apply() 적용 후
function sum2(){
    var args1 = Array.apply(arguments);
    args1.push(100); // 0: 100
    console.dir(args1); // Array(1)

    var args2 = Array.prototype.slice.apply(arguments);
    args2.push(100); // 3: 100
    console.dir(args2); // Array(4)
}
sum2(1,2,3);
// apply(), call() 메서드는 결국 .apply()를 호출하는 실행하는 것
// 호출하는 함수의 인자 값에 apply()로 넘긴 인자 배열을 넣어서
// 마지막 실행  결과만 대상에 연결한다

function user(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
}

//오류남! window 선언 안돼있다
//user.apply(Window, ['pangyo', 'captain']); // 함수명.apply(대상, 인자 배열);
// user.call(window, 'john', 'Doe'); 와 같음

//console.log(Window.firstName); //'pangyo'
//console.log(Window.lastName); // 'captain'



/*
< this 바인딩 >
*/

// 일반적으로 함수 내부에서 this를 사용하면 전역 스코프(window)에 접근한다
// 함수 선언식
var text = 'global';
function binding(){
    var text = 'local';
    console.log(this.text); // 'global' ?? undefined 나옴 
}
binding();

// 함수 표현식
var text2 = 'global';
var binding2 = function(){
    var text2 = 'local';
    console.log(this.text2); // 'global' ?? undefined 나옴
}
binding2();

// 객체의 속성에서 함수를 선언하고 this를 사용하면 해당 객체를 접근
var text3 = 'global';
var binding3 = {
    text3: 'local',
    printText: function(){
        console.log(this.text3); // 'local'
    }
}
binding3.printText();

// 함수의 내부함수에서 this를 사용하면 전역 객체(window)에 접근
var text4 = 'global';
var binding4 = {
    text4: 'local',
    printText: function(){
        console.log(this.text4); // 'local'
        var innerFunc = function(){
            console.log(this.text4); //'global' ?? undefined 나옴
        };
        innerFunc();
    }
}
binding4.printText();



/*
< 스코프 체인 >
*/
// 전역 스코프 vs 함수 스코프
var a = 1;
var b = 2;
function func5(){
    var a = 10;
    var b = 20;
   
    console.log(a); //10
    console.log(b); //20
}
func5();
console.log(a); //1
console.log(b); //2

// 내부함수 innerfunc에서 외부함수인 func의 변수에 접근
var a = 1;
function func6(){
    var a = 2;
    function innerfunc(){
        return a;
    }
    console.log(innerfunc()); //2
}
func6();

// fuc1의 실행 컨텍스트는 전역
var a = 1;
function func1(){
    return a;
}
function func2(func1){
    var a = 2;
    console.log(func1()); // 1
}
func2(func1); 



/*
< 클로져 >
스코프 체이닝 : 외부 함수의 실행이 종료되어 컨텍스트가 반환되더라도
내부 함수로 종료된 외부 함수의 스코프(변수)에 접근 가능한 기법

이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수
*/
function func(){
    var a = 1;
    var c1 = function(){
        console.log(a);
    };
    return c1
}
var result = func(); 
result(); //1


function completeSentence(name){
    var str = [
        'hello',
        '',
        'world'
    ];
    return function(){
        str[1] = name;
        return str.join('');
    };
}
var result = completeSentence('js');
console.log(result()); // hellojsworld