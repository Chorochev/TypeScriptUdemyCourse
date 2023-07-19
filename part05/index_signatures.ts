// index signatures
{
  class Styles {
    [s: string]: string;
  }

  const style = new Styles();
  style.color = "red";
  style.font = "Console";
}

{
  class Styles {
    [s: string]: string | ((s: string) => boolean);

    isProperty(name: string): boolean {
      return name in this;
    }
  }

  const style = new Styles();
  style.color = "red";
  style.font = "Console";

  console.log(style.isProperty("test")); // false
  console.log(style.isProperty("color")); // true
}

{
  class MyClass {
    [s: string]: boolean | ((s: string) => boolean);

    check(s: string) {
      return this[s] as boolean;
    }
  }

  const c = new MyClass();
  c.test1 = true;
  c.test2 = false;

  console.log(c.check("test1")); // true
  console.log(c.check("test2")); // false
}

{
  interface Identifier1 {
    [identifier: string]: string;
  }

  // or
  interface Identifier2 {
    [key: number]: string;
  }

  // or
  interface Identifier3 {
    [name: number]: string;
  }
}
