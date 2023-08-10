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
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

const generateFunc = createFunction();

const result = generateFunc(3);
```

**GLOBAL MEMORY**

| global memory                  |
| ------------------------------ |
| createFunction : func          |
| generateFunc : muliiplyby2func |
| result : 6                     |

---

**generateFunc = <strike>createFunc()</strike> multiplyBy2**
| | local memory|
|---------|----------------|
| |multiplyBy2:func|
|return multiplyBy2| |

**Note** it is deleted returning to generateFunc

---

**result = generateFunc(3)**

It has zero connection with createFunc
||local memory|
|---|---------|
| |num: 3|
|return 6||

---

## Nested Function scope

**Calling a function in the same function call as it was defined**

```javascript
function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }
  incrementcounter(); // it is calling function instead of returning function
}
outer();
```

| Global memory |
| ------------- |
| outer: func   |

---

**Outer()= 1**

|                                        |                                | local memory                    |
| -------------------------------------- | ------------------------------ | ------------------------------- |
|                                        |                                | counter :<strike> 0 </strike> 1 |
| **incrementcounter()**                 |                                | increament:func                 |
|                                        | local memory                   |                                 |
| counter++ &#8594;                      | // it wiil check for counter() |                                 |
|                                        |                                |                                 |
| // not found it will increase to outer |                                |                                 |

---

**call stack**

| call stack           |
| -------------------- |
|                      |
| incrementCounter() 3 |
| outer() 2            |
| global() 1           |

## Retaining Function memory

**Calling a function outside of the function call in which it was defined**

```javascript
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter; // here it is not calling function. it is returning
}

const myNewFunction = outer();

myNewFunction(); // 1
myNewFunction(); // 2
```

| Global memory                      |
| ---------------------------------- |
| outer: func                        |
| myNewFunction: (incrementfunc)func |
| myNewFunction : 1                  |

---

**myNewFunction = <Strike> Outer() </strike>**

|                        | local memory    |
| ---------------------- | --------------- |
|                        | counter : 0     |
|                        | increament:func |
| return incrementFunc() |                 |

_Note_:- It will be deleted after returning the function

**call stack**

| call stack                       |
| -------------------------------- |
|                                  |
| myNewFunction()2                 |
| <strike>outer()2</strike>(poped) |
| global() 1                       |

**Note:-** it will check counter in mynewfunction . if it is not found it will check to the parent function i.e global function.the counter word not found in the global.we think error.But No! it remains in the Mynewfunction = outer(). while returning the function, local memory is deleted .before it will backup the data on the the back function i.e the data is attached to the function definiition .

---

## Function Closure

**Calling a function outside of the function call in which it was defined**

```javascript
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction(); // 1
myNewFunction(); // 2
```

| call stack                           |
| ------------------------------------ |
|                                      |
| myNewfunction: <strike> 1</strike> 2 |
| global() (1)                         |

**Note**:- For above example . In call stack , when MynewFunction returned the value it is popped . and again other myNewFunction is pushed , so it do execution context , In the execution counter is increased i.e counter++. it comes to myNewFunction In backpack there the counter is 1. so adds 1 and then the counter = 2 we go.

**In definition label , the function storage has attached to it a permanent memory.**

That behind the scenes, in javascript immediately gets a hidden property.

square brackets before and after them, in the spec, in the rules of javascript.

Hidden property = `[[scope]]`

## This hidden scope property is hidden behind the function of backpack. and it is permanent meomory

## Mulitple Closure instance

```javascript
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction(); // 1
myNewFunction(); // 2

const anotherFunc = outer();

anotherFunc(); //1
anotherFunc(); //2
```

| Global memory                              |
| ------------------------------------------ |
| outer: func                                |
| myNewFunction: (incrementfunc)func (1),(2) |
| anotherFunc : func (1,2) [backpack]        |
|                                            |

| call stack   |
| ------------ |
|              |
| anotherFunc  |
| global() (1) |

**Individual backpacks**

If we run 'outer' again and sotre the returned 'incrementCounter' function definition in 'anotherFunction'. this new incrementCounter functionwas created in a new execution and therefore has a brand new independent backpack.

--- 

