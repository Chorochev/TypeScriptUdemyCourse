// Decorators
// Function composition => f1(f2(f3()));
{
  const myCar = {
    fuel: "50%",
    open: true,
    freeSeats: 3,
    isOpen() {
      console.log(`fuel: ${this.fuel}`);
      return this.open ? "open" : "close";
    },
  };

  function closeCar(car: typeof myCar) {
    car.open = false;
    return car;
  }
  console.log(closeCar(myCar).isOpen());

  function addFuel(car: typeof myCar) {
    car.fuel = "100%";
    return car;
  }
  console.log(addFuel(closeCar(myCar)).isOpen());

  console.log("---------------------");
  function closeCar2(car: typeof myCar) {
    car.open = false;
    console.log("close car");
    return car;
  }

  function addFuel2(car: typeof myCar) {
    car.fuel = "100%";
    console.log("add fuel");
    return car;
  }
  addFuel2(closeCar2(myCar)).isOpen();
}
