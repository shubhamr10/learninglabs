// Implement Queue using stack;

class Stack{
    #values;
    constructor(){
        this.#values = [];
    }

    push(val){
        this.#values.push(val);
    }
    pop(){
        if(this.isEmpty()){
            console.error("Already empty");
        } else {
            this.#values.pop();
        }
    }
    isEmpty(){
        return this.#values.length === 0;
    }
    peek(){
        return this.#values[this.#values.length - 1];
    }
    print(){
        let printStr = "[";
        for (const iterator of object) {
            printStr+= iterator + "<=";
        }
        printStr+= "=> ]";
        console.log(printStr)
    }
}
[1,2,3]
class Queue{
    
}