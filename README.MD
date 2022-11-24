Jest Crash Course - Unit Testing in JavaScript

https://www.youtube.com/watch?v=7r4xVDI2vho

Setup:
1. in terminal go to project folder
2. npm init
3. npm i -D jest
4. create functions.js file
5. create functions.test.js file (jest will know the tests are are  here)

Running first test:
1. create functions in functions.js, export module
2. in funtions.test.js file, import functions.js
3. create a test for each new function
4. in terminal type 'npm test'


in terminal 'npm i axios' for fake API calls

in package.json, under "scripts", put "testwatch": "jest --watchAll"
in terminal use 'npm run testwatch' for instant test run