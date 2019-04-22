# April 17, 2019

## Template Literal
```JavaScript
//console.log(`Hello!`
`continues  on this line`); // ES6 way

console.log('Hello! \n' + 'continues on this line');

const name = 'Jimmy';
const day = 'wednesday';
const instructor = {
    name: CHris,
    lesson:ES6,
    greet: function(){
        return 'Hello ${this.name} ${this.lesson} is my favorite day'
    }
}

console.log('Hello' + name + day + 'is my favorite day'); // ES5

console.log(`Hello ${name} ${day} is my favorite day`); //ES6 way interpellation

console.log(instructor.greet());
```

## Scope

 ```Javascript

function foo() {
    let x = true;
    if(x) {
      let usingLet = "I'm using let";
    }
    console.log(usingVar); // undefined because usingLet is not in this scope
}
 foo();
```
## Default Args
  
```JavaScript

const instructors = ['Jimmy', 'Chris']
instructors = ['Jim', 'chriss']// error, can't reassign a value to a const variable

//const also accepts uppercase

function hello(name){
    name = name || 'Mystery Person'
    console.log("Hello" + name + " !")
}
hello('Bobby'); //Hello Bobby !

hello();// Hello Mystery person !

//ES6
function hello(name = 'Mystery Person'){
    console.log(`Hello ${name} !`)
}
hello('Bobby'); //Hello Bobby !

hello();// Hello Mystery person !
```
## Arrow Functions
```JavaScript

const teacher = {
    name:'Jim',
    speak:function(){
        //bind a function to specific context
        let boundFunction = () => {
            console.log("later my name is" + this.name);
        };
        // bound function will always run in bound context
        setTimeout(boundFunction, 1000)
    }
}
teacher.speak();
// Lexical Binding - they bind to cope where defined not where they are used 
```

## Map Function

```Javascript

let students = [
    {name: 'Hugo'},
    {name: 'Candace'},
    {name: ' Taylor'}
]

// doesn't have to have a return statement as long as its on the same line
let names = students.map((student)=> student.name);
//Same as
let names = students.map((student)=> {
    return student.name
})
console.log(names);
```

```JavaScript

function add() {
    console.log( "arguments object:", arguments);
//turns the numbers variable into an array; making it able to use array properties
//slice takes a selected object and puts it into an array
    var numbers = Array.prototype.slice.call(arguments);

    var sum = 0;
    //iterates over each number you put into the object and runs the function sum += number
    //sum += number is the same as sum = sum + number meaning each run through the sum is added to the new number
    numbers.foreach((number) =>{
        sum += number;
    })
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8,));
```

## Rest parameter

```JavaScript
let add = (...numbers) => {
    console.log("rest parameters", numbers);

    let sum = 0;
     
    numbers.foreach(function(number) {
        sum +=number;
    });
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8));

let add = (...numbers)=>numbers.reduce((sum,number)=>sum+=number,0);

function addStuff(x,y, ...z){
    return(x+y) *z.length
}

console.log(addStuff(1,2, "Hello", "World",true, 99));
```

## Spread Operator
```JavaScript
let random = ["Hello", "World",true,99];
let newArray = [1,2, ...random, 3 ];
console.log(newArray);
//[1,2, "Hello", "World", true, 99, 3]

let spreadEx = (item) => {
    let spreadArray = [...item]
    console.log(spreadArray);
    return spreadArray
}

spreadEx("Hello World")
// spreads out Hello World literally

let rest = (...z) => {
    console.log(z)
    return z
}

restEx("hello", "world")
//["hello", "world"]
```

## Array destructuring

```Javascript
var students = ["Julian", "AJ", "Matt"];
var y = students[0]
var x = students[1]
var z = students[2]

console.log(x,y,z)

var students = ["Julian", "AJ", "Matt"];
let[x,y,z] = students

let [x, ,z] = students

let [x, ...rest] = students;
console.log(x, rest);
//Julian ["Aj", "Matt"]
```
```JavaScript
let [x, ...y] = students; // x = 'Julian', y = ['AJ', 'Matt']
console.log(x, y); // Julian ['AJ','Matt']
```

## Object destructuring

 In much the same way that arrays can be destructured, so can objects.  
```JavaScript
let car = {
    make: 'Honda',
    year: 2005
}
 let {make: x, year: y} = car; // x = 'Honda', y = 2005
```

```JavaScript
function something({make, year=2001}) {
    console.log(make, year); // Honda 2005
}
 something(car);
```
## OOP

```JavaScript
function Person(name, job) { 
    this.name = name;
    this.job = job;
}
```

```JavaScript
Person.prototype.getName = function() {
    return this.name;
}
 var goodGuy = new Person('Aang' /* "It's pronounced 'Ong', right?" -M. Knight Shamalan */, 'Avatar');
// Needs the new operator so the function doesn't just run normally.
console.log(goodGuy.getName());
```

```JavaScript
class Person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
     getName() {
        return this.name;
    }
     getJob() {
        return this.job;
    }
}
```

Classes can extend other classes to inherit their properties as well as add new ones.  
```JavaScript
class SuperHero extends Person {
    constructor(name, heroName, superPower) {
        super(name, heroName); // Calls the parent class's constructor function.
        this.superPower = superPower;
    }
	
    secretIdentity() {
        return `${this.job} is really ${this.name}!`;
    }
}
 let batman = new SuperHero('Bruce Wayne', 'Batman', 'money');
console.log(batman.secretIdentity()); // Batman is really Bruce Wayne!
```

## Getters and Setters

 I looked this up on MDN and it's nothing like what was taught in class, so here's how it works:  
```JavaScript
class Person {
    constructor(name) {
        this.name = name;
    }
     set job(job) {
        if(job == 'Transportation') {
            this.job = 'Soon to be automated away.';
        } else {
            this.job = job;
        }
    }
     get job() {
        if(this.job != 'Soon to be automated away.') {
            return `${this.job}: safe for the forseeable future.`;
        } else {
            return this.job;
        }
    }
}
 let trucker = new Person('Jim Gordon');
trucker.job = 'Transportation';
console.log(trucker.job); // Soon to be automated away.
 let programmer = new Person('Steve Wozniak');
programmer.job = 'Programmer';
console.log(programmer.name);
```
