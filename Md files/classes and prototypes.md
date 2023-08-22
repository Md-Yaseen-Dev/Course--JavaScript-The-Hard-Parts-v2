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

*Declare an empty object and add properties with dot notation*

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

### Creating user3 useing object.create 

Javascript whose output will be an empty object forevermore?

*object.create is going to give us fine granted control over our object later on*

```javascript
//It is built in function

const user3 = OBject.create(null);

user3.name ="roshan",

user3.score = 70,

user3.increment = function(){
    user3.score++
}

```