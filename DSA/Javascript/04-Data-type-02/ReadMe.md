# Objects

### Today's Agenda
- Built-in Objects
- Object Prototype
- Prototypical Inheritance


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
