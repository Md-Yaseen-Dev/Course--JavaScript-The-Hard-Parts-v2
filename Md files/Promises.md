# Promises

**A Promise is an object representing the eventual completion or failure of an aynchronous operation.**

**ES6 + Solution (Promises)**

Using two pronged facade funcations taht both.

- intiate background wbe browser work and

- Return a placeholder object(promise) immediately in javascript

Example

```javascript
function display(data) {
  console.log(data);
}

const funtureData = fetch("twitter.com/will/i");
futureData.then(display);

console.log("me first");
```

| global memory                                 |
| --------------------------------------------- |
| display: func                                 |
| futureData: {value:---, onfulfiled arr : [],} |

**working :**

In javascript they don't have own apps.. so we use web-browser for javascript.
So, In web-broswer we find network response . fetch is the label of javascript which works for the network response from the web-browser.

0 ms: futureData = fetch("http://twitter.com/will/i)

fetch is pronged into two parts i.e 1. object , 2. web browser

1. the objects get two properties i) value:--- , ii) onfulfilled array.

2. web-browser gets network request, the address (domain name): twitter.com and the path : will/i

- The fetch will set up in the background , they speak to the internet.[twitter header]

- All the information it go to the back data and stored into futureData

- but its initmately linked to the background work being done.
  And the background finsh work may be 200ms to 300ms

- somehow when data comes back and get stored in a property, automatically run some code on it.

- To use it, this empty array in the onfulfilled property. put in there, any function, any code we want to have automatically with the help of javascript. Its gonna automatically trigger any functionality stored in the array

- we pass the data like futureData.push an passing fundamental function.

**Note**:- The above one point is incorrect. we can't do that unfortunately but its fundamentally yes. why we can't do that because of hidden property.

- To the sticks a function into that onfulfilled array use .then method.

- futureData.then(display)

1ms: console.log("me first")
.
.
.
270ms: on complete display("hi"). then we create execution context and then get a value "hi".

---

**then method and functionality to call on completion**

- Any code we want to run on the returned data must also be saved on the promiseobject
- Added using .then method to the hidden property ‘onFulfilment’
- Promise objects will automatically trigger the attached function to run (with its
  input being the returned data

---

### But we need to know how our promise-deferred functionality gets back into JavaScript to be run

```javascript
function display(data) {
  console.log(data);
}
function printHello() {
  console.log("Hello");
}
function blockFor300ms() {
  /*blocks js thread for 300ms*/
}
setTimeout(printHello, 0);
const futureData = fetch("https://twitter.com/will/tweets/1");
futureData.then(display);
blockFor300ms();
console.log("Me first!");
```

| Global memory                                       |
| --------------------------------------------------- |
| display:func                                        |
| printhello:func                                     |
| blockfor300ms:func                                  |
| futureData: {value:---, onfulfilled:[display:func]} |

**Working**:-

0 ms: setTimeout(printhello,0)

1 ms : futureData = fetch("http:// twitter.com/will/i")

- The fetch will set up in the background , they speak to the internet.[twitter header]

- All the information it go to the back data and stored into futureData

- but its initmately linked to the background work being done.
  And the background finsh work may be 200ms to 300ms

- To the sticks a function into that onfulfilled array use .then method.

futureData.then(display)

2ms : blockfor300ms and create execution context and enter into the call stack; (starts)

301ms:blockfor300ms results the function

302ms: console.log("Me first");

so it prefer microtask queue first . and put it into call stack

303 ms : display("hi") create execution and gets the value "hi"

304 ms : printhello() and get hello

---

**Web browser**

| name            | iscomplete | Oncompletion     |
| --------------- | ---------- | ---------------- |
| Timer           | 0ms :yes   | printhello()     |
| network request | 270:yes    | futureDate.value |

- setTimeout will create a callback queue and it will wait to complete call stack and global().

| _callback queue_ |
| ---------------- |
|                  |
| printhello()     |

| _microtask queue_ |
| ----------------- |
| display ()        |

Note:- the queue will be differnet for every web-browser. so it will be in another queue

| **Call stack**    |
| ----------------- |
| printhello(4)     |
| display() (3)     |
| blockfor300ms (2) |

global()

**how console works**

| console.log |
| ----------- |
| 302 : Me first |
|303:hi|
|304: hello|

---

We have rules for the execution of our asynchronously delayed code
---

Hold promise-deferred functions in a microtask queue and callback function in a
task queue (Callback queue) when the Web Browser Feature (API) finishes

Add the function to the Call stack (i.e. run the function) when:
- Call stack is empty & all global code run (Have the Event Loop check this
condition)
Prioritize functions in the microtask queue over the Callback queue.


Promises, Web APIs, the Callback & Microtask Queues
and Event loop enable:
---

Non-blocking applications: This means we don’t have to wait in the single thread
and don’t block further code from running

However long it takes: We cannot predict when our Browser feature’s work will
finish so we let JS handle automatically running the function on its completion

Web applications: Asynchronous JavaScript is the backbone of the modern web -
letting us build fast ‘non-blocking’ applications