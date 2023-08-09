# Javascript hard parts -v2

- > ## Functions & Callbacks

### Generalize function

**This is a fundamental principle in programming write a little as possible (DRY) don't repeat yourself**

```javascript
function squarednumber() {
  return 8 * 8;
}
squarednumber(); // 64;
```

```javascript
function squarednumber() {
  return 10 * 10;
  squarednumber(); //100;
}
```

for Dont repeat things , we can generalize the function to make it reuable

For Example:- Dynamic of the function . which we can reuse again and again

```javascript
function squarednumber(num) {
  return num * num;
}
```

‘Parameters’ (placeholders) mean we don’t need to decide what data to run our functionality on until we run the function

-Then provide an actual value (‘argument’)
when we run the function Higher order functions follow this same principle.

-We may not want to decide exactly what some of our functionality is until we run our function

_link below:-_
[JS - function callbacks](../Js/Functions%20%26%20callbacks/Generalized%20function.js)

---

### Repeating functionality

In repeat functionality , It creates global memory and then create function label and then create myArray values and at last calling function it goes to call stack and create a execution context in local memory again create values and return to result.

```javascript
function copyArraymultiplyby2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 3);
  }

  return output;
}

const myArray = [1, 2, 3];
const result = copyArraymultiplyby2(myArray);

console.log(result);
```

| Global memory              |
| -------------------------- |
| copyArraymultiplyby2: func |
| myarray:[1,2,3]            |
| result: [2,4,6]            |

**result = copyarraymuliplyby2([1,2,3])**

|                | localmemory    |
| -------------- | -------------- |
|                | array:[1,2,3]  |
|                | output:[2,4,6] |
| output:[2,4,6] |                |

---

| call stack             |
| ---------------------- |
|                        |
| copyarraymultiplyby2() |

      global()

_Given link below_:-

[Js- Repeating functionality](../Js/Functions%20%26%20callbacks/Repeating%20functionality.js)

### Higher Order function

`we may not want to decide exactly what some functionality it until we run our function.`

**The outer function that takes in a function is our higher order function**

**The function we insert is called callback function**

Note:- Takes in a function or passes out a function

Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently

```javascript
function copyarray(arr, instruction) {
  const output = [];

  for (i = 0; i < arr.length; i++) {
    output.push(instruction(arr[i]));
  }
  return output;
}

function multiplyby2(input) {
  return input * 2;
}

const result = copyarray([1, 2, 3], multiplyby2);

console.log(result);
```

| Global memory    |
| ---------------- |
| copyarray: func  |
| multiplyby2:func |
| output: [2,4,6]  |

**output = copyarray(array,instruction)**

|                | localmemory                    |
| -------------- | ------------------------------ |
|                | array:[1,2,3]                  |
|                | instruction: multiplyby2(func) |
|                | output:[2,4,6]                 |
| output:[2,4,6] |                                |

**instruction = multiplyby2**

|               | localmemory |
| ------------- | ----------- |
|               | input: 1    |
| instruction:2 |             |

Note:- it is deleted after getting instruction

---

| call stack             |
| ---------------------- |
| multiplyby2            |
| copyarraymultiplyby2() |

global()

Note:-stack will be delted after returning i.e multiplyby2

_Given link below_:-

[Js - Higher order function](../Js/Functions%20%26%20callbacks/Higher%20order%20function.js)

### Arrow Functions

**Introducing arrow functions - ashorthand way to save functions**

```javascript
// function Declaration
function multiplyBy2(input) {
  return input * 2;
}
const output = multiplyBy2(3);

// This is readabilty. this is easy to read the code
```

```javascript
// Arrow function - Es6

const multiply2 = (input) => {
  return input * 2;
};

//  it stores in global memory same as function.

//  It is designed for legibility , but maybe not for readability

// legibility means nice and short stuff
```

```javascript
const multiplyBy2 = (input) => input * 2;

// here it is automatically inserted return statement.

const output = multiplyBy2(3);


const multiplyBy2 = input => input * 2;

// here parameters and return statement inserted automatically for us.

Note:- it is a very standard style
```

**Anonymous and arrow functions**

- Improve immediate legibility of the code

- But at least for our purposes here  they are ‘syntactic sugar’ - we’ll see their full effects later

- Understanding how they’re working under-the-hood is vital to avoid confusion


**Note:-** More and more the most valuable resource as a  developers is the developer's  time and ability to reasons

- On these marginal cases readabilty comes first.


### Pair programming

The most effective way to grows as a software engineer.

- Researcher :- Avoids blocka by reading everything they can find on their block/blog.

- stackOverflow:- Uses code snippets to fix bug without knowing how they work


**Pair programming**

- Tackle blocks with a partner

- Stay focused on the problem

- Refine techinal communication

- Collaborate to solve problem.


**callbacks**

-I know what a variable is
-I've created a function before
-I've added a CSS style before
-I have implemented a sort algorithm (bubble, merge etc)
-I can add a method to an object’s prototype 
-I understand the event loop in JavaScript
-I understand 'callback functions'
-I can implement filter
-I can handle collisions in a hash table