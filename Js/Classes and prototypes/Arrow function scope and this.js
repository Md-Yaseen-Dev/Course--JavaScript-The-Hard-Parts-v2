function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
  
    newUser.name = name;
    newUser.score = score;
    return newUser;
  }
  const userFunctionStore = {
    increment: function () {
       add1 = (question) => {
  
        console.log(this.score++,question);
      }
      add1("before: add1 is  not undefined ???");
    }
}

const user1 = userCreator("will", 3);
const user2 = userCreator("tikcel", 5);

user1.increment();
user1.increment();
user1.increment();