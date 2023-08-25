// Variables and Data Types
let name = "John";
const age = 30;
var isStudent = false;

// Conditionals and Loops
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// Functions
function greet(personName) {
  return "Hello, " + personName + "!";
}

const greeting = greet(name);
console.log(greeting);

// Arrays
const colors = ["red", "green", "blue"];
console.log(colors.length);
console.log(colors[1]);

// Objects
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 25,
};

console.log(person.firstName);

// DOM Manipulation
const element = document.getElementById("myElement");
element.innerHTML = "New content";
element.style.color = "blue";

// Event Handling
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});

// Promises
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully!");
  }, 2000);
});

fetchData.then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});

// Async/Await
async function fetchAsyncData() {
  try {
    const data = await fetchData;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

const cat = new Animal("Cat");
cat.speak();

// Modules (ES6)
// In module1.js
export function add(a, b) {
  return a + b;
}

// In module2.js
import { add } from "./module1.js";
console.log(add(3, 5));

// Error Handling
try {
  // Some code that might throw an error
} catch (error) {
  console.error("An error occurred:", error);
}

// Regular Expressions
const pattern = /\d+/;
const text = "42 is the answer.";
console.log(text.match(pattern));

// Map and Set
const myMap = new Map();
myMap.set("key1", "value1");
console.log(myMap.get("key1"));

const mySet = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(mySet.size);

// Arrow Functions
const square = x => x * x;
console.log(square(5));

// Template Literals
const item = "apple";
const price = 0.5;
console.log(`The ${item} costs $${price}.`);

// Spread Operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log(array2);

// Destructuring
const { firstName, lastName } = person;
console.log(firstName, lastName);

// Callback Functions
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

doSomething(() => {
  console.log("Callback executed.");
});

// Local Storage
localStorage.setItem("username", "john_doe");
const storedUsername = localStorage.getItem("username");
console.log("Stored username:", storedUsername);

// Fetch API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// ES6 Object Spread
const details = { age: 28, ...person };
console.log(details);

// Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// Date and Time
const currentDate = new Date();
console.log(currentDate.toLocaleString());

// Generators
function* countGenerator() {
  let count = 0;
  while (true) {
    yield count;
    count++;
  }
}

const counter = countGenerator();
console.log(counter.next().value);

// Callback Hell (Avoid)
async function fetchDataChain() {
  try {
    const data1 = await fetchData1();
    const data2 = await fetchData2(data1);
    const data3 = await fetchData3(data2);
    console.log(data3);
  } catch (error) {
    console.error(error);
  }
}

// Regular Expression (RegEx)
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const email = "john@example.com";
console.log(emailPattern.test(email));

// Fetch with async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

// Higher-Order Functions
function multiplier(factor) {
  return function (number) {
    return number * factor;
  }
}

const double = multiplier(2);
console.log(double(5));

// Recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// SetTimeout
setTimeout(() => {
  console.log("Delayed log after 2 seconds.");
}, 2000);

// JSON
const jsonData = '{"name": "Alice", "age": 30}';
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);

// Default Parameters
function greetPerson(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetPerson();
greetPerson("Bob");

// Array Filtering
const numbersArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Array Reducing
const numbersToSum = [1, 2, 3, 4, 5];
const sum = numbersToSum.reduce((total, num) => total + num, 0);
console.log(sum);

// Spread in Function Calls
function addNumbers(a, b, c) {
  return a + b + c;
}

const numbersToAdd = [2, 4, 6];
console.log(addNumbers(...numbersToAdd));

// Local Storage
localStorage.setItem("username", "john_doe");
const storedUsername = localStorage.getItem("username");
console.log("Stored username:", storedUsername);

// Async forEach
async function processItems(items) {
  for await (const item of items) {
    await processItem(item);
  }
}

// Optional Chaining
const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Wonderland"
  }
};

const cityName = user?.address?.city
