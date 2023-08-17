function outer() {

   let counter = 0;

   function incrementCounter() {
      counter++
      console.log(counter)
   }

   return incrementCounter();

   // if u return function it doesn't return a value until u call the function

}
outer(); // 1
outer(); // 1


// -------retaining function

function outer1() {

   let counter = 0;

   function incrementCounter(num) {
      counter++

      console.log(counter)
   }

   return incrementCounter;

   // it is returning
}

let inner = outer1();

inner() // 1
inner() // 2
inner() // 3

// mulitplyBy2

function createFunc(){

   function mulitplyBy2(num){

       console.log(num *2)
   }
   return mulitplyBy2(20)
}

 createFunc();


