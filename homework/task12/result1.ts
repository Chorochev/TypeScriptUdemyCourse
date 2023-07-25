// ts-node .\result1.ts
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

    // @ts-ignore comment
    @decor_fixLastCalculation("calcArea")
    calcArea(multiply?: number): number {
      return this.width * this.length * (multiply ? multiply : 1);
    }

    // @ts-ignore comment
    @decor_fixLastCalculation("calcVolume")
    calcVolume(multiply?: number) {
      return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
  }

  // 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
  // Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра
  // Add new property to class
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
  function decor_fixLastCalculation(method: string) {
    return (
      target: Object,
      proprrtyKey: string | symbol,
      descriptor: PropertyDescriptor
    ): PropertyDecorator | void => {
      const oldMethod = descriptor.value;

      descriptor.value = function (this: any, ...args: any[]) {
        this.lastCalculation = `Последний подсчет ${method} был ${new Date()}`;
        return oldMethod.apply(this, args);
      };
    };
  }

  const container = new ShippingContainer(10, 100, 10);
  container.width = 3;
  container.height = 5;
  console.log(container);
  console.log(`calcArea(5) => ${container.calcArea(5)}`);
  // @ts-ignore comment
  console.log(container.lastCalculation);
  console.log(`calcVolume(7) => ${container.calcVolume(7)}`);
  // @ts-ignore comment
  console.log(container.lastCalculation);
}
