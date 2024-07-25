// defining a object using literals

const obj1 = {
    name: 'John',
    age: 30,
    car:{
        brand: 'Ford',
        model: 'Figo',
        year: 2010,
        tyre:{
            brand: 'MRF',
            size: 15,
            date:{
                manufactured: '2010-01-01',
                expiry: '2015-01-01'
            }
        }
    }
}

const obj2 = obj1; // You are not copying the object, you are just creating a new reference to the object

console.log(obj1);
console.log(obj2);
console.log("Changing obj2.name to Jane");
// if i change in obj2, it will reflect in obj1
obj2.name = 'Jane';

console.log(obj1);
console.log(obj2);

console.log("-------------------");
console.log("Using shallow copy methods");
console.log("1. Using spread operator");
const obj3 = {...obj1};
console.log(obj1);
console.log(obj3);
console.log("Changing obj3.name to Alice");
obj3.name = 'Alice';
console.log(obj1);
console.log(obj3);
console.log("top level properties are not affected");
console.log("Changing obj3.car.brand to Maruti");
obj3.car.brand = 'Maruti';
console.log(obj1);
console.log(obj3);
console.log("nested properties are affected by changing in obj3");

console.clear();

console.log("2. Using Array.prototype.concat()");
const ingredients = ['noodles', { list: ['onion', 'tomato', 'capsicum', 'flour'] }];
const ingredientsCopy = ingredients.concat();
console.log(ingredients);
console.log(ingredientsCopy);
console.log("Changing ingredientsCopy[0] to pasta");
ingredientsCopy[0] = 'pasta';

console.log(ingredients);
console.log(ingredientsCopy);

console.log("Changing ingredientsCopy[1].list[0] to potato");
ingredientsCopy[1].list[0] = 'potato';

console.log(ingredients);
console.log(ingredientsCopy);


console.clear();
console.log("3. Using Array.prototype.slice()");

const myCar = ['Ford', { items :  ['engine', 'tyre', 'battery'] }];
const myCarCopy = myCar.slice();
console.log(myCar);
console.log(myCarCopy);

console.log("Changing myCarCopy[0] to Maruti");
myCarCopy[0] = 'Maruti';
console.log(myCar);
console.log(myCarCopy);

console.log("Changing myCarCopy[1].items[0] to steering");
myCarCopy[1].items[0] = 'steering';

console.log(myCar);
console.log(myCarCopy);


console.clear();
// You can practise the rest of the methods on your own