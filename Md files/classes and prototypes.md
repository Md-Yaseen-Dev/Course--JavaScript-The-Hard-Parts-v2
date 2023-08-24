# Classes and Prototypes

## Objects - store functions with their associated data!

_This is the principle of encapsulation - and it’s going to transform how we can ‘reason about’ our code_

```javascript
const user1 = {
  name: "Will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};
user1.increment(); //user1.score -> 4  // why i am getting undefined 🤔
```

Let's keep creating our objects. What alternative techniques do we have for creating objects?

### Creating user2 user dot notation

_Declare an empty object and add properties with dot notation_

```javascript
const user2 = {};

user2.name = "hamarin";

user2.score = 10;

user2.increment = function () {
  user2.score++;
};

console.log(user2.increment()); //11 but undefined why 🤔
```

**Global memory**

| Global memory                                   |
| ----------------------------------------------- |
| user2 ={name:"carrom", score:10,increment:func} |

---

### Creating user3 using object.create

Javascript whose output will be an empty object forevermore?

_object.create is going to give us fine granted control over our object later on_

```javascript
//It is built in function

const user3 = Object.create(null);

user3.name = "roshan",
  user3.score = 70,
  user3.increment = function () {
    user3.score++;
  };
```
oo
**Solution 1. Generate objects using a function**

```javascript
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator("will", 3);
const user2 = userCreator("Tim", 5);
```

**global memory**

| global memory                                          |
| ------------------------------------------------------ |
| userCreator: func                                      |
| user1 : {name: "will", score : "3", increment : func } |
| user1 : {name: "Tim", score : "5", increment : func }  |

**Local memory- user1 = userCreator("will", "3")**

|     | Local memory                                    |
| --- | ----------------------------------------------- |
|     | name: will                                      |
|     | score : 3                                       |
|     | newUser : {name:will,score:3 , increment: func} |

_Note:- this execution context will be deleted but a function on it , that function was linked to all the surrounding memory. with the help of backpack._

**Local memory- user1 = userCreator("Tim", "5")**

|     | Local memory                                   |
| --- | ---------------------------------------------- |
|     | name: Tim                                      |
|     | score : 5                                      |
|     | newUser : {name:Tim,score:5 , increment: func} |

_Note:- this execution context will be deleted but a function on it , that function was linked to all the surrounding memory. with the help of backpack._



**Note:- We cant store the same function twice fundamentally because the code of name and score is different and increment is identical**


## Prototype chain

**solution:2 using the prototype chain**

```Text
Store the increment function in just one object and have the interpreter. if it doesn't found the function on user1. look up to that object to check if it's there.

Link user1 and functionStore so the interpreter, on not finding increment, makes sure to check up in functionStore where it would find it.

Make the link with object.create() technique

```


```javascript

function userCreator(name, score){
const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;

}
const userFunctionStore = {
 increment: function(){this.score++;},
 login: function(){console.log("Logged in");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```