# Asynchronous javascript

**In javascript asynchronous is a multi-thread techinique that allows your code to run in the background without blocking the execution of other code or programs can run in parellel.**

### Single Threaded Execution
```javascript
// A reminder of how JavaScript executes code
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(num); // 6
const newOutput = multiplyBy2(10); //20
```

**Global memory**

| global memory     |
| ----------------- |
| num:3             |
| multiplyBy2 :func |
| output: 6         |

**output = mulitplyBy2(3)**

|     | local-memory   |
| --- | -------------- |
|     | inputNumber :3 |
|     | result:6       |

**newOutput = mulitplyBy(10)**

|     | local-memory   |
| --- | -------------- |
|     | inputNumber :10 |
|     | result:20     |

**Note: Until we finsh the function we cannot move on to the next line of global. because javascript is synchronous language that means we have to do each line we finish it. then we go to next line**

---

## Asynchronicity in javascript

**Asynchronicity is the backbone of modern web development in JavaScript yet...**

JavaScript is:
- Single threaded (one command runs at a time)
- Synchronously executed (each line is run in order the code appears)
So what if we have a task:
- Accessing Twitter’s server to get new tweets that takes a long time
- Code we want to run using those tweets
Challenge: We want to wait for the tweets to be stored in tweets so that they’re there
to run displayTweets on - but no code can run in the meantime



```javascript

function printhello(){

    console.log("hello")

}
setTimeout(()=>{
    printhello()
},2000)
console.log("me First");
```

here, we might think that "me first" and then "hello". We didn't feel that it is right but we know in reality is closer towards me first, and then hello but makes no sense. 

```javascript

function printhello(){

    console.log("hello")

}
setTimeout(()=>{
    printhello()
},0)
console.log("me First");
```
here, we think that "hello"  first then  "me first". No, its wrong. here first "me first" and then "hello". we feel, what is this language? this is profound. In javascript is not enough.


**JavaScript is not enough - We need new pieces (some of which aren’t JavaScript at all)**

Our core JavaScript engine has 3 main parts:
- Thread of execution
- Memory/variable environment
- Call stack
We need to add some new components:
- Web Browser APIs/Node background APIs
- Promises
- Event loop, Callback/Task queue and micro task queue


## Asynchronous Browser features

