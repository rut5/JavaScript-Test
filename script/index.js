// exercise 1 

console.log("Hello World")

// exercise 2

let myName; 
myName = "Rut"

let myAge;
myAge = 20;

let favColor;
favColor = "green";

console.log(`My name is ${myName} and I am ${myAge} years old. My favorite color is ${favColor}.`)

// exercise 3

let A;
A = 8;

let B;
B = 7;

console.log(A + B)

console.log(A - B)

console.log(A * B)

console.log(A / B)

// more

if (A > B) {
    console.log(true);
} else {
    console.log(false)
}

let students = 20;
let extraStudents = students + 3;
extraStudents = extraStudents % 2;
console.log(students, extraStudents)

//  1. Ask the user to enter a price tag using prompt(), for example: $49.99  

// 2. Convert the input from string to number  

// 3. Reduce the price by 10 percent  

// 4. Print out the new price using console.log(), for example: 'Your new price is: $44.99'  

let priceInput = prompt("Enter price in dollar")

console.log(typeof priceInput)

let price = parseFloat(priceInput.replace('$', ''));

console.log(typeof price)

price = price * 0.9

console.log("Your new price is: " + price + "$")

