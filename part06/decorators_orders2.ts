// decorators orders
// ts-node .\decorators_orders2.ts
{
  // @ts-ignore comment
  @sealed
  class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
      this.title = t;
    }
  }

  function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(
      `Func "sealed"\nconstructor => ${constructor}\nconstructor.prototype => ${constructor.prototype}`
    );
  }

  const br = new BugReport("test report");
  console.log(br);
}
