// function outer() {

//    let counter = 0;

//    function incrementCounter() {
//       counter++
//       console.log(counter)
//    }

//    return incrementCounter();

//    // if u return function it doesn't return a value until u call the function

// }
// outer(); // 1
// outer(); // 1


// // -------retaining function

// function outer1() {

//    let counter = 0;

//    function incrementCounter(num) {
//       counter++

//       console.log(counter)
//    }

//    return incrementCounter;

//    // it is returning
// }

// let inner = outer1();

// inner() // 1
// inner() // 2
// inner() // 3

// // mulitplyBy2

// function createFunc(){

//    function mulitplyBy2(num){

//        console.log(num *2)
//    }
//    return mulitplyBy2(20)
// }

//  createFunc();


function outer() {
let counter = 0;
   function incrementCounter() {
     counter++;

   console.log(counter);

   }

   return incrementCounter;
 }
 
 const myNewFunction = outer();
 myNewFunction(); // 1
 myNewFunction(); // 2
 
 const anotherFunc = outer();
 
 anotherFunc(); //1
 anotherFunc(); //2

 console.log("global counter")
// if we decalare counter in global it continous as shown below
let counter = 0;
function outer1() {
      function incrementCounter() {
        counter++;
   
      console.log(counter);
   
      }
   
      return incrementCounter;
    }
    
    const myNewFunction1 = outer1();
    myNewFunction1(); // 1
    myNewFunction1(); // 2
    
    const anotherFunc1 = outer1();
    
    anotherFunc1(); //1
    anotherFunc1(); //1
    anotherFunc1(); //1
