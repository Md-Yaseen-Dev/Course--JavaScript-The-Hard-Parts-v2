//single threaded execution
// const num = 3;
// function multiplyBy2(inputNumber) {
//   const result = inputNumber * 2;
//   return result;
// }
// const output = multiplyBy2(num);
// console.log(output)
// const newOutput = multiplyBy2(10);
// console.log(newOutput)


// ----Asynchronicity in javascript-----

// function printhello(){

//     console.log("hello");
// }

// setTimeout(() => {
    
// printhello()}, 1000);

// console.log("Me first")


// function printhello1(){

//     console.log("hellooooo");
// }

// // printhello1()
// setTimeout(() => {
    
// printhello1()},1000);

// console.log("Me first")


// Web API browser

function printHello(){
    console.log("hello");
}
function something(){
    let newarr = []
    for(i=0;i<10;i++){
        
        newarr.push(i)
    }
    printHello();
    console.log(newarr);
}

 setTimeout(printHello,0);
something()
console.log("yes")

