document.write("hello world");
/**
 * HOW TO NAME A VARIABLE- Variables are named according to what you want to do i.e let it reflect the purpose of an action intended
 * NAMING CONVENTION- EXAMPLES:
 *  1.THE LOWER CASE
 *  2. UPPER CASE
 *  3. CAMEL CASE
 *  4. PASCAL
 *  5. SNAKE_CASE
 */
//UPPER CASE
var BOOK;
// LOWER CASE
var book;
//CAMEL CASE
var myBook;
//PASCAL CASE
var MyBook;
//SNAKE CASE
var my_book;

/**
 * JavaScript data types
 * number- this includes integers double and float
 * string- identified by either single or double quotations
 * boolen- these are conditioners that Represents only two values TRUE OR FALSE
 * BigInt- REPRESENT A VERY LARGE NUMBER INCLUDING DOUBLE FLOAT OR INTEGER
 * Objects- Represents a ccollection of items or values
 * Null- This indicates the absence of an object
 * Undefined- This indicates the absence of a value
 */

//number
var num1 = 7; //This is an integer
var num2 = 7.2; //this is a float
//adding two things eg(number and string) together is called concatination
var num3 = "num1" + num2;
console.log(typeof num1);
console.log(num3);

//String
var string1 = "hello world";
console.log(string1);
var string2 = "a quick brown fox jumped over the lazy dog";
console.log(string2);
var string3 = "Mary's fathers name is John";
//concartination
console.log(string3.concat(" hello world"));
//template luterals helps to make evaluations in our strings
var string4 = `the results of 2+2=${2 + 2}`;
console.log(typeof string4);
//lenght(method)
console.log(string2.length);
//startsWith(property)
console.log(string3.startsWith("John"));
//endsWith(property)
console.log(string2.endsWith("g"));
//toUpperCase
console.log(string1.toUpperCase());
//toLowerCase
console.log(string2.toLowerCase());
//slice
console.log(string1.slice(5));
/**
 * string methods
 * 1. lenght(property)
 * 2. concat()
 * 3.startWsith()
 * 4.endsWith()
 * 5.toUpperCase()
 * 6.toLowerCase()
 * 7.slice()
 */

//BOOLEAN
var bool = true;
console.log(typeof bool);
console.log(5 * "a");

//BingInt
var bigN = BigInt(56);
var bigN2 = 5n;
console.log(bigN);

//Objects
var obj2 = new Object(true);
var obj = {
  user1: {
    firstname: "John",
    lastname: "Doe",
  },
};
console.log(obj);
console.log(obj.user1.firstname);
console.log(obj.user1.lastname);
console.log(obj2);
obj.user1.age = 56;
obj.user1[string1] = "bye world";
obj.user1["my book"] = "Harry porter";
console.log(obj);
delete obj.user1.age
console.log('removed', obj)


//ARRAYS
//empty array
var arr = new Array()
var arr1= [5,"hello world",true,{firstname: "john"},[2,"bye world"]]
console.log(arr1[3].firstname)
console.log(arr1[4][1])