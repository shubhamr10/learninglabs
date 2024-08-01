// Implement a Queue using array

class Queue{
    #values
    constructor(){
        this.#values = [];
    }
    // first in first out
    push(val){
        this.#values.push(val);
    }
    pop(){
        if(this.isEmpty()){
            console.error("empty");
        } else {
            this.#values.shift();
        }
    }
    isEmpty(){
        return this.#values.length === 0;
    }
    peek(){
        if(this.isEmpty()){
           console.error("empty"); 
        } else {
            return this.#values[0];
        }
    }

    print(){
        let printStr = "[";
        for (const iterator of this.#values) {
            printStr += iterator + " <- ";
        }
        printStr += " ] ";
        console.log(printStr);
    }
}


(()=>{
    const myQueue = new Queue();
    myQueue.print();
    myQueue.pop();
    myQueue.push(1);
    myQueue.push(10);
    myQueue.push(100);
    myQueue.push(1000);
    myQueue.push(10000);
    myQueue.print();
    console.log(myQueue.isEmpty());
    myQueue.pop();
    myQueue.print();
})();