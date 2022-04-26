// Object-oriented programming
// - class: template
// - object: instance of a class
// JavaScript classes
// - introduce in ES6
// - syntactical sugar over prototype-based inheritance



/*
< 1. Class declarations >
*/
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name); // eliie
console.log(ellie.age); // 20
ellie.speak();



/*
< 2. Getter and setters >
*/
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age; // 위와 같이 age라고 하면 에러
    }

    set age(value){
        // if(value < 0 ){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value; // 위와 같이 age라고 하면 에러 
    }

}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);



/*

< 3. Fields (public, private) >
- 최근에 추가됨
- 생성자를 쓰지 않고 필드 정의 가능
- 그냥 정의하면 public field로 외부에서 접근 가능 
- #붙이면 private field로 클래스내에서만 접근 가능

*/
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment;
console.log(experiment.publicField); // 2
console.log(experiment.privateFeild); // undefined



/*

< 4. Static properties and methods >
최근에 추가됨 

*/
class Article {
    static publisher = 'Dream Coding';
    
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // Dream coding
Article.printPublisher(); // Dream coding



/*

< 5. Inheritance > 
- a way for one class to extend another class

*/
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // 오버라이딩
    draw(){
        super.draw(); // 부모의 method 호출
        console.log('세모모양');
    }

    //오버라이딩
    getArea(){
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20,20, 'red');
triangle.draw(); // drawing red color of
                 // 세모모양
console.log(triangle.getArea()); // 200



/*

< 6. Class checking: instanceof >

*/
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true 
console.log(triangle instanceof Object); // true 
// js의 모든 object는 Object를 상속
