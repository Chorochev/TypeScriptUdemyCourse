# tsconfig - Compiler Options

## links:

- Compiler Options in MSBuild: https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html

# Options

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

    "outDir": "./",

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
