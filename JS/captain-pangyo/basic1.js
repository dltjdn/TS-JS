/*
< 자바 스크립트 타입 >

기본 타입 ( 원시 타입, Primitive Type )

1. Number - 실수, 부동소수점 64비트(double)
2. String - 문자열
3. Boolean - True, False
4. undefined - 변수에 값이 할당되지 않을 때 인터프리터가 undefined로 할당 / 값이자 타입
5. null - 개발자가 의도적으로 할당하는 값 / typeof값이 Object로 반환 
6. Symbol
*/
var nullCheck = null;
console.log(typeof nullCheck === null); // false
console.log(nullCheck === null); //true

/*
참조 타입 ( 객체 타입, Object Type )

1. Object
2. Array - 배열도 객체로 취급
3. Function - 함수도 객체로 취급

2,3은 1에 포함되는 개념
*/



/*
< NaN (Not a Number) >
수치 연산 해서 정상적인 값 얻지 못할 때 발생하는 에러
*/
console.log(1-'hello'); // NaN

var foo = {
    name: 'foo',
    major : 'cs'
};

foo['full-name'] = 'ffoo';
console.log(foo['full-name']); //'ffoo'
//console.log(foo.full-name); // NaN, 이유 : 속성 이름이 연산자 '-' 포함



/*
< delete 연산자 >
객체 속성을 삭제하는 기능
But, 객체 삭제는 불가능
*/

// 1. 객체 속성을 삭제
var foo2 = {
    name: 'foo',
    nickname: 'pangyo'
};

delete foo2.nickname;
console.log(foo2.nickname);
console.log(foo2); // {name: "foo"}

// 2. 객체 삭제 =>  변화 없음 
var foo3 = {
    name: 'foo',
    nickname: 'pangyo'
};

delete foo3;
console.log(foo3); // {name: "foo", nickname: "pangyo"}



/*
< 객체의 모든 연산은 참조 값을 처리 >
*/
var a = 10;
var b = 10;

var objA = {
    value:100
};

var objB = {
    value:100
};

var objC = objB;

console.log(a == b); //true
console.log(objA == objB); //false - objA와 objB는 참조값이 다름
console.log(objB == objC); // true - objC와 objB는 참조값이 같음



/*
< Array VS Object 구분법 >
*/
var arr = [];
var obj = {};

arr.constructor.name; // "Array"
obj.constructor.name; // "object"



/*
< 배열에서 delete VS splice >

1. delete : 해당 요소의 값만 undefined로 변경하고, 해당 요소의 index를 지우지는 X
2. splice : 해당 요소 전체를 아예 잘라내서 없앤다
*/

var arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, undefined x 1, 3]

var arr2 = [1, 2, 3];
arr2.splice(1,1);
console.log(arr2); //[1, 3]



/*
< typeof 연산자 >
*/

var num = 10;
var str = "a";
var boolean = true;
var obj = {};
var undefined; // 값이자 타입
var nullValue = null;
var arr = [];
function func() {};

console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof boolean); //boolean
console.log(typeof obj); //object
console.log(typeof undefined); //undefined
console.log(typeof nullValue); //object ( null은 object )
console.log(typeof arr); //object ( 배열도 object )
console.log(typeof func); //function 



/*
< == VS === >
1. == : 값 만 체크, 수행시에 타입이 다른 경우 타입을 일치시켜 비교함
2. === : 값과 타입 모두 체크
*/
console.log(1 == '1'); //true
console.log(1 === '1'); //false