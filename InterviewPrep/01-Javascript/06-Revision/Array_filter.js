// Create a filter method without it

const arr = [1,2, 3, 4, 5, 6];

Array.prototype.myFilter = function (fn) {

    const final_arr = [];
    for(let i = 0; i< this.length; i++){
        const elem = this[i];
        if(fn(elem)){
            final_arr.push(elem);
        }
    }
    return final_arr;
}

const evenArr = arr.myFilter(i => i % 2 == 0);
console.log(evenArr);