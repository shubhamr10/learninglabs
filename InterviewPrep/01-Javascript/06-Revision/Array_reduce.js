// Write a function to use reduce method

const arr = [1, 2, 3, 4,  5, 6, 7];

Array.prototype.reduce2 = function(fn, initialValue){
    for(let i = 0; i< this.length ; i++){
        initialValue = fn(initialValue, this[i]);
    }
    return initialValue;
}

// console.log(arr.reduce2((acc, iterator) => {
//     return acc = acc + iterator;
// }, 0));

console.log(
    arr.reduce2((acc, iterator) => {
        acc.push(iterator);
        return acc;
    }, [])
)