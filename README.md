### 공식문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript

1. javascript history

2. script async vs defer
    - head+async : 다운로드가 먼저 된 것 우선으로 실행. 순서 지켜지지 않음
    - head+defer : parsing HTML하는 동안 다운로드가 다 되기때문에 script순서대로 실행 -> 가장 효율적이고 안전하다.

3. data types, let vs var, hoisting
    - Variable, rw(read/write)
        - let (added in ES6)
        - var ***(don't ever use this!)***
            - ```hoisting```(move declaration from bottom to top) : 어디에 선언했느냐에 상관없이 선언을 항상 위로 끌어올려주는 것
            - var hoisting이 발생한다
            - has no block scope

    - Constant, r(read only)
        - use const whenever possible
        - only use let if variable needs to change
        - Note!
            - Immutable data types : primitive types, frozen objects (i.e. object.freeze())
            - Mutable data types : all objects by default are mutable in JS
        - favor immutable data type always for a few reasons:
            - security
            - thread safety
            - reduce human mistakes

    - Variable types
        - primitive, single item : number, string, boolean, null, undefined, symbol object, box container
        - function, first-class function
        - ```number``` - special numberic values : infinity, -infinity, NaN
        - ```bigInt``` - fairly new, don't use it yet
        - ```string```
        - ```boolean```
            - false : 0, null, undefined, NaN, ``
            - true : any other value
        - ```null```
        - ```undefined```
        - ```symbol```
            - create unique identifiers for objects
        - ```object``` ```real-life object``` ```data structure```

    - Dynamic typing
        - dynamically typed language

4. operator, if, for loop
    - String concatenation
    - Numeric operators
    - Increment and decrement operators
    - Assignment operators
    - Comparison operators
    - Logical operators: || (or), && (and), ! (not)
        - ```often used to compress long if-statement```
        - nullableObject && nullableObject.something
    - Equality
        - == loose equality
        - === strict equality
        - object equality by reference
    - Conditional operators: if
        - if, else if, else
    - Ternary operator: ?
        - condition ? value1 : value2;
    - Switch statement
        - use for multiple if checks
        - use for enum-like value check
        - use for multiple type checks in TS
    - Loops
        - while loop, while the condition is truthy, body code is executed.
        - do while loop, body code is executed first, then check the condition.
        - for loop, for(begin; condition; step)
        - nested loops
        - break : loop를 완전히 끝내는 것
        - continue : 그 부분만 skip
        
5. Arrow Function
    #### Function
        - fundamental building block in the program
        - subprogram can be used multiple times
        - performs a task or calculates a value
    - Function declaration
        - function name(param1, param2) {body... return;}
        - one function === one thing
        - naming: doSomething, command, verb
        - e.g. createrCardAndPoint -> createCard, createPoint
        - function is object in JS
    - Parameters
        - premitive parameters: passed by value
        - object parameters: passed by reference
    - Default parameters (added in ES6)
    - Rest parameters (added in ES6
    - Local scope
        - 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
    - Return a value
    - Early return, early exit

    ```
        First-class function
            - functions are treated like any other variable
            - can be assigned as a value to variable
            - can be passed as an argument to other functions
            - can be returned by another function
    ```

    - Function expression
        - function declaration can be called earlier than it is defined. (hoisted)
        - function expression is created when the execution reaches it.
        - Function expression(no hoisted) vs Function declaration(hoisted)
        - annoymous function, named function
    - Callback function using function expression
        - Anonymous function
        - Named function
            - better debugging in debugger's stack traces
            - recursions
        - Arrow function
            - always anonymous
        - IIFE: Immediately Invoked Function Expression

6. Class vs Object
    ```
        - Object-oriendted programming
        - class : template
        - object : instance of a class
        - Javascript classes
            - introduced in ES6
            - syntactical sugar over prototype-based inheritance
    ```
    - Class declarations
    - Getter and setters
    - Fields (public, private)
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
    - Static properties and methods
    - Inheritance
        - a way for one class to extend another class.
    - Class checking: instanceOf
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference