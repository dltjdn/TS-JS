// Objects
// a collection of related data and/or functionality
// Nearly all objects in JavaScipt are instances of Object
// object = { key: value };


/*

< 1. Literals and properties >

*/
const obj1 = {}; // 방법1 : 'object literal' syntax
const obj2 = new Object(); // 방법2: 'object constructor' syntax

function printPerson(person){
    console.log(person.name); 
    console.log(person.age); 
}

const ellie = { name: 'ellie', age: 4 };
printPerson(ellie); // ellie 4

// bad
ellie.hasJob = true;
console.log(ellie.hasJob); //true

// bad
delete ellie.hasJob;
console.log(ellie.hasJob); //undefined



/*

< 2. Computed properties >
- key should be always string
- 그냥 코딩할때는 .쓰고
- computed properties는 어떤 키를 쓸지 runtime에서 결정될때 쓰임

*/
console.log(ellie.name); // ellie
console.log(ellie['name']); // ellie
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

function printValue(obj, key){
    console.log(obj[key]); // obj.key 는 오류
}
printValue(ellie, 'name'); // ellie
printValue(ellie, 'age'); // 4



/*

< 3. Property value shorthand >

*/
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'bave', age: 4};
//const person4 = makePerson('ellie', 30);
const person4 = new Person('ellie', 30);

console.log(person4); // Person { name: 'ellie', age: 30 }

// function makePerson(name, person){
//     return{
//         name,
//         age,
//     };
// }



/*

< 4. Constructor function >
- JS에 클래스가 없었을 때 많이 사용

*/
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}



/*

< 5. in operator: property existence check ( key in obj ) >

*/
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); //false
console.log( ellie.random ); // undefined



/*

< 6. for..in vs for..of >

*/
// for ( key in obj )
for(key in ellie){
    console.log(key); // name age hasJob
}

// for ( value of iterable )
const array = [1,2,3,4];
for(value of array){
    console.log(value); // 1 2 3 4 
}



/*

< 7. Fun cloning >
- Object.assign(dest, [obj1, obj2, obj3...])

*/
// 주소 복사
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // {name: 'coder', age:'20'}
user2.name= 'ellie';

// old way 값 복사
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.log(user3); // {name: 'ellie', age: '20'}

// new way 값 복사
const user4 = Object.assign({},user);
console.log(user4); // {name: 'ellie', age: '20'}

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({},  fruit1, fruit2); // 뒤에 나오는 것에 앞과 동일한 property 있다면 값 덮어씀 
console.log(mixed.color); // blue 
console.log(mixed.size); // big