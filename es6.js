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
