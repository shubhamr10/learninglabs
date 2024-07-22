# Objects

### Today's Agenda
- Built-in Objects
- Object Prototype
- Prototypical Inheritance
  - Functions
  - Constructors Functions
  - Class-syntax constructors


## Built-in Objects
- Built-in Objects or Global Objects are those built into the language specification itself.
- Some of examples of built-in Objects are:
    - `Number`
    - `Math`
    - `Date`
    - `String`
    - `Error`
    - `Function`
    - `Boolean`

## Object Prototype
- JavaScript is an Object-Oriented language, built around a prototype model.
- In JavaScript, every objects inherits properties from its prototype if there are any.
- A prototype is simply on object from which another object inherits properties.
- You can check the prototype using : `Object.getPrototypeOf(myObj)`.

```javascript
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();
console.log(Object.getPrototypeOf(myObject));
```
- The prototype of `myObject` will be `[Object: null prototype] {}`.

## Prototypical Inheritance
- Inheritance means passing down characteristics from parent to child, so that a new piece of code can reuse the parent features.
- JavaScript implements inheritance by using `objects`.
- Each object has an internal link to another object called its prototype.
- There are three common approaches to achieve prototype chaining in JavaScript:
  - Functions
  - Constructor Functions
  - Class-syntax constructors
- We will be using a Wolf and Dog taxonomy, where a Wolf is a prototype of Dog. (Wolf is parent of Dog in hierarchy)

### Functional Approach
- The functional approach to create prototype chains is to use `Object.create()`:
```javascript

const wolf = {
  howl: function() {
    console.log(this.name + ":awoooo");
  }
}

const dog = Object.create(wolf, {
  woof: {
    value: function() {
      console.log(this.name + ":woof");
    }
  }
});

const rufus = Object.create(dog, {
  name: {
    value: "Rufus the dog"
  }
});

// access the rufus properties
console.log(rufus.woof()); // prints "Rufus the dog:woof"
console.log(rufus.howl()); // prints "Rufus the dog:awoooo" , accessing parent methods
```
- The prototype of plain JavaScript objects is `Object.prototype`.
- The `Object.create()` function takes two arguments, the first argument is the desired prototype of the object being created.
- To describe the full prototype chain:
  - The prototype of rufus is dog,
  - The prototype of dog is wolf,
  - The prototype of wolf is `Object.prototype`
- To get the prototype use : `Object.getPrototypeOf(obj)`.
Example:
```javascript
console.log(Object.getPrototypeOf(rufus) === dog); // true
console.log(Object.getPrototypeOf(dog) === wolf); // true
```

### Constructors functions
- Creating an object with a specific prototype object can also be achieved by calling a function with the `new` keyword.
- All functions have a prototype property.
- The Constructor approach to creating a prototype chain is to define properties on a function's prototype object and then call that function with `new`:
Example:
```javascript
function Wolf(name){
  this.name = name;
}

Wolf.prototype.howl = function(){
  console.log(this.name + ":awoooo");
}

function Dog(name){
  Wolf.call(this.name + " the dog.");
}

Dog.prototype = Object.create(Wolf.prototype);
Dog.prototype.woof = function(){
  console.log(this.name + ":woof");
}

const rufus = new Dog("Rufus");
// access the rufus properties
console.log(rufus.woof()); // prints "Rufus the dog:woof"
console.log(rufus.howl()); // prints "Rufus the dog:awoooo" , 

console.log(Object.getPrototypeOf(rufus) === dog); // true
console.log(Object.getPrototypeOf(dog) === wolf); // true

```

### Class-Syntax constructors
- Modern JavaScript has class keyword.
- The class syntax sugar does reduce boilerplate when creating a prototype chain:
```javascript
class Wolf{
  constructor(name){
    this.name = name;
  }

  howl(){
    console.log(this.name + ":awoooo");
  }
}

class Dog extends Wolf{
  constructor(name){
    super(name+"the dog");
  }
  woof(){
    console.log(this.name + ":woof");
  }
}

const rufus = new Dog("Rufus");
// access the rufus properties
console.log(rufus.woof()); // prints "Rufus the dog:woof"
console.log(rufus.howl()); // prints "Rufus the dog:awoooo" , 

console.log(Object.getPrototypeOf(rufus) === dog); // true
console.log(Object.getPrototypeOf(dog) === wolf); // true
```