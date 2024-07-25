# Data structures

### Today's agenda
- Shallow copy vs deep copy
- Indexed Collections
    - Typed Arrays
    - Arrays
        - Stack
        - Queue
- Structured Data
    - JSON
- Keyed Collection
    - Map
    - Weak Map
    - Set
    - Weak Set

## Shallow copy vs deep copy
- A **shallow copy** of an object is a copy, whose properties have the same reference as the source object from which copy was made.
- Their prototype chains are equal.
- The values of their properties are equal.

**Properties**
- Only top level properties are copied and not the values of the nested objects
- Re-assigning top-level properties of the copy does not affect the source object.
- Re-assiginig the nested object properties of the copy does affect the source object.

**Methods used to create a shallow copy**
- `spread operator syntax`
- `Array.prototype.concat()`
- `Array.prototype.slice()`
- `Array.from()`
- `Object.assign()`

See the example in .js file.

## Indexed Collection
- Indexed collection are collections that have numeric indices. i.e the collection of data that are ordered by an index value.
- Array
- Typed Array

### Typed Array
- Used for manipulating binary data
- Examples: `Int8Array`, `Uint8Array`, etc.

### Array
- Arrays is the object that allows you to store keyed collections of values.
- Array can store any type of data inside it.

**Declaration**
```javascript
// using new Array()
let arr = new Array();
// using array literal
let arr = [];
```

#### Use cases of Arrays
- Queue
- Stack

**Queue**
- A queue is one of the most common uses of an array.
- This means an ordered collection of elements which supports two operations:
    - `push` - appends an element to the end.
    - `shift` - get an element from the beginning, advancing the queue.(2nd element becomes the 1st element and so on).

**Stack**
- A stack is another use case of an array.
- It supports 2 operations:
    - `push` - appends an element to the end.
    - `pop` - takes an element from the end.


**Performance**
- Method `push/pop` runs faste, than `shift/unshift`.

## Structured Data
- We use structured data to display data in the web pages, it has a defined structure that we follow.
- We use JSON (JavaScript Object Notation)

**JSON**
- JSON is a text-based format for representing structured data based on Javascript object syntax.
- It has 2 methods:
- **JSON.parse()** : Parsed a JSON string to object.
- **JSON.stringify()** : Return a JSON string from the object.


## Keyed Collections
- Javascript keyed collection are structured collection of data that stores values and provide methods for easily accessing them.
- Keyed collections were actually introduced with ES6 as an alternative to arrays and objects to cope up with array and obejcts limitations.

For example:
- To iterate over an object or to sort i, You had to first convert it to an array, the perform those operations.
- In arrays, if you need to pull out a specific value without its index, it was not straight-forwards.


### Set
- `Set` is a collections of unique values.
- Before ES6, Javascript didn't have a data structure for sets. Instead, two workarounds were used:
    - The keys of object were used as a set of string.
    - Arrays were used as a set of values. The downside was checking if an array contains a value is slower.

**Methods**
- add
- has
- delete
- clear
