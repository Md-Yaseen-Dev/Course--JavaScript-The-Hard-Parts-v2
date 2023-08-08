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

_Given link below_:-

[Js- Repeating functionality](../Js/Functions%20%26%20callbacks/Repeating%20functionality.js)

### Higher Order function

`we may not want to decide exactly what some functionality it until we run our function.`

**The outer function that takes in a function is our higher order function**

**The function we insert is called callback function**

_Given link below_:-

[Js - Higher order function](../Js/Functions%20%26%20callbacks/Higher%20order%20function.js)
