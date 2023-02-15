let person ={
    firstname:"Rubi",
    lastname:"Gupta",
    age:54,
    Gender:"Female"
}
person.nationality ="English"
console.log(person);

const p= new Object();
p.name="Srashti";
p.last ="Gupta";
p.eyecolor ="black";
console.log(p.name);
delete p["name"];
console.log(p);

myobj ={
    name :"Aditi",
    age: 24,

    cars:{
        car1:"Merceedes",
        car2:"Ford",
        car3:"BMW"
    }
}
console.log(myobj.cars);

const num ={
    name:"Vishal",
    age:"Gupta",
    cars:[
        {name:"Ford",models:["Fiesta",""]}
    ]
}
const p1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName+" "+ this.id;
    }
  };
  console.log(p1.fullName());

  let message ="Srashti Gupta";
  let x = message.toUpperCase();
  console.log(x);

  const member ={
    number:10,
    city:"Jaipur"
  };
  const mem = Object.values(member);
  console.log(mem);
  let mstr = JSON.stringify(member);
  console.log(mstr);

  const man={
    name:"Krishn",
    language:"Brij",
    get lang()
    {
        return this.language.toUpperCase();
    }

  };
  console.log(man.lang);

  /////
  function mynum()
  {
    let n=0;
    return{
        next: function(){
            n+=10;
            return {value:n , done:true};
        }
    };
  }
  const n =mynum();
  console.log(n.next());
  console.log(n.next());
 console.log (n.next());


function foo(first , last , age , eyecolor)
{
  this.firstName = first;
  this.age=age;
  this.lastname = last;
  this.eyecolor = eyecolor;
}
const m_foo = new foo("X","Y",10,"blue");
foo.prototype.educate ="YES";
console.log(foo());

for (const x of [1,2,3,4,5])
{
  console.log(x);
}

function my()
{
  let n=0;
  return {
    next: function()
    {
      n+=20;
      return {value:n , done : false};

    }
  };
  }
const s = my();
s.next();
s.next();
s.next();
///////////////////////
const letters = new Set(["a","b","c"]);
console.log(letters);
letters.add("d");
letters.add("f");
console.log(letters);
let text="";
letters.forEach(function(value)
{
 console.log(text+=value);
})
const myIterator = letters.values();
//list all values
let t ="";
for (const entry of myIterator)
{
  t+=entry;
}
//entries() method .
//A set has no keys
// entries() return [value ,value] pair instead of [key , value] pair
// this makes sets compatible with maps.

letters instanceof Set;
const per ={
  fn :"JOHN",
  ln:"DOE",
  language:"HINDI"
};
Object.defineProperty(per ,"language",{value :"Yes"});
console.log(per);
const x1 = function(a,b)
{
  return a*b;
}
let z = x1(4,3);
console.log(z);
const myFunction = new Function("a", "b", "return a * b");
let y = myFunction(4, 3);
console.log(y);

function myfunc(fun)
{
  return y*y;
}
  
(function()
{
  let x1 ="srashti";
})();

function myFun(a, b) {
  return a * b;
}

let x3 = myFun(4, 3);
console.log(x3);
function myfun(a,b)
{
  return a+b;
}
let r =  myfun(4,5);
console.log(r);

//Functions are Objects 
function myfunc(a,b)
{
  return arguments.length;
}
console.log(myfunc(4,7,8,9));
function m(m,n)
{
  return m*n;
}
let tt = m.toString(5,6);
console.log(tt);
//to string method returns the function as a string
//arrow function allow a short syntax for writing function expression

const w3 =(x,y)=> x*y;
console.log(w3(6,8));
const s_id = (x,y)=> {return x*y};
console.log(s_id(8,9));

///call function

const Shape= {
full: function(color,num){
return this.edge +" " + this.part+" "+color+" "+num;
}
}
const circle_Shape={
  edge:4,
  part:1
}
const rectangle_shape={
  edge:4,
  part:2
}
console.log(Shape.full.call(circle_Shape));

console.log(Shape.full.call(rectangle_shape));
//with the help of apply() method , you can write a method that can be used on diff. object.

console.log(Shape.full.apply(circle_Shape,["Pink","2"]));
console.log(Shape.full.call(circle_Shape,"yellow","2"));
console.log(Math.min(9,4,1));
const SquareShae ={
  edge:3,
  part:5,
}
let fullname = Shape.full.bind(SquareShae);
/////////////////////Inheritance///////////////////
class car{
  constructor(name ,price)
  {
    this.name= name;
    this.price = price;
  }
}
let car1 = new car("Ford",1000000);
console.log(car1);

//  class spider{
//   constructor(name)
//   {
//     this.names = name;
//   }

// present()
// {
//   return 'I have a '+ this.names;
// }
// }
// class fly extends spider{
//   constructor(name , category)
//   {
//     super(name);
//     this.categories= category;

//   }

//   show()
//   {
//     return this.present()+'IT is a' +this.categories;
//   }
// }
// let bird = new fly("Eagle","Living things");
// console.log(bird.show());

//getters and setter
class Mobile
{
  constructor(model ,price)
  {
this.model = model;
this.price = price;
  }
  get mobiles()
  {
    return this.model;
  }
  set mobiles(x)
  {
    this.mobile =x
  }
}
let mob = new Mobile("MI",5000);

console.log(mob);
// function Gadget()
//  {
//   //private member
//     var name = "ipod";
//     //public function
//     this.getName = function () {
//       return name;
//     };
//   }
// var toy = new Gadget();
// console.log(toy.getName());


function Gadget()
{
  var spec ={
    screen_width: 320,
    screen_height :480,
    color:"White"
  }
};
this.getspec = function(){
  return specs;
};




