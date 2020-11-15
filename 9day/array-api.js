// Q1. make a string out of an array
// 주어진 배열을 string으로 변환
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits);
}

{
    const fruits = ['apple', 'banana', 'orange']; //배열
    const result = fruits.join(); //default 구분자 ,
    console.log(result);
    const result1 = fruits.join('|'); //구분자|
    console.log(result1);
}

// Q2. make an array out of a string
// 주어진 string을 array로 변환
{
    const fruits = '🍎 , 🥝 , 🍌, 🍊';
    console.log(fruits);
}

{
    const fruits = '🍎 , 🥝 , 🍌, 🍊'; //string
    const result = fruits.split(',',2); //limit은 선택. 2개만 전달 받는다
    console.log(result);
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
}

{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); //배열 자체를 변환시킨다
}


// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    console.log(array);
    array.splice(0, 2);
    console.log(array);
}

{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2); //splice사용
    console.log(result); //삭제된 것
    console.log(array); //배열 자체를 변환 -> 새로운 배열을 만들기는 실패
}

{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); //slice는 배열에서 원하는 부분만 return
    console.log(result); 
    console.log(array); //여전히 동일
}

//
class Student {
    constructor(name, age, enrolled, score) {
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

// Q5. find a student with the score 90
{
    const result = students.find(function (student) { //첫번째 값 return
        return student.score === 90; //true
    });
    console.log(result);
}

{
    const result = students.find((student) => student.score === 90); //arrow function
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter(function (student) {
        return student.enrolled;
    });
    console.log(result);
}

{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map(function (student) {
        return student.score;
    });
    console.log(result);
}

{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some(function (student){ //한 개라도 해당되면 true반환
        return student.score<50;
    });
    console.log(result); //true
}

{
    const result2 = students.every(function (student){ //모든 것이 해당되야 true반환
        return student.score<50;
    });
    console.log(result2); //false
}

{
    const result2 = !students.every(function (student){ //!는 반대로 값
        return student.score<50;
    });
    console.log(result2); //true
}

// Q9. compute students' average score
{
    const result = students.reduce(function (prev, curr){
        // console.log('----------');
        // console.log(prev);
        // console.log(curr);
        return prev + curr.score;
    },0); //0부터 시작
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(function(student) {
        return student.score;
    });
    const result2 = result.join();
    console.log(result2);
}

{
    const result = students.map((student) => student.score).join();
    console.log(result);
}

// 점수가 50점인 학생 출력
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >=50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
        .map((student) => student.score)
        .sort((a, b) => a - b) //낮은 점수가 먼저
        //.sort((a, b) => b - a) //높은 점수가 먼저
        .join();
    console.log(result);
}
