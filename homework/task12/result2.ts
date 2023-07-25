// ts-node .\result1.ts
import "reflect-metadata";
{
  interface ICuboid {
    width: number;
    length: number;
    height: number;
    calcArea: (multiply?: number) => number;
    calcVolume: (multiply?: number) => number;
  }

  // @ts-ignore comment
  @decor_createdAt2
  class ShippingContainer implements ICuboid {
    // @ts-ignore comment
    @decor_isInt2()
    // @ts-ignore comment
    @decor_Min2(1)
    width: number;

    // @ts-ignore comment
    @decor_isInt2()
    // @ts-ignore comment
    @decor_Min2(1)
    length: number;

    // @ts-ignore comment
    @decor_isInt2()
    // @ts-ignore comment
    @decor_Min2(1)
    // @ts-ignore comment
    @decor_Max2(8)
    height: number;

    constructor(width: number, length: number, height: number) {
      this.width = width;
      this.length = length;
      this.height = height;

      decor_validate2(this, "width", width);
      decor_validate2(this, "length", length);
      decor_validate2(this, "height", height);
    }

    // @ts-ignore comment
    @decor_fixLastCalculation2("calcArea")
    calcArea(multiply?: number): number {
      return this.width * this.length * (multiply ? multiply : 1);
    }

    // @ts-ignore comment
    @decor_fixLastCalculation2("calcVolume")
    calcVolume(multiply?: number) {
      return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
  }

  // 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
  // Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра
  // Add new property to class
  function decor_createdAt2<T extends { new (...args: any[]): {} }>(
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
  function decor_fixLastCalculation2(method: string) {
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

  function decor_isInt2() {
    return function (target: Object, propertyKey: string | symbol) {
      Reflect.defineMetadata("decor_isInt2", true, target, propertyKey);
    };
  }

  function decor_Min2(limit: number) {
    return function (target: Object, propertyKey: string | symbol) {
      Reflect.defineMetadata("decor_Min2", limit, target, propertyKey);
    };
  }

  function decor_Max2(limit: number) {
    return function (target: Object, propertyKey: string | symbol) {
      Reflect.defineMetadata("decor_Max2", limit, target, propertyKey);
    };
  }

  function decor_validate2(
    target: any,
    propertyKey: string,
    value: any
  ): boolean {
    if (
      Reflect.getMetadata("decor_isInt2", target, propertyKey) &&
      (!Number.isInteger(value) || value !== parseInt(value))
    ) {
      throw new Error(`${propertyKey}: "${value}" isn't integer.`);
    }

    if (
      Reflect.hasMetadata("decor_Min2", target, propertyKey) &&
      value < Reflect.getMetadata("decor_Min2", target, propertyKey)
    ) {
      throw new Error(
        `${propertyKey}: "${value}" less than ${Reflect.getMetadata(
          "decor_Min2",
          target,
          propertyKey
        )}.`
      );
    }

    if (
      Reflect.hasMetadata("decor_Max2", target, propertyKey) &&
      value > Reflect.getMetadata("decor_Max2", target, propertyKey)
    ) {
      throw new Error(
        `${propertyKey}: "${value}" more than ${Reflect.getMetadata(
          "decor_Max2",
          target,
          propertyKey
        )}.`
      );
    }

    return true;
  }

  // const container1 = new ShippingContainer(0, 100, 10); // Error: width: "0" less than 1.
  // const container2 = new ShippingContainer(4, 100, 10); // Error: height: "10" more than 8.
  const container3 = new ShippingContainer(4, 100, 6); // Ok

  //   container.width = -1;
  //   container.height = 5;
  //   console.log(container);
  //   console.log(`calcArea(5) => ${container.calcArea(5)}`);
  //   // @ts-ignore comment
  //   console.log(container.lastCalculation);
  //   console.log(`calcVolume(7) => ${container.calcVolume(7)}`);
  //   // @ts-ignore comment
  //   console.log(container.lastCalculation);
}