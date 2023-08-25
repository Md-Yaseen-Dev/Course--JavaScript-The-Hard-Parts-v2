function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);

  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const userFunctionStore = {
  increment: function () {
    function add1(question) {
      console.log(this.score,question);
    }
    add1("before: add1 is undefined ???");

    add1.call(this,"hey working")
    /*
         if you invoke inside the function it will be undefined default
         */
    //  console.log(this.score++)
  },
};

// --------------objects-----------------------
const user1 = userCreator("will", 3);
const user2 = userCreator("tikcel", 5);

user1.increment();
user1.increment();
user1.increment();
userFunctionStore.increment.call(user1);
// console.log(user1.increment());

// ---- using explict method--------------
// function increment2() {
//   console.log(this.name, this.score++);
// }


// increment2.call(user2);
// increment2.call(user2);

// console.log(user2.increment());

/* local memory
-------------------user1.increment()--------------------

this.score++        ==  this : user1;

// ---- intriguing challenges--------------- 

if we put this.score++ in new function.i.e create and invoke a new function inside increment--

-He never really do this i practice but for making a point

maybe not the best earlier implementations of javascript.

Especially as in other languages it's absoultely standared that while you are inside the object.

this.score++ ==      this : global

which would then be undefined by default and we would try and increment it. that's one of those glorious bugs.


Not a bug its just like I guess if we know how its working.

In old days :-

that = this

so to run this in a invoke function do explictly i.e by using call method, apply method or bind method.



*/
