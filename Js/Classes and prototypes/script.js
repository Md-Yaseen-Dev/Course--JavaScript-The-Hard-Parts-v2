
const user1 = {
    name:"chess",
    score:3,
    increment: function(){return user1.score++;},
}

console.log( user1.increment());
console.log( user1.increment());
console.log( user1.increment());
console.log( user1.increment());
console.log( user1.increment());


//can functionality on the pertinenet data


// ---creting user2

const user2 = {}
user2.name = "carroms";
user2.price =100;

 const incrementy = function (){

    console.log(user2.price = 12)
}
user2.increment = function da3(){
     return user2.price++
}
console.log(user2.increment())




//  creating using user3 object.create - javascript whose output will be an empty object forevermore


function usercreate(name,score){
const user3 = Object.create(null);

user3.name = name ;
user3.score =score;
user3.increment = function(){
     user3.score++
}

return user3
}

let user11 = usercreate("waheed",100);

console.log(user11)

let user22= usercreate("waheed",100)

console.log(user22)

// console.log(user11.increment())

// our code is getting repeitive we are breaking our dry principle and suppose we have  millions of users what could we do ?


