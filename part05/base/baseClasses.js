"use strict";
// base of classes (ts)
// tsc .\baseClasses.ts - compile only one file
// tsc - compile all project
// tsconfig.json => "files": ["part05/base/baseClasses.ts"]
{
    class Box {
    }
}
{
    class Box {
        constructor(width, height) {
            this.width = width;
            //this.height = height; // Property 'height' does not exist on type 'Box'.ts(2339)
        }
    }
}
{
    class Box {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }
    const firstBox = new Box(100, 200);
    console.log(firstBox);
}
{
    class User {
    }
    const ivan = new User();
    ivan.name = "Ivan";
    console.log(ivan);
}
