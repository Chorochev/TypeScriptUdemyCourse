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
    // @ts-ignore comment
    @decor_isInt()
    // @ts-ignore comment
    @decor_Min(1)
    width: number;

    // @ts-ignore comment
    @decor_isInt()
    // @ts-ignore comment
    @decor_Min(1)
    length: number;

    // @ts-ignore comment
    @decor_isInt()
    // @ts-ignore comment
    @decor_Min(1)
    // // @ts-ignore comment
    // @decor_Max(8)
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

  function decor_isInt() {
    return function (target: Object, proprrtyKey: string | symbol) {
      let symbol = Symbol();
      const getter = function (this: any) {
        return this[symbol];
      };

      const setter = function (this: any, newAmount: unknown) {
        console.log(`isint => setter(${newAmount})`);
        if (typeof newAmount === "number" && Number.isInteger(newAmount)) {
          this[symbol] = newAmount;
        } else {
          throw new Error(`argument "${newAmount}" isn't integer`);
        }
      };

      Object.defineProperty(target, proprrtyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    };
  }

  function decor_Min(limit: number) {
    return function (target: Object, proprrtyKey: string | symbol) {
      let symbol = Symbol();
      const getter = function (this: any) {
        return this[symbol];
      };

      const setter = function (this: any, newAmount: unknown) {
        console.log(`min => setter(${newAmount})`);
        if (typeof newAmount === "number" && Number.isInteger(newAmount)) {
          if (newAmount > limit) {
            this[symbol] = newAmount;
          } else {
            throw new Error(`"${newAmount}" less than a limit = ${newAmount}`);
          }
        } else {
          throw new Error(`argument "${newAmount}" isn't integer`);
        }
      };

      Object.defineProperty(target, proprrtyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    };
  }

  function decor_Max(limit: number) {
    return function (target: Object, proprrtyKey: string | symbol) {
      let symbol = Symbol();
      const getter = function (this: any) {
        return this[symbol];
      };

      const setter = function (this: any, newAmount: unknown) {
        console.log(`max => setter(${newAmount})`);
        if (typeof newAmount === "number" && Number.isInteger(newAmount)) {
          if (newAmount < limit) {
            this[symbol] = newAmount;
          } else {
            throw new Error(`"${newAmount}" more than a limit = ${newAmount}`);
          }
        } else {
          throw new Error(`argument "${newAmount}" isn't integer`);
        }
      };

      Object.defineProperty(target, proprrtyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    };
  }

  const container = new ShippingContainer(0, 100, 10);
  container.width = -1;
  container.height = 5;
  console.log(container);
  console.log(`calcArea(5) => ${container.calcArea(5)}`);
  // @ts-ignore comment
  console.log(container.lastCalculation);
  console.log(`calcVolume(7) => ${container.calcVolume(7)}`);
  // @ts-ignore comment
  console.log(container.lastCalculation);
}
