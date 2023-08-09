# Closure

- Closure is the most esoteric of javascript concept

- Enables powerful pro-level functions like 'once' and 'memorize'

- Many javascript design patterns including the module pattern use closure

- Build iterators, handle partial application and maintain state in an asychronous world.

**Functions with Memories**

- When our function get called, we create a live store of data(local memory/variable enivornment/state) for that function's execution context.

- When the function finshes executing. its local memory is deleted (except the returned value)

- But what if our funcitons could hold on to live data between executions?

- This would let our function definitions have an associalted cache/Persistent memory

- But it all starts with us returning a function from another function.


## Returning Functions


**Functions can be returned form other functions in javascript**

```javascript

function createFunction(){

    function multiplyBy2(num){

        return num*2;
    }

    return multiplyBy2;
}

const generateFunc =  createFunction();

const result = generateFunc(3)
```