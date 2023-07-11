{
  function func1(item: "true" | "false"): void {
    if (item === "false") {
      console.log("(parameter) item: false");
      // const smth: never = item; // Error
    } else if (item === "true") {
      console.log("(parameter) item: true");
      // const smth: never = item; // Error
    } else {
      console.log("(parameter) item: never");
      const smth: never = item; // Ok
    }
  }

  func1("true");
  func1("false");
  //   func1("something"); // Error
}

{
  function func1(item: "true" | "false"): string {
    if (item === "false") {
      return "(parameter) item: false";
    } else if (item === "true") {
      return "(parameter) item: true";
    } else {
      return "(parameter) item: never";
    }
    return "???";
  }
}

{
  function isNumber(n: string[] | number | boolean): n is number {
    return typeof n === "number";
  }

  function isNumber2(n: unknown): n is number {
    return typeof n === "number";
  }

  function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
      msg.forEach((m) => console.log(m)); // (parameter) msg: string[]
    } else if (isNumber(msg)) {
      console.log(msg.toFixed()); // (parameter) msg: number
    } else {
      console.log(msg); // (parameter) msg: boolean
    }
  }

  printMsg(4);
  printMsg(true);
  printMsg(["test1", "test2"]);
}

{
  interface ICar {
    name: "car";
    engine: string;
    wheels: number;
  }

  interface IShip {
    name: "ship";
    engine: string;
    sail: string;
  }

  interface IAirplane {
    name: "airplane";
    engine: string;
    wings: string;
  }

  interface ISuperAirplane {
    name: "smth";
    engine: string;
    wings: string;
  }

  function repairVehicle(vehicle: ICar | IShip | IAirplane | ISuperAirplane) {
    switch (vehicle.name) {
      case "car":
        console.log(vehicle.wheels);
        break;
      case "ship":
        console.log(vehicle.sail);
        break;
      case "airplane":
        console.log(vehicle.wings);
        break;
      default:
        // Type guard:
        // const smth: never = vehicle; // Error because ISuperAirplane
        console.log("Oups!!!");
    }
  }

  type Vehicle = ICar | IShip | IAirplane;

  function isCar(car: Vehicle): car is ICar {
    return "wheels" in car;
  }

  function isCar2(car: Vehicle): car is ICar {
    return (car as ICar).wheels !== undefined;
  }

  function isShip(car: Vehicle): car is IShip {
    return (car as IShip).sail !== undefined;
  }

  //   repairVehicle({})
}
