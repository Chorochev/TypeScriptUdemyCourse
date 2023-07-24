// Decorators, getters, setters
// ts-node .\decorators_get_set.ts
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  // @ts-ignore comment
  @changeDoorStatusGS(false)
  // @ts-ignore comment
  @changeAmountOfFuelGS(95)
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean = true;
    errors: any;
    _weight: number = 1000;

    // @ts-ignore comment
    @logGS
    set weight(num: number) {
      this._weight = this._weight + num;
    }

    get weight() {
      return this._weight;
    }

    // @ts-ignore comment
    @checkNumberOfSeatsGS(4)
    freeSeats: number;

    // @ts-ignore comment
    @checkAmountOfFuelGS
    isOpen(value: string) {
      return this.open ? "open" : `close ${value}`;
    }
  }

  function logGS(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    const oldValue = descriptor.set;
    const oldGet = descriptor.get;
    descriptor.set = function (this: any, ...args: any) {
      console.log(`Изменяем значение на ${[...args]}`);
      return oldValue?.apply(this, args);
    };
    descriptor.get = function () {
      console.log(`Test`);
      return oldGet?.apply(this);
    };
  }

  function checkNumberOfSeatsGS(limit: number) {
    return function (target: Object, propertyKey: string | symbol) {
      let symbol = Symbol();

      const getter = function (this: any) {
        return this[symbol];
      };

      const setter = function (this: any, newAmount: number) {
        if (newAmount >= 1 && newAmount < limit) {
          this[symbol] = newAmount + 1;
        } else {
          // console.log(`Больше ${limit} сидений быть не может`);
          Object.defineProperty(target, "errors", {
            value: `Больше ${limit} сидений быть не может`,
          });
        }
      };

      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
      });
    };
  }

  // @ts-ignore comment
  function checkAmountOfFuelGS(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    const oldValue = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
      console.log(this.fuel);
      return oldValue.apply(this, args);
    };
  }

  // @ts-ignore comment
  function changeDoorStatusGS(status: boolean) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        open = status;
      };
    };
  }

  // @ts-ignore comment
  function changeAmountOfFuelGS(amount: number) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        fuel = `${amount}%`;
      };
    };
  }

  const car = new myCar();
  car.weight = 3;
  console.log(car);
  //   const _weight = car.weight;
  //   console.log(_weight);
  //   console.log(car);
  // console.log(car.errors);

  // f(x(y()));
}
