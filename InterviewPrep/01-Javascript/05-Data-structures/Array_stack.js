// Implement a stack is array- 
// stack has push, pop functions

class Stack {
    #values;
    constructor(){
        this.#values = [];
    }

    push(elem){
        this.#values.push(elem);
    };
    pop(){
        if(!this.isEmpty()){
            this.#values.splice(this.#values.length - 1, 1);
        } else {
            throw new Error("empty stack nothing to pop");
        }
    };
    peek(){
        return this.#values[this.#values.length - 1];
    };
    isEmpty(){
        return this.#values.length === 0;
    };

    print(){
        for (const iterator of this.#values) {
            console.log(iterator)
        }
    }
}

(()=>{
    const myStack = new Stack();
    myStack.push(1);
    myStack.push(10);
    myStack.push(100);
    myStack.push(1000);

    console.log(myStack.peek());
    myStack.print();
})()