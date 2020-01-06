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



// Class in ES6

class List {
    constructor(items, number_of_items) {
        this.items = items;
        this.number_of_items = number_of_items;
    }
    print_list() {
        console.log(`Items: ${this.items}`);
    }
}


class Product extends List {
    constructor(items, number_of_items, amount, cost) {
        super(items, number_of_items);
        this.amount = amount;
        this.cost = cost;
    }
    print_list_info() {
        this.print_list();
        console.log(`Amount is: ${this.amount} and Cost is ${this.cost}.`);
    }
}

const prod = new Product(["Kakdi", "Dadam", "Chiku"], 3, 300, 220);
console.log(prod);

prod.print_list_info();


class Vehicle {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    print_information() {
        console.log(`Name is ${this.name} and price is ${this.price}.`);
    }
    compare_price(second_price) {
        if (this.price === second_price) {
            console.log(`${this.name}'s price and entered price is same.`);
        } else if (this.price < second_price) {
            console.log(`${this.name}'s price is less than given price by ${second_price - this.price}`);
        } else {
            console.log(`${this.name}'s price is greater than given price by ${this.price - second_price}`);
        }
    }
}

const shine = new Vehicle('Shine', '60KG', 80000);
shine.print_information();
shine.compare_price(80000);


// High Order Functions: forEach, map, sort, reduce (and Spread syntax)

const data_of_people = [
    { name: "Kajal", age: 25, occupation: "Engineer", location: "Ahmedabad", isMarried: false },
    { name: "Amrish", age: 23, occupation: "Businessman", location: "Indore", isMarried: false },
    { name: "Hemant", age: 27, occupation: "Professor", location: "Hyderabad", isMarried: true },
    { name: "Priya", age: 21, occupation: "HR Executive", location: "Amritsar", isMarried: false },
    { name: "Ritesh", age: 28, occupation: "Entrepreneur", location: "Bangalore", isMarried: false },
    { name: "Jignesh", age: 35, occupation: "Engineer", location: "Pune", isMarried: true },
    { name: "Nilesh", age: 22, occupation: "Vadapav Shop Owner", location: "Mumbai", isMarried: false },
    { name: "Amit", age: 19, occupation: "Content Writer", location: "Agra", isMarried: false },
    { name: "Jigisha", age: 28, occupation: "Engineer", location: "Rajkot", isMarried: true },
    { name: "Firoz", age: 29, occupation: "Event Management", location: "Lucknow", isMarried: true },
    { name: "Riya", age: 22, occupation: "Entrepreneur", location: "Vadodara", isMarried: false },
    { name: "Girish", age: 24, occupation: "Social Media Marketing", location: "Vadodara", isMarried: true }
]

// will print name - age of everyone
data_of_people.forEach(person => console.log(`${person.name} - ${person.age}`))

// extracting occupation
const occupation_list = data_of_people.map(person => person.occupation)

// removing duplicate from occupation_list array
// using Spread syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

let uniq = [...new Set(occupation_list)];
