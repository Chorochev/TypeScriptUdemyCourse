const underFlow = "Queue Underflow";
class ArrayQueue {
    queue = [];
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error(underFlow);
        }
        return this.queue.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    length() {
        return this.queue.length;
    }
}
class Stack {
    stack = [];
    limit;
    constructor(limit = Number.MAX_VALUE) {
        this.limit = limit;
    }
    push(value) {
        if (this.length() + 1 > this.limit) {
            throw new Error("Stack Overflow");
        }
        this.stack.push(value);
    }
    pop() {
        if (this.length() !== 0) {
            return this.stack.pop();
        }
        throw new Error("Stack Underflow");
    }
    length() {
        return this.stack.length;
    }
    isEmpty() {
        return this.length() === 0;
    }
    top() {
        if (this.length() !== 0) {
            return this.stack[this.length() - 1];
        }
        return null;
    }
}
// Для тестов
const arrTest1 = new ArrayQueue();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());
