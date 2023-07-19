// Class in javascript
{
  // var p = new Rectangle(); // ReferenceError: Cannot access 'Rectangle' before initialization      at Object.<anonymous>

  // class declaration
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  var p = new Rectangle(); // ok
}

{
  // nameless
  var Rectangle1 = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle1.name); // Rectangle1

  // named
  var Rectangle2 = class RectangleNamed {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle2.name); // RectangleNamed
}

{
  // functions
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    get area() {
      return this.calcArea();
    }

    calcArea() {
      return this.height * this.width;
    }
  }
  const square = new Rectangle(10, 10);
  console.log(square.area); // 100
  console.log(square.calcArea); // [Function: calcArea]
  console.log(square.calcArea()); // 100
}

{
  // Static
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;

      return Math.hypot(dx, dy);
    }
  }

  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.displayName; // undefined
  p1.distance; // undefined
  p2.displayName; // undefined
  p2.distance; // undefined

  console.log(Point.displayName); // "Point"
  console.log(Point.distance(p1, p2)); // 7.0710678118654755
}

{
  // this class
  class Animal {
    speak() {
      console.log("Animal.speak()");
      return this;
    }
    static eat() {
      console.log("Animal.eat()");
      return this;
    }
  }

  let obj = new Animal();
  obj.speak(); // object Animal
  let speak = obj.speak;
  speak(); // undefined

  Animal.eat(); // class Animal
  let eat = Animal.eat;
  eat(); // undefined
}

{
  // this function
  function Animal() {}

  Animal.prototype.speak = function () {
    console.log("Animal.prototype.speak = function ()");
    return this;
  };

  Animal.eat = function () {
    console.log("Animal.eat = function ()");
    return this;
  };

  let obj = new Animal();
  let speak = obj.speak;
  speak(); // глобальный объект (нестрогий режим)

  let eat = Animal.eat;
  eat(); // глобальный объект (нестрогий режим)
}

{
  // public fields
  class Rectangle {
    height = 0;
    width;
    publicX = 123;
    constructor(height, width) {
      this.height = height;
      this.width = width;
      this.publicY = 15;
    }

    get getPublicY() {
      return this.publicY;
    }
  }
  var p = new Rectangle(10, 20);
  console.log(`${p.height}, ${p.width}, ${p.publicX}`); // 10, 20, 123
  console.log(`${p.publicY}, ${p.getPublicY}`); // 15, 15
}

{
  // private fields
  class Rectangle {
    #height = 0;
    #width;
    publicX = 123;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
    get GetPrivateHeigth() {
      return this.#height;
    }
    get GetPrivateWidth() {
      return this.#width;
    }
  }
  var p = new Rectangle(10, 20);
  console.log(`${p.publicX}`); // 123
  console.log(`${p.height}, ${p.width}`); // undefined, undefined
  console.log(`${p.GetPrivateHeigth}, ${p.GetPrivateWidth}`); // 10, 20
}

{
  // extends (наследование)
  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} издаёт звук.`);
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name); // вызывает конструктор super класса и передаёт параметр name
    }

    speak() {
      console.log(`${this.name} лает.`);
    }
  }

  let a = new Animal("Бобик");
  a.speak(); // Бобик издаёт звук.

  let d = new Dog("Митци");
  d.speak(); // Митци лает.
}

{
  // class extends from function
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.speak = function () {
    console.log(`${this.name} издаёт звук.`);
  };

  class Dog extends Animal {
    speak() {
      console.log(`${this.name} лает.`);
    }
  }

  let d = new Dog("Митци");
  d.speak(); // Митци лает
  // Для аналогичных методов дочерний метод имеет приоритет над родительским.
}

{
  class MyArray1 extends Array {}
  var a1 = new MyArray1(1, 2, 3);
  var mapped1 = a1.map((x) => x * x);
  console.log(mapped1 instanceof MyArray1); // true
  console.log(mapped1 instanceof Array); // true

  // Species
  class MyArray2 extends Array {
    // Изменить species на родительский конструктор Array
    static get [Symbol.species]() {
      return Array;
    }
  }
  var a2 = new MyArray2(1, 2, 3);
  var mapped2 = a2.map((x) => x * x);
  console.log(mapped2 instanceof MyArray2); // false
  console.log(mapped2 instanceof Array); // true
}

{
  // super
  class Cat {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} издаёт звук.`);
    }
  }

  class Lion extends Cat {
    speak() {
      super.speak();
      console.log(`${this.name} рычит.`);
    }
  }

  let l = new Lion("Фаззи");
  l.speak();
  // Фаззи издаёт звук.
  // Фаззи рычит.
}

{
  // mix-ins (abstract)
  var calculatorMixin = (Base) =>
    class extends Base {
      calc() {}
    };

  var randomizerMixin = (Base) =>
    class extends Base {
      randomize() {}
    };

  class Foo {}
  class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
}
