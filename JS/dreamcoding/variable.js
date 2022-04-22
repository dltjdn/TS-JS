/*
1. Variable ( - Mutable Data Type ) , rw(read/write)

let ( ES6 에 추가 )
*/

// Global scope : 어플리케이션이 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재 
//-> 최소한으로 쓰는 것이 좋음, 가능하면 class,함수,if,for 같이 필요한 부분에서만 정의해서 쓰는 것이 Good!
let globalName = 'global name';  
{
    // Block scope
    let name = 'seowoo';
    console.log(name); //seowoo
    name = 'hello';
    console.log(name); //name;
    console.log(globalName); //'global name' 

}
//console.log(name); // X
console.log(globalName); //'global name' 

// var 쓰지 말기!!!!!!
// var hoisting (어디 선언했는지 상관없이 항상 제일 위로 선언을 끌어올림)
// -> 선언도 전에 값을 할당하거나 출력 가능
// has no Block scope 
console.log(age); // undefined
age = 4;
//consolg.log(age); //4
var age;

//name=4; Error!
//let name;

{
    age = 4;
    var age;
}
console.log(age); //4



/*
2. Constant ( - Immutable Data Type ), r(read only)

웬만하면 값이 할당된 다음에 변경되지 않는 data type을 사용해라
-> 이유 : (1) security (2)thread safety (3)reduce human mistakes
*/
const daysInWeek = 7;
const maxNumber = 5;

// Immutable data types : primitive types, frozen objects
// Mutable data types : object, JS는 기본적으로 모든 object 변경 가능(mutable)



/*
3. Variable types

(1) primitive type ( single item, 더 이상 작은 단위로 나눠질 수 없는 한 가지 item )
: number, string, boolean, null, undefined, symbol
-> 값 자체가 메모리에 저장됨
(2) object type ( box container, single item 여러개 묶어서 한 박스로 관리 )
-> object를 가리키는 reference가 메모리에 저장됨

@ function ( first-class function 지원 
- function도 다른 data type 처럼 변수에 할당 가능하고 함수에 인자로 전달, return type으로 지정도 가능)
*/

// < number >
// 숫자에 관한 데이터타입이 많은(int, double...) 다른 언어들과 달리 JS는 number 하나!
const count = 17 //integer
const size = 17.1 //decimal number(소수점 숫자)
console.log(`value: ${count}, type: ${typeof count }`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - 특별한 숫자 값 : infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); // NaN

// < string >
// 한 가지 글자든 여러 글자든 모두 string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // value: hello brendan, type: string
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // value: hi brendan, type: string


// < boolean >
// false : 0, null, undefined, NaN, ' '(빈 string)
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);// value: true , type: boolean
console.log(`value: ${test}, type: ${typeof test}`);// value: false, type: boolean

// < null >
// 명확하게 텅텅 비어있는 empty 값이라고 정하는 것
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);// value: null, type: object

// < undefined >
 // 선언이 되었지만 아무것도 값이 지정되지 않은 경우 ( 텅 빈지 값이 들어가있는지 정해지지 X )
let x;
console.log(`value: ${x}, type: ${typeof x}`);// value: undefined, type: undefined

let y = undefined; 
console.log(`value: ${y}, type: ${typeof y}`);// value: undefined, type: undefined


// < symbol >
// map 같은 자료구조나 동시에 일어날 수 있는 코드에서 우선순위를 주고 싶어
// create unique identifiers for objects ( 고유한 식별자가 필요할 때 쓰임 )

// 동일한 string을 작성했어도 다른 Symbol로 만들어짐, 주어진 string에 상관없이 고유한 식별자를 만듦
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// symbol은 바로 출력하면 Error -> .description 이용해 string으로 변환해 출력해야 함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);// value: id , type: symbol

// string이 똑같을때 동일한 symbol을 만들고 싶다면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2); // true


// < object, real-life object, data structure >
const ellie = { name: 'ellie', age: 20};
ellie.age=21;
//ellie는 const로 지정돼있어 한번 할당된 obejct는 다시는 변경불가하지만, object안에 있는 변수 값은 변경 가능


/*
4. Dynamic typeing : dynamically typed language
rumtime 때 타입이 변경 -> Error가 런타임에서 발생하는 경우 많다 -> 타입스크립트 사용
*/
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);// value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);// value: 1, type: number
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);// value: 75, type: string
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);// value: 4, type: number
//console.log(text.charAt(0)); Error!