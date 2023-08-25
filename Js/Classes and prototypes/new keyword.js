function userCreator(name, score) {
    this.name = name;
    this.score = score;
  }

userCreator.prototype.increment = function(){console.log(this.score++)};
userCreator.prototype.something =   function (){
    console.log(this.name)
  }
const user1 =  userCreator("will", 3);
const user2 = new userCreator("tikcel", 5);

user1.something();
user1.increment();
user1.increment();
user2.increment();

/*
Solution 3 - Introducing the keyword that automates
the hard work: new

Benefits:
Faster to write. Often used in practice in professional code
Problems:
95% of developers have no idea how it works and therefore fail interviews
We have to upper case first letter of the function so we know it requires ‘new’ to
work!
*/