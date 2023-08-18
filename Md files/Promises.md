# PromisesVVCFDCFERW

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


| global memory |
| ------------- |
| display: func |
| futureData: {value:---, onfulfiled arr : [],} |



**working :**

In javascript they don't have own apps.. so javascript uses web-browser.
So, In web-broswer we find network response . In javascript we get label known as fetch


0 ms: futureData = fetch("http://twitter.com/will/i)
 
 fetch is pronged into two parts i.e 1. object , 2. web browser

1. the objects get two properties  i) value:--- , ii) onfulfilled array.

2. web-browser gets network request, the address (domain name): twitter.com  and the path : will/i


* The fetch will set up in the background , they speak to the internet.[twitter header]      

* All the information it go to the back data and stored into futureData

* but its initmately linked to the background work being done.
And the background finsh work may be 200ms to 300ms

* somehow when data comes back and get stored ina property, automatically run some code on it.

* To use it, this empty array in the onfulfilled property. put in there, any function, any code we want to have automatically with the help of javascript .its gonna automatically trigger any functionality stored in the array


* we pass the data like futureData.push an passing fundamental function.

**Note**:- The above one point is incorrect. we can't do that unfortunately but its fundamentally yes. why we can't do that because of hidden property.


* To the sticks a function into that onfulfilled array use .then method.

 * futureData.then(display)

1ms: console.log("me first")
.
.
.
270ms: on complete  display("hi"). then we create execution context and then get a value "hi".