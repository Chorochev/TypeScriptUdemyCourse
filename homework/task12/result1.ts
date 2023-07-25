{
  interface ICuboid {
    width: number;
    length: number;
    height: number;
    calcArea: (multiply?: number) => number;
    calcVolume: (multiply?: number) => number;
  }

  // @ts-ignore comment
  @decor_createdAt
  class ShippingContainer implements ICuboid {
    // @IsInt()
    // @Min(1)
    width: number;

    // @IsInt()
    // @Min(1)
    length: number;

    // @IsInt()
    // @Min(1)
    // @Max(8)
    height: number;

    constructor(width: number, length: number, height: number) {
      this.width = width;
      this.length = length;
      this.height = height;
    }

    calcArea(multiply?: number): number {
      return this.width * this.length * (multiply ? multiply : 1);
    }

    calcVolume(multiply?: number) {
      return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
  }

  // 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
  // Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра
  // Add new property
  function decor_createdAt<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      createdAt = new Date();
    };
  }
  // without the decorator: ShippingContainer { width: 10, length: 100, height: 10 }
  // with the decorator @decor_createdAt:
  // ShippingContainer { width: 10, length: 100, height: 10, createdAt: ... }

  // 2. Необходимо создать декораторы IsInt, Min и Max, которые будут валидировать свойства класса
  // Применение смотрите в самом классе. При ошибке выполняйте throw new Error
  // IsInt проверяет на то, что было передано целое число

  // 3. Необходимо создать декоратор метода, который при каждом запуске метода будет создавать
  // ИЛИ менять содержимое свойства самого класса lastCalculation
  // Как значение записывать в него строку "Последний подсчет ${method} был ${Дата}",
  // Где method - это название подсчета, который передается при вызове декоратора (площадь или объем)

  const container = new ShippingContainer(10, 100, 10);
  console.log(container);
  //   container.width = 0;
  //   container.height = 5;
  //   console.log(container.calcVolume());
}
