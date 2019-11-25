// Old JS

var printNameOld = function() {
    console.log("I'm someone you know!");
}

printNameOld();

// ES6

const printNameES6 = () => {
    console.log("I'm someone you know!");
}

printNameES6();

const printAge = (age) => {
    console.log(`My age is ${age}`);
}

printAge(11)




// Old JS

var user = {
    name: "ABC",
    age: 11,
    printName: function() {
        console.log("My name is " + this.name);
        var self = this;
        var fullName = function() {
            console.log("My name is " + self.name + " and my age is " + self.age);
        }
        fullName();
    }
}

user.printName()

// ES6

var user = {
    name: "ABC",
    age: 11,
    printName: function() {
        console.log("My name is " + this.name);
        var fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        }
        fullName();
    }
}

user.printName();



// ES6


const multiply = (a = 1) => {
    console.log(a * a);
}


const list = ['Jake Sparrow', 'John Sinna', 'Akshay Kumar', 'Ajay Devgan', 'Anil Kapoor']
list.forEach(product => console.log(product + " " + Math.random(20).toPrecision(2)))