# tsconfig - Compiler Options

## links:

- Compiler Options in MSBuild: https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html

# Options

## Target - target

Modern browsers support all ES6 features, so ES6 is a good choice. You might choose to set a lower target if your code is deployed to older environments, or a higher target if your code is guaranteed to run in newer environments.

    "compilerOptions": {
        "target": "ES2022"
    }

## files

Specifies an allowlist of files to include in the program. An error occurs if any of the files can’t be found.

    "files": [
        file1.ts,
        file2.ts
    ]

## include

Specifies an array of filenames or patterns to include in the program. These filenames are resolved relative to the directory containing the tsconfig.json file.

    {
    "include": ["src/**/*", "tests/**/*"]
    }

## Exclude - exclude

Specifies an array of filenames or patterns that should be skipped when resolving include.
Important: exclude only changes which files are included as a result of the include setting. A file specified by exclude can still become part of your codebase due to an import statement in your code, a types inclusion, a reference directive, or being specified in the files list.
It is not a mechanism that prevents a file from being included in the codebase - it simply changes what the include setting finds.

    {
    "include": [
        "src/**/*",
        "tests/**/*"
    ],
    "exclude": ["tests/test.ts"]
    }

## Out Dir - outDir

If specified, .js (as well as .d.ts, .js.map, etc.) files will be emitted into this directory. The directory structure of the original source files is preserved; see rootDir if the computed root is not what you intended.
If not specified, .js files will be emitted in the same directory as the .ts files they were generated from:

    {
        "compilerOptions": {
            "outDir": "./src",
        }
    }

## Root Dir - rootDir

Default: The longest common path of all non-declaration input files. If composite is set, the default is instead the directory containing the tsconfig.json file.
When TypeScript compiles files, it keeps the same directory structure in the output directory as exists in the input directory.

    {
        "compilerOptions": {
            "rootDir": "./src",
        }
    }

## Root Dirs - rootDirs

Using rootDirs, you can inform the compiler that there are many “virtual” directories acting as a single root. This allows the compiler to resolve relative module imports within these “virtual” directories, as if they were merged in to one directory.

    {
        "compilerOptions": {
            "rootDirs": ["src/views", "generated/templates/views"]
        }
    }

# Paths - paths

A series of entries which re-map imports to lookup locations relative to the baseUrl if set, or to the tsconfig file itself otherwise. There is a larger coverage of paths in the handbook.
paths lets you declare how TypeScript should resolve an import in your require/imports.

    {
        "compilerOptions": {
            "paths": {
            "jquery": ["./vendor/jquery/dist/jquery"]
            }
        }
    }

in ts-file:

    import "jquery"

# JavaScript Support

## Allow JS - allowJs

Allow JavaScript files to be imported inside your project, instead of just .ts and .tsx files. For example, this JS file:

    "allowJs": true,

    // @filename: card.js
    export const defaultCardDeck = "Heart";

## Check JS - checkJs

Works in tandem with allowJs. When checkJs is enabled then errors are reported in JavaScript files. This is the equivalent of including // @ts-check at the top of all JavaScript files which are included in your project.
For example, this is incorrect JavaScript according to the parseFloat type definition which comes with TypeScript:

    "checkJs": true,

    // parseFloat only takes a string
    module.exports.pi = parseFloat(3.142);

## Remove Comments - removeComments

Strips all comments from TypeScript files when converting into JavaScript. Defaults to false.

# Emit

## Declaration - declaration

Generate .d.ts files for every TypeScript or JavaScript file inside your project. These .d.ts files are type definition files which describe the external API of your module. With .d.ts files, tools like TypeScript can provide intellisense and accurate types for un-typed code.

## Declaration Dir - declarationDir

Offers a way to configure the root directory for where declaration files are emitted.

    {
        "compilerOptions": {
            "declaration": true,
            "declarationDir": "./types"
        }
    }

# Type Checking

## Strict - strict

The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. Turning this on is equivalent to enabling all of the strict mode family options, which are outlined below. You can then turn off individual strict mode family checks as needed.
Future versions of TypeScript may introduce additional stricter checking under this flag, so upgrades of TypeScript might result in new type errors in your program. When appropriate and possible, a corresponding flag will be added to disable that behavior.

    {
        "compilerOptions": {
            "strict": true
        }
    }

## No Fallthrough Cases In Switch - noFallthroughCasesInSwitch

Report errors for fallthrough cases in switch statements. Ensures that any non-empty case inside a switch statement includes either break, return, or throw. This means you won’t accidentally ship a case fallthrough bug.

    {
        "noFallthroughCasesInSwitch": true,
    }

in ts-file:

    const a: number = 6;

    switch (a) {
        case 0:
        Fallthrough case in switch.
        console.log("even");

```diff
- Fallthrough case in switch.
```

        case 1:
        console.log("odd");
        break;

}
