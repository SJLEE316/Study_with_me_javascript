'use strict';
// Object-oriendted programming
// class : template
// object : instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`); //this : 생성된 object
    }
}

const lucy = new Person('lucy', '20');
console.log(lucy.name);
console.log(lucy.age);
lucy.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //this.get은 get함수를 호출, = age는 set함수를 호출
    }

    get age() { //값을 return
        return this._age; //변수를 다른 것을 써야 한다. 보통 _사용
    }

    set age(value) { //값을 설정 -> value 필요
        //aggressive
        // if (value < 0) {
        //     throw Error('age can not be negative!');
        // }

        //gentle
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1); //실수로 -1로 설정
console.log(user1.age); //

// User에는 3개의 fields 존재(firstName, lastName, _age)

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2; //외부에서 접근 가능
    #privateField = 0; //class내에서만 접근 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher () {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
console.log(Article.publisher); // static은 class에 object를 저장
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) { //3가지 fields
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} //연장
class Triangle extends Shape {
    draw() {
        super.draw(); //부모의 method도 호출. 안쓰면 부모의 호출은 무시되고 overwriting한 호출만 반응한다
        console.log('good triangle!');
    }
    getArea() { //필요한 함수만 overwriting
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true. 우리가 만든 object는 JS의 Object를 상속한 것