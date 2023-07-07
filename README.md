# Useful commands

## Locally in your project.

npm install -D typescript
npm install -D ts-node

## Or globally with TypeScript.

npm install -g typescript
npm install -g ts-node

## Depending on configuration, you may also need these

npm install -D tslib @types/node

## Compile typescript to javascript

tsc .\index.ts

## Run js-script

node index.js

## Initializes a TypeScript project and creates a tsconfig.json file.

tsc --init

## Execute a script as `node` + `tsc`.

ts-node script.ts
