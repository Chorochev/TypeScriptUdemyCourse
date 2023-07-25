# tsconfig - Compiler Options

## links:

- Compiler Options: https://www.typescriptlang.org/tsconfig

# Commands

## tsc

Compiles the current project (tsconfig.json in the working directory.)

    tsc file1.ts file2.ts

Ignoring tsconfig.json, compiles the specified files with default compiler options.

    tsc -b

Build a composite project in the working directory.

    tsc --init

Creates a tsconfig.json with the recommended settings in the working directory.

Automatic compilation
--watch, -w Watch input files.

    tsc --watch
