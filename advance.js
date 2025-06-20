  // Another concepts in for loops 

  // 1. for in loop: 
  // Used to loop over keys (property names) in objects

  // for...in  is best for Objects	(Keys / Indexes)	❌ Not ideal(arrys)

// let student = {
//   name: "Naresh",
//   age: 21,
//   course: "BCA"
// };

// for (let key in student) {
//   console.log(key);          // prints: name, age, course
//   console.log(student[key]); // prints: Naresh, 21, BCA
// }

 // 2. for of loop:
 //  Used to loop over values in iterables like arrays, strings, etc.
// for...of is best for Arrays, Strings	Values	✅ Recommended(arrays)
  
// let items = ["apple", "banana", "mango"];

// for (let fruit of items) {
//   console.log(fruit); // prints: apple, banana, mango
// }
