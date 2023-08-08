# Javascript Principles

- > ## Threads of Execution

### Threads of execution depends on two things (or) Features of Javascript

**Threads of Execution**:- Goes through the code line by line and runs/execute each line.

1. It threads its way down and executes, that's fancy word for doing the code.(threads of execution)

2. The stuff that encouters, if it is saying save something like, variable and constant or even some code itself known as function. and saves that stuff in computer memory.

```Javascript
Example:-
const num = 3
function multiplyBy2(inputElement)                               {
    const result = inputElement * 2;

    return result
}

const output = multiplyBy2(num);
const newOutput  = multiplyBy2(10);



```

**Execution of context:-**

- Thread of Execution
- Memory

<!-- table for memory -->

| Memory            |
| ----------------- |
| num:3             |
| multiplyBy2: func |
| output : 6        |

---

<!-- table for local storage for output -->

**Output : MultiplyBy2**
| | Local memory |
| -------------- | --------------- |
| | inputNum:3 |
| | result : inputNum\*2 |
| return: result | result: 6 |

Note:- There is only one Execution context. and local memory will be deleted after returning the value.

## Call Stack

- Javascript keeps track of what function is currently running [where the thread of execution]

- Run a function - add to stack

- Finish runnign the function -Js remove it from call stack

- Whatever is top of the call stack - Thats the function we're currently running

<!-- table for stack  -->

| call stack     |
| -------------- |
|                |
| multiplyBy2 () |

global()

Note:- The function that enter the call stack and return the result . and then the function is poped and at bottom of the call stack there will be global

* for suppose there are function and nested function . so after returning the value of  nested function it is popped and function will be bottom of the stack. In simple words parent will be the bottom of the stack after returning the result.
