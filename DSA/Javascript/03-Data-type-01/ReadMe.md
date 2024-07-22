# Data types

### Today's Agenda
1. Primitive data type
2. Object
3. Creating Objects
    1. Using Object literals or object initialisers
    2. Using constructor function
    3. Using Object.create() method
4. Accessing Object properties
5. Non-existing properties in objects.
6. Iterating Objects
    1. for..in
    2. Object.keys()
    3. Object.getOwnPropertyNames()
7. Deleting property in objects
8. typeof operator
9. `in` keyword to determine if the key exists.

## Primitive data type
In Javascript, there are 7 primitive data type:
- `null` : `null`
- `undefined` : `undefined`
- `boolean` : `true` or `false`
- `string` : `"Hello"`, `'hi'`, using template literals (`).
- `number` : 1, 2.3 2.333333333
- `bigint` : 1n, 9023432423424234234234n
- `Symbol` : `Symbol("description")`



The **null** primitive is typically used to describe the absence of an object, whereas undefined is the absence of a defined value. 

Any variable initialized without a value will be **undefined**. Any expression that attempts access of a non-existent property on an object will result in undefined. A function without a return statement will return undefined.

The **Number** type is double-precision floating-point format. It allows both integers and decimals but has an integer range of -253-1 to 253-1. The BigInt type has no upper/lower limit on integers.

**Strings** can be created with single or double quotes, or backticks. Strings created with backticks are template strings, these can be multiline and support interpolation whereas normal strings can only be concatenated together using the plus (+) operator.


**Symbols** can be used as unique identifier keys in objects. The Symbol.for method creates/gets a global symbol.

## Objects
- Everything in Javascript except the above primitive data types are objects. This includes - arrays, function, etc.
- An object is a set of key-value pairs.
- Object keys are called properties.

Example:
```javascript
const obj1 = {
    name : "Shubham"
}
```

## Creating Objects

### Using Object literals or Object initializers
- Objects are created using literal signs `{}`.
- Objects initialised using Object initialiser or Object literals are also called **Plain Objects**, because they are instance of Object.

Example:
```javascript
const obj = {
    key1:"value1",
    2:"value2",
    "keysn":"valuen",
}
```

### Using constructor functions
- You can create objects using constructor function with these 2 steps:
    - Define the object type by writing a constructor function. There is a strong convention, with a good reason to use a captial initial letter.
    - Creates an instance of the object with `new` keywords.

Example:
```javascript
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCar = new Car("Eagle", "Talons", 1993);
```

- An object can also have a propert that iteself is a another object. It is called nested objects.
Example:
```javascript
function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Car(make, model, year, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const ken = new Person("Ken adams",28, "M");
const myCar = new Car("Nissan", "falcon", 1998, ken);

```

### Using Object.create() method
Example:
```javascript
const Animal = {
    type:"Invertibrates",
    displayType(){
        console.log(this.type);
    }
};
const animal = Object.create(Animal);
```

## Accesing properties
You can access properties using:
- Dot notation - `.`
- Bracket notation - `[]`

**Dot notation** : Object properties value can be accessed and assigned using `.` operators.
Example:
```javascript
const myCar = {
    name:"Nissan"
}

console.log(myCar.name);
myCar.year = 1998;
```

**Bracket Notation** : When a property name starts with a number or has a space or hypen or held inside a variable. Then it can only accessed or assigned using Bracket notation.
Example:
```javascript
const myCar = {
    name:"Nissan",
    "Date of birth":1998
}
console.log(myCar["Date of birth"])
myCar["year-of-manufacture"] = 1997;

```

> Property names are case-sensetive. "hello" != "Hello"

> Non-existing property of object value "undefined".

## Iterating Objects
- for...in : for..in loop can be used to iterate over Object keys.
Example:
```javascript
const obj = {
    name:"Shubham",
    age:26,
    year:1998,
    sex:"M"
}

for(let key in obj){
    console.log(`Key: ${key}, value--> ${obj[key]}`);
}
```

- Object.keys(): Returns an array of object keys, with which you can iterate.
Example:
```javascript
const obj = {
    name:"Shubham",
    age:26,
    year:1998,
    sex:"M"
}

for(let key of Object.keys(obj)){
    console.log(`Key: ${key}, value--> ${obj[key]}`);
}
```

- Object.getOwnProperyNames() - Returns an array of object keys, with which you can iterate.
Example:
```javascript
const obj = {
    name:"Shubham",
    age:26,
    year:1998,
    sex:"M"
}

for(let key of Object.getOwnProperyNames(obj)){
    console.log(`Key: ${key}, value--> ${obj[key]}`);
}
```

## Deleting a property
You can delete a object property using `delete` keyword.
Example:
```javascript
const obj = {
    name:"Shubham",
    age:26,
    year:1998,
    sex:"M"
}

for(let key of Object.getOwnProperyNames(obj)){
    console.log(`Key: ${key}, value--> ${obj[key]}`);
}

delete obj.age; // deletes obj.age

for(let key of Object.getOwnProperyNames(obj)){
    console.log(`Key: ${key}, value--> ${obj[key]}`);
}
```


## The `typeof` operator
- The `typeof` operator is used to determine data type of variable
```javascript

const obj = {
    name:"Shubham",
    age:26,
    year:1998,
    sex:"M"
}

console.log(typeof obj); // object
console.log(typeof 9); // number
console.log(typeof "hello") // string
```

## The `in` keyword

- `in` keyword is used to determine if the key exists in object or not.

```javascript

const obj = {
    name:"Shubham",
    age:26,
    year:1998,
    sex:"M"
}
console.log("name" in obj); // true
console.log("parent" in obj); // false
```