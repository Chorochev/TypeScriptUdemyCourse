{
  // constructor
  // constructor([arguments]) { ... }
  class Person {
    constructor(name) {
      this.name = name;
    }

    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const otto = new Person("Otto");
  otto.introduce();
}

{
  class MyArray {
    constructor(...args) {
      console.log(args);
    }
  }
  var mc = new MyArray(100, 7, true, "test"); // [ 100, 7, true, 'test' ]
}

{
  // extends
  // class ChildClass extends ParentClass { ... }

  class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  class Square extends Polygon {
    constructor(length) {
      super(length, length);
      this.name = "Square";
    }

    get area() {
      return this.height * this.width;
    }
  }
  var s = new Square(5);
  console.log(s.area); // 25
}

{
  // private objects

  class ClassWithPrivateField {
    #privateField;
  }

  class ClassWithPrivateMethod {
    #privateMethod() {
      return "hello world";
    }
  }

  class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD;
  }
}

{
  // static objects
  class StaticMethodCall {
    static staticMethod() {
      return "Вызван статический метод";
    }
    static anotherStaticMethod() {
      return this.staticMethod() + " из другого статического метода";
    }
  }
  var str1 = StaticMethodCall.staticMethod();
  console.log(str1); // 'Вызван статический метод'

  var str2 = StaticMethodCall.anotherStaticMethod();
  console.log(str2); // 'Вызван статический метод из другого статического метода'
}
