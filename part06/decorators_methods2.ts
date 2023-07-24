// Decorators, methods (5+)
// tsc .\decorators_methods2.ts
// node .\decorators_methods2.js
{
  interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
  }

  // @ts-ignore comment
  @changeDoorStatus7(false)
  // @ts-ignore comment
  @changeAmountOfFuel7(95)
  class myCar implements ICar {
    fuel: string = "50%";
    open: boolean = true;
    freeSeats: number;

    // @ts-ignore comment
    @checkAmountOfFuel
    isOpen(value: string) {
      return this.open ? "open" : `close ${value}`;
    }
  }

  // function checkAmountOfFuel(target: any, context: ClassMethodDecoratorContext) {
  // 	return function (this: any, ...args: any[]) {
  // 		console.log(this.fuel);
  // 		return target.apply(this, args);
  // 	};
  // }

  // @ts-ignore comment
  function checkAmountOfFuel7<T, A extends any[], R>(
    target: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
  ) {
    return function (this: T, ...args: A): R {
      // console.log(this.fuel);
      console.log(`${String(context.name)} был запущен`);
      return target.apply(this, args);
    };
  }

  // @ts-ignore comment
  function changeDoorStatus7(status: boolean) {
    console.log("door init");
    return <T extends { new (...args: any[]): {} }>(
      target: T,
      context: ClassDecoratorContext<T>
    ) => {
      console.log("door changed");
      return class extends target {
        open = status;
      };
    };
  }

  // @ts-ignore comment
  function changeAmountOfFuel7(amount: number) {
    console.log("fuel init");
    return <T extends { new (...args: any[]): {} }>(
      target: T,
      context: ClassDecoratorContext<T>
    ) => {
      console.log("fuel changed");
      return class extends target {
        fuel = `${amount}%`;
      };
    };
  }

  const car = new myCar();
  console.log(car.isOpen("checked"));

  // f(x(y()));
}
