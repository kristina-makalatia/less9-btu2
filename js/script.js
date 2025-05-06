let firstName = "anna"; //string
let age = 25; //number
let status = false; //boolean
let x = null; //null
let y; //undefined

let number1 = 5;
let number2 = "10";

let result = number1 * number2;
console.log(result);
console.log(typeof result);

//
let item1 = "Good";
let item2 = "morning";

let result2 = item1 + " " + item2;
console.log(result2);

//
let a = 5;
a += 20; // a = a + 10
console.log(a);

let z = true;
console.log(!z);

//
console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(true && false); //false
console.log(false && true); //false
console.log(true && undefined); //undfined
console.log(true && "hello"); //hello
console.log(true || false); //true
console.log(false || false); //false

//
let number = 7;
if (number > 10) {
  console.log("hello");
} else if (number < 15 && number > 13) {
  console.log("hello2");
} else if (number < 12) {
  console.log("hello3");
} else if (number < 10) {
  console.log("hello4");
} else {
  console.log("error");
}

let resultCondition2 =
  number > 10
    ? "hello"
    : number < 15 && number > 13
    ? "hello2"
    : number < 12
    ? "hello3"
    : number < 10
    ? "hello4"
    : "error";

console.log(resultCondition2);

//
let itemNew = 5;

// if (itemNew < 10) {
//   console.log("hi");
// } else {
//   console.log("error");
// }

let resultCondition = itemNew < 10 ? "hi" : "error";
console.log(resultCondition);
