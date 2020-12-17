### 공식문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript

1.  javascript history

2.  script async vs defer

    - head+async : 다운로드가 먼저 된 것 우선으로 실행. 순서 지켜지지 않음
    - head+defer : parsing HTML하는 동안 다운로드가 다 되기때문에 script순서대로 실행 -> 가장 효율적이고 안전하다.

3.  data types, let vs var, hoisting

    - Variable, rw(read/write)

      - let (added in ES6)
      - var **_(don't ever use this!)_**
        - `hoisting`(move declaration from bottom to top) : 어디에 선언했느냐에 상관없이 선언을 항상 위로 끌어올려주는 것
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
      - `number` - special numberic values : infinity, -infinity, NaN
      - `bigInt` - fairly new, don't use it yet
      - `string`
      - `boolean`
        - false : 0, null, undefined, NaN, ``
        - true : any other value
      - `null`
      - `undefined`
      - `symbol`
        - create unique identifiers for objects
      - `object` `real-life object` `data structure`

    - Dynamic typing
      - dynamically typed language

4.  operator, if, for loop
    - String concatenation
    - Numeric operators
    - Increment and decrement operators
    - Assignment operators
    - Comparison operators
    - Logical operators: || (or), && (and), ! (not)
      - `often used to compress long if-statement`
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
5.  Arrow Function

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

6.  Class vs Object

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

7.  Objects

    ```
    - Objects
        - one of the JavaScript's data types.
        - a collection of related data and/or functionality.
        - Nearly all objects in JavaScript are instances of Object
        - object = { key : value };
    ```

    - Literals and properties
      - 'object literal' syntax
      - 'object constructor' syntax
      - can add properties later
      - can delete properties later
    - Computed properties
      - key should be always string
    - Constructor function
    - in operator: property existence check (key in obj)
    - for..in vs for..of
      - for (key in obj)
      - for (value of iterable)
    - Fun cloning
      - Object.assign(dest, [obj1, obj2, obj3...])
      - old way vs new way

8.  Array

    - Declaration
    - Index position
    - Looping over an array
      - print all fruits
        - for
        - for of
        - forEach
    - Addition, deletion, copy

      - push: add an item to the end
      - pop: remove an item from the end
      - unshift: add an item to the beginning
      - shift: remove an item to the beginning

      ```
      note!

      shift, unshift are slower than pop, push
      pop, push는 뒤에서부터 넣고 빼고 넣고 빼고 -> 앞의 데이터는 건드리지 않는다
      shift : 삭제하고 한 칸씩 앞으로 당긴다
      unshift : 데이터를 한 칸씩 미루고 빈 칸에 데이터를 넣는다
      ```

      - splice: remove an item by index position (possible to add data)
      - combine two arrays

    - Searching
      - find the index
        - indexOf
        - includes
        - lastIndexOf

9.  Array APIs

    - join
    - split
    - reverse
    - splice vs slice
    - find
    - filter
    - map
    - some
    - every
    - reduce

10. JSON

    ```
    - JSON
        - JavaScript Object Notaion
        - object -> string(JSON) : serialize
        - object <- string(JSON) : deserialize
    ```

    - Object to JSON
      - stringify(obj)
    - JSON to Object
      - parse(json)
    - HOW TO STUDY
      - MDN : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
      - JavaScript.info.english : https://javascript.info/json
      - JavaScript.info.korean : https://ko.javascript.info/json
      - JSON Diff checker : http://www.jsondiff.com/
      - JSON Beautifier/editor : https://jsonbeautifier.org/
      - JSON Parser : https://jsonparser.org/
      - JSON Validator : https://tools.learningcontainer.com/json-validator/

11. Async

    ```
    - JavaScript is synchronous.
    - Execute the code block in order after hoisting.
    - hoisting: var, function declaration 선언들이 자동적으로 제일 위로 올라가는 것
    ```

    - Callback

      - Synchronous callback
      - Asynchronous callback
      - Callback Hell example

    - Promise

      - Promise is a JavaScript object for asynchronous operations.

      ```
      Promise는 두 가지만 알면 된다!

      - state : pending -> fulfiled or rejected
      - Producer vs Consumer
      ```

      - Producer
        - when new Promise is created, the executor runs automatically.
      - Consumers: then, catch, finally
      - Promise chaning
      - Error Handling

    - Async
      - clear style of using promise :)
      - async
      - await

12. Function Basic

    - 함수 선언 & 함수 호출
    - 값을 리턴하는 함수
    - 함수를 인자로 전달
    - 함수를 변수에 할당

    ```
    Review!

    선언 - 어떤 값을 받아 올 건지 인자 정의
    호출 - 함수(인자)
    ```
