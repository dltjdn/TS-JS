// Array


/*
< 1. Declaration >
*/
const arr1 = new Array(); //방법1
const arr2 = [1,2];



/*
< 2. Index position >
*/
const fruits = ['a','b'];
console.log(fruits); // ['a' ,'b' ]
console.log(fruits.length); //2
console.log(fruits[0]); // a
console.log(fruits[1]); // b
console.log(fruits[2]); // undefined 
console.log(fruits[fruits.length - 1]); // b 배열의 마지막 데이터 찾을 때



/*
< 3. Looping over an array >
print all fruits
*/

// 1. for
for( let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}

// 2. for of
for( let fruit of fruits){
    console.log(fruit);
}

// 3. forEach
fruits.forEach((fruit) => console.log(fruit));



/*
< 4. Addition, deletion, copy >
*/

// 1. push: add an item to the end
fruits.push('c','d');
console.log(fruits); // ['a','b','c','d']

// 2. pop: remove an item from the end
fruits.pop();
console.log(fruits); // ['a','b','c']

// 3. unshift : add an item to the beginning
fruits.unshift('e','f');
console.log(fruits); // ['e','f','a','b','c']

// 4. shift: remove an item from the beginning
fruits.shift();
console.log(fruits); //['f','a','b','c']

// 주의!!! shift,unshif는 pop,push보다 매우 느림

// 5. splice: remove an item by index position
fruits.push('d','e');

fruits.splice(1,1); 
console.log(fruits); // ['f','b','c','d','e']

fruits.splice(1,1, 'x', 'y');
console.log(fruits); // ['f','x','y','c','d','e']

fruits.splice(4); 
console.log(fruits); // ['f','x','y','c']

// 6. concat: combine two arrays
const fruits2 = ['가','나'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['f','x','y','c','가','나']



/*
< 5. Searching >
find the index 
*/
console.log(fruits); // [ 'f', 'x', 'y', 'c' ]
// 1. indexOf: find the index
console.log(fruits.indexOf('x')); //1
console.log(fruits.indexOf('c')); //3
console.log(fruits.indexOf('다')); // -1

// 2. includes
console.log(fruits.includes('y')); // true
console.log(fruits.includes('d')); // false

// 3. lastIndexOf
fruits.push('x')
console.log(fruits); //  ['f','x','y','c','x']
console.log(fruits.indexOf('x')); // 1
console.log(fruits.lastIndexOf('x')); // 4