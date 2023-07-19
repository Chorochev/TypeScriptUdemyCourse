// base of classes (ts)
// tsc .\baseClasses.ts - compile only one file
// tsc - compile all project
// tsconfig.json => "files": ["part05/base/baseClasses.ts"]

{
  class Box {
    // width: number; // Error: Property 'width' has no initializer
    width!: number; // Ok
    // or in tsconfig.json
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // width: number; // Ok => "strictPropertyInitialization": false,
  }
}

{
  class Box {
    width: number;
    constructor(width: number, height: number) {
      this.width = width;
      //this.height = height; // Property 'height' does not exist on type 'Box'.ts(2339)
    }
  }
}

{
  class Box {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  }

  const firstBox = new Box(100, 200);
  console.log(firstBox);
}

{
  class User {
    name!: string;
  }
  const ivan = new User();
  ivan.name = "Ivan";
  console.log(ivan);
}
