// Your task is to flatten the array without using flat method

const arr = Array.from([1,2,3,4, [5,6,7,[8,9,0]]]);

// first let's write a function to do the same thing
function myflat(arr){
    const final_arr = [];
    for(let i = 0; i < arr.length; i++){
        const elem = arr[i];
        if(typeof elem === "object"){
            final_arr.push(...myflat(elem));
        } else {
            final_arr.push(elem);
        }
    }
    return final_arr;
}

// const flat_arr = myflat(arr);
// console.log(flat_arr);

// Now change the function to a prototype
Array.prototype.flat2 = function(){
    const final_arr = [];
    for(let i = 0; i < this.length; i++){
        const elem = this[i];
        if(typeof elem === "object"){
            final_arr.push(...elem.flat2());
        } else {
            final_arr.push(elem);
        }
    }
    return final_arr;
}

console.log(arr.flat2());