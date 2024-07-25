# All about variables

### Today's agenda
1. Variable Declarations - The var, let and const
2. Variable naming rules.
3. Hoisiting
4. Variable scopes - Block, function and global
5. Difference between the var and let.


## Variable Declaration
- A variable is a named storage for data.
- We can use `var`, `let` and `const` for declaring a variable.
- The `var` keyword was used in the older scripts for declarations.
- All new modern javascript use `let` and `const` which was in ES6 or ECMAScript 2015.

**Example**
```javascript
let message;  // variable declaration
message = "Hello"; // variable initialisation
```

## Variable Naming Rules
- The name must contain only `letters`, `digits`, `$` dollar sign and `_` underscore.
- The first character should not be `digit`.
- Reserved keywords should not be used as variable name. Example : `for, break, continue, etc`

**Example**

```javascript
let message;
let $name;
let _age;
const pi4=3.17;
```

## Hoisting
- Hoisting refers to the process where the interpreter appears to move the declaration of the `function`, `variables`, `classes` or `imports` to the top of their scope, prior to execution.
- Being able to use the variable's value in its scope before it is declarated *(Value Hoisting)*.
- Being able to reference a variable in it's scope before it is declaraed, without throwing a `ReferenceError`, but the value is always undefined.*(Declaration Hoisting)*
- Variables declared using `let` and `const` are not hoisted. Similarly, function expressions are not hoisted.

**Example**
```javascript


sayHi(); // this works because the function declaration is hoisted to the top 

function sayHi(){
    console.log("Hello")
}

phrase = "How are you?";
console.log(phrase);
var phrase;

console.log(phrase2); // undefined, declaration is hoisted but not the initialisation.
var phrase2 = "Are you doing good";
```

## Variable Scope
- JavaScript variable have 3 types of scope:
    - Block Scope
    - Function Scope
    - Global Scope


#### Block Scope
- Variables declared inside a `{}` block are block scoped. It cannot be accessed from outside the block.
```javascript
{
    let x = 2;
}
// x cannot be accessed here.
```
- The `let` and `const` keyword variable declaration have block scope.

#### Function Scope
- Variable defined inside a function are not accessible from outside the function
- The variables declared with `var`, `let` and `const` are quite similar when declared inside a function and function scoped.
```javascript
function myFunction(){
    var carName = "Volvo";
    let tyreSize = 26;
    const wheels = 4;
}
```

#### Global Scope
- A variable declared outside a function or {} becomes global function.
- A global variable has global scope.

```javascript
var name = "Shubham";
let age = 26;
```
- If you assign a variable that has not been declared also automatically becomes a Global variable.
```javascript

myfunction();

function myfunction(){
    phrase = "hello"; // becomes a global variable.
    console.log(phrase);
}
```

## Difference between var, let and const.
- The `var` keyword has no block scope. It's either function scope or global scoped.
- The `var` tolerates the redeclaration.
```javascript

myfunction();

function myfunction(){
    var phrase = "Hello";
    var phrase = "Hi";
}
```
- The `var` variable can be declared below it is used.
```javascript

myfunction();

function myfunction(){
    phrase = "hello";
    console.log(phrase);
    var phrase;// this is hoisited to the top of the function.
}
```
