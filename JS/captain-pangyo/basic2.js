/*
< 함수 호이스팅 >
*/
//add(2, 3); // add is not a function
var add = function (a, b){
    return a + b;
};
add(4, 5);

// 위 코드를 실행할 때 자바스크립트 엔진 관점에서 
//호이스팅을 적용하여 코드 순서를 변경해보면 아래처럼 된다
var add;
add(2, 3);
add = function(a, b){
    return a + b;
};
add(4, 5);



/*
< 함수의 length 속성 >
*/
function fun1(a) { return a; }
function fun2(a, b) { return a + b; }
function fun3(a, b, c) { return a + b + c; }

console.log(fun1.length); //1
console.log(fun2.length); //2
console.log(fun3.length); //3



/*
< 내부 함수 >
함수 내부에 정의한 함수
*/
function parent(){
    var a = 10;
    var b = 20;

    function child(){
        var b  = 30;
        console.log(a);
        console.log(b);
    }
    child();
}

parent(); //10, 30
//child(); // child is not defined



/*
< 생성자 함수 >
일반 객체 선언과 다르게 여러 개의 객체를 찍어낼 수 있는 함수
함수명 맨 앞 글자는 대문자
호출시에 new사용
*/
function Developer(name, stack, city){
    this.name = name;
    this.stack = stack;
    this.city = city;
}
var dev = new Developer('caption', 'web', 'pangyo');
var devops = new Developer('hulk', 'devops', 'seoul');
console.log(dev); // Developer { name: "caption", stack: "web", city:"pangyo"}
console.log(devops); // Developer {name: "hulk", stack: "devops", city: "seoul" }
// dev객체와 devops객체의 constructor(생성자)는 Developer



/*
< instaceof를 활용한 생성자 함수 구분법 >
자바스크립트는 생성자 함수 형식이 별도로 없기 때문에
기존 함수에 new만 붙여주면 생성자 함수 생성이 가능
따라서, 생성자 함수가 아닌데 new를 붙이는 경우를 대비해서 아래와 같은 기법 적용 가능
대부분의 오픈소스 라이브러리에서 사용하는 패턴
*/
function Func(arg){
    // instaceof로 생성자 함수임을 확인
    if(!(this instanceof arguments.callee)) // 'tihs instaceof 함수명'도 가능
        return new Func(arg);
    this.value = arg || 0;
}
var a = new Func(100);
var b = Func(200);
console.log(a.value);//100
console.log(b.value);//200


/*
< Prototype & constructor >
*/
function func(){
    return true;
}
console.log(func.prototype); // {}
console.log(func.prototype.constructor); // [Function: func]

/*
< 프로토타입 체이닝 >
해당 함수에 존재하지 않는 속성, 메서드를
부모 객체(프로토타입 객체)에서 찾음
*/
var obj = {
    name : 'captain',
    printName: function(){
        console.log(this.name);
    }
}
obj.printName(); // 'captain'
console.log(obj.hasOwnProperty('name')); //true
console.log(obj.hasOwnProperty('city')); //false
// hasOwnProperty() 메서드는 obj에 선언되지 않았는데 사용가능한 이유?
// obj의 프로토타입 객체가 Object이고, Object에 내장된 메서드가 hasOwnProperty() 이기 때문에
// obj에서 프로토타입 객체의 hasOwnProperty() 호출 가능
// *** 자바스크립트 모든 객체의 최상위 부모 객체는 Object ***



/*
< Object, String, Number 프로토타입 객체 메서도 재정의 >
자바스크립트에서 기본 제공하는 Object, String, Number등의 표준 객체에
사용자가 원하는 기능을 재정의하여 사용할 수 있다
*/
String.prototype.printText = function(text){
    console.log("Print this text out " + text );
};
var name = "caption";
name.printText('pangyo'); // 'Print this text out pangyo'



/*
< 즉시 실행 함수 >
함수를 정의함과 동시에 바로 실행하는 함수
함수를 다시 호출할 수 X
최초 한 번의 실행만 요구되는 초기화 코드에 적합
*/
(function (name) {
    console.log('This is the immediate function: ' + name);
})('foo');



/*
< 클로져 >
실행이 끝난 함수의 스코프를 참조할 수 있는 함수
*/
function parent(){
    var a = 'Parent is done';
    function child(){
        console.log(a);
    }
    return child;
}
var closure = parent();
closure(); // 'Parent is done'
// 내부함수의 정의대로라면 child()는 외부에서 접근 불가능하다
// But, return 값에 child를 넘김으로서 외부에서도 child를 호출 할 수 있게 된다
// 따라서, child()에서 parent의 값을 참고하고 있다면, child()를 밖에서 호출함으로써 
//parent() 변수에 접근이 가능하게 된다 = 클로져



/*
map() 구현
*/
//definition
Array.prototype.myMap = function(callback){
    arr = [];
    for( var i = 0; i < this.length ; i++)
        arr.push(callback(this[i], i, this));
    return arr;
}

//tests
var arrs = ['dic tanin', 'boo radley', 'hans gruber'];
var numbers2 = [1,4,9];

var goodT = arrs.myMap(function(n){
    return n;
});

var squareRoot = numbers2.myMap(function(num){
    return Math.sqrt(num);
});

console.log(goodT); // ['dic tanin', 'boo radley', 'hans gruber']
console.log(squareRoot); // [1, 2, 3]

