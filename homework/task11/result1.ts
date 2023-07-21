{
  interface Queue<T> {
    enqueue(item: T): void; // поставить в очередь
    dequeue(): T | undefined; // исключить из очереди
    peek(): T | undefined | null; // посмотреть первый элемент
    isEmpty(): boolean; // проверка на "пустоту" сущности
    length(): number; // проверка на длину
  }

  class ArrayQueue<T> implements Queue<T> {
    #queue: T[];

    constructor() {
      this.#queue = new Array<T>();
    }
    // поставить в очередь
    enqueue(item: T): void {
      this.#queue.push(item);
    }
    // исключить из очереди
    dequeue(): T | undefined {
      return this.#queue.shift();
    }
    // посмотреть первый элемент
    peek(): T | undefined | null {
      if (!this.isEmpty()) {
        return this.#queue[0];
      } else {
        return null;
      }
    }
    // проверка на "пустоту" сущности
    isEmpty(): boolean {
      return this.#queue.length == 0;
    }
    // проверка на длину
    length(): number {
      return this.#queue.length;
    }
  }

  class Stack<T> {
    #stack: T[];
    #limit: number;

    constructor(limit: number = Number.MAX_VALUE) {
      this.#stack = new Array<T>();
      this.#limit = limit;
    }

    // Добавляет элемент в стэк
    push(value: T) {
      if (this.#stack.length < this.#limit) {
        this.#stack.unshift(value);
      } else {
        throw new Error("Stack is full.");
      }
    }
    // Удаляет последний элемент массива
    pop() {
      return this.#stack.shift();
    }
    // Возвращает кол-во элементов в стэке
    length(): number {
      return this.#stack.length;
    }
    // Проверяет стэк на "пустоту"
    isEmpty(): boolean {
      return this.#stack.length == 0;
    }
    // Возвращает последний (верхний) элемент стэка, но не удаляет его
    top(): T | null {
      if (!this.isEmpty()) {
        return this.#stack[0];
      } else {
        return null;
      }
    }
  }

  // Для тестов
  console.log("Test 1:");
  const arrTest1 = new ArrayQueue<number>();
  arrTest1.enqueue(5);
  arrTest1.enqueue(10);
  arrTest1.enqueue(15);
  console.log(arrTest1.peek());
  console.log(arrTest1.dequeue());
  console.log(arrTest1.length());

  console.log("Test 2:");
  const arrTest2 = new ArrayQueue<string>();
  arrTest2.enqueue("5");
  arrTest2.enqueue("10");
  console.log(arrTest2.peek());
  console.log(arrTest2.dequeue());
  console.log(arrTest2.dequeue());
  console.log(arrTest2.length());

  console.log("Test 3:");
  const stackTest1 = new Stack<number>(10);
  stackTest1.push(20);
  stackTest1.push(50);
  stackTest1.push(75);
  console.log(stackTest1.top());
  console.log(stackTest1.pop());
  console.log(stackTest1.pop());
  console.log(stackTest1.length());

  console.log("Test 4:");
  const stackTest2 = new Stack<string>(10);
  stackTest2.push("20");
  stackTest2.push("50");
  console.log(stackTest2.top());
  console.log(stackTest2.pop());
  console.log(stackTest2.length());
}
