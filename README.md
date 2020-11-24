# Node.js Complete Guide

This repository is based on 40+ hours complete Node.js course by Academind including tools to work with node.js from basic to advanced.

## NPM (Node Package Manager)

A tool to add external packages and manage nodejs apps.

### npm scripts

To add custom scripts to make dev workflow easier there are two ways:

1. Script with reserved word: run with `npm <script_name>` e.g. `npm start`
2. Your own custom script name: run with `npm run <script_name>` e.g. `npm run my-script-name`

### Installing npm packages

If project is new and `node_modules` folder not included: `npm install` initializes the project.

Adding new package - Three options:
a) Global (all projects): npm install <package> -g
b) Dev only (not needed in prod): npm install <package> --save-dev
c) Prod only: npm install <package> --save

### nodemon

Enables "hot reloading" so you don't have to restart the server everry time you make a change in your code

## Error handling

1. Syntax errors
2. Runtime errrors
3. Logical errors

## Express & Bodyparser

Init

```
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const app = express()
app.use(bodyparser.urlencoded({extended: false})
```

### Types of requests

- `app.use()` (All http methods)
- `app.get()` (Only GET)
- `app.post()` (Only POST)

## public folder

if you want to expose client to some files (e.g. CSS) in your node.js app, you have to put them into `public folder`

NOTE: when referring to public folder, use "/" as route, not "/public/" as node sees public files are in the root
