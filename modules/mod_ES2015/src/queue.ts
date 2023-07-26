export interface Queue<T> {
  enqueue(item: T): void; // поставить в очередь
  dequeue(): T | undefined; // исключить из очереди
  peek(): T | undefined | null; // посмотреть первый элемент
  isEmpty(): boolean; // проверка на "пустоту" сущности
  length(): number; // проверка на длину
}

export const underFlow = "Queue Underflow";
