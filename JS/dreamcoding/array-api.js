/*
 01. join : make a string out of an array
*/
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result); // apple, banana, orange

    const result2 = fruits.join("|");
    console.log(result2); // apple|banana|orange
}


/* 
02. split : make an array out of a string
*/
{
    const fruits = '가, 나, 다, 라';
    const result = fruits.split(','); // 구분자는 필수!
    console.log(result); // ['가', '나', '다', '라']

    const result2 = fruits.split(',', 2);
    console.log(result2); // ['가', '나']
 
}


/*
 03. reverse : make this array look like [5, 4, 3, 2, 1]
*/
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // [5, 4, 3, 2, 1]
    console.log(array); // [5, 4, 3, 2, 1] 배열 자체도 바뀜
}


/*
04. slice : 배열에서 원하는 부분 리턴 
*/
{
    const array = [1, 2, 3, 4, 5];

    // slice
    const result = array.slice(2, 5); // slice(start,end) end는 포함안됨!
    console.log(result); // [3, 4, 5]
    console.log(array); // [1, 2, 3, 4, 5]

    // c.f) splice :  배열 자체를 수정
    const result2 = array.splice(0,2);
    console.log(result2); // [1, 2]
    console.log(array); // [3, 4, 5]
} 

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];


/*
05. find : find a studnet with the score 90
*/
{
    const result = students.find((student) => student.score === 90 )
    console.log(result); //Student { name: 'C', age: 30, enrolled: true, score: 90 }
}


/*
06. filter : make an array of enrolled students
*/
{
    const result = students.filter((student) => student.enrolled );
    console.log(result);
    // [
    //     Student { name: 'A', age: 29, enrolled: true, score: 45 },
    //     Student { name: 'C', age: 30, enrolled: true, score: 90 },
    //     Student { name: 'E', age: 18, enrolled: true, score: 88 }
    // ]
}


/*
07. map: make an array containing only the student's scores
*/
{
    const result = students.map((student) => student.score *2);
    console.log(result); // [ 90, 160, 180, 132, 176 ]
}


/*
08. some : 하나라도 만족되면 true , every: 모든 조건이 만족돼야 true 
*/
{
    const result = students.some((student) => student.score < 50);
    console.log(result); // true 

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); // true
}


/*
09. reduce : 배열 하나하나를 돌면서 값을 누적할 때 사용 
*/
{
    const result = students.reduce((prev, curr) => { // 배열 하나씩 순차적으로 curr에 전달  
        console.log('prev:',prev);
        console.log('cur:',curr);
        return prev + curr.score; // 다음 호출되는 prev로 전달
    },0);
    console.log(result) // 369
}


/*
Q1
*/
{
    const result = students
        .map((student)=>student.score)
        .filter((score) => score>=50)
        .join();
    console.log(result); // 80,90,66,88
}


/*
Q2 
*/
{
    const result = students
        .map(student => student.score)
        .sort((a,b) => a - b) //오름차순 c.f) 내림차순은 sort((a,b) => b- a)
        .join();
    console.log(result); // 45,66,80,88,90
}