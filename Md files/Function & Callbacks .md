# Javascript hard parts -v2

 - >  ## Functions & Callbacks


### Generalize function

**This is a fundamental principle in programming write a little as possible (DRY) don't repeat yourself**

For Example:-

```javascript
function squarednumber(num) {
  return num * num;
}
```
*link below:-*
[JS - function callbacks](../Js/Functions%20%26%20callbacks/Generalized%20function.js)

### Repeating functionality

In repeat functionality , It creates global memory and then create function label and then create myArray values and at last calling function it goes to call stack and create a execution context in local memory again create values and return to result.

*Given link below*:-

[Js- Repeating functionality](../Js/Functions%20%26%20callbacks/Repeating%20functionality.js)

### Higher Order function 

`we may not want to decide exactly what some functionality it until we run our function.`

**The outer function that takes in a function is our higher order function**

**The function we insert is called callback function**

*Given link below*:-

[Js - Higher order function](../Js/Functions%20%26%20callbacks/Higher%20order%20function.js)