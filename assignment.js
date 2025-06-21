// CLASS EXERCISES:

// TASK 1:
// Write a Javascript program to print 'Hello World' 10 times.
//   for (let i = 1; i <= 10; i++) {
//   console.log('Hello World');
// }

// TASK 2: 
// Write a Javascript program to print  multiplication table of 5
//  for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// TASK 3:
// Write a Javascript program to print *****
// let stars = "";
// for (let i = 1; i <= 5; i++) {
//   stars += "*";
// }
// console.log(stars);

// TASK 4: 
//  Write a Javascript program to print the below pattern :
//   *
//   **
//   ***
//   ****

// let pattern = "";
// for (let i = 1; i <= 4; i++) {
//   pattern += "*";         // Add one star in each loop
//   console.log(pattern);   // Print the current line
// }

// TASK 5:
// Write a Javascript program to print the below pattern :
// ****
// ****
// ****
// ****

// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = 1; j <= 4; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// TASK 6:
// Write a Javascript program to print the below pattern :
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678

// for (let i = 1; i <= 8; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// TASK 7:

// Write a Javascript program to print the below pattern :
// 9
// 98
// 987
// 9876
// 98765
// 987654
// 9876543
// 98765432
// 987654321

// for (let i = 9; i >= 1; i--) {
//   let line = "";
//   for (let j = 9; j >= i; j--) {
//     line += j;
//   }
//   console.log(line);
// }

// for (let i = 9; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// } // 12345678
//      1234567
//      123456
//      12345
//      1234
//      123
//      12
//      1


// TASK 8:
// Write a Javascript program to print the below pattern :
// 12345
// 1234
// 123
// 12
// 1

// for (let i = 5; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// TASK 9:
//Write a Javascript program to print the below pattern :
//      8
//     8 8
//    8 8 8
//   8 8 8 8 
//  8 8 8 8 8




// for (let i = 1; i <= 5; i++) {
//   let line = " ";

//   for (let j = 1; j <= 5 - i; j++) {
//     line += " "; // based this line the output will become left angle , right angle, like straight triangle 
//   }

//   for (let k = 1; k <= i; k++) {
//     line += " 8";
//   }

//   console.log(line);
// }

// TASK 10: 
// Write a Javascript program to print the below pattern :
// 1 x 8 + 1 =  9
// 12 x 8 + 2 =  98
// 123 x 8 + 3 =  987
// 1234 x 8 + 4 =  9876
// 12345 x 8 + 5 =  98765
// 123456 x 8 + 6 =  987654
// 1234567 x 8 + 7 =  9876543
// 12345678 x 8 + 8 =  98765432
// 123456789 x 8 + 9 = 987654321

// let numStr = "";
// for (let i = 1; i <= 9; i++) {
//   numStr += i;  
//   let multiplied = Number(numStr) * 8 + i;
//   console.log(`${numStr} x 8 + ${i} = ${multiplied}`);
// }

// TASK 11:
// Write a Javascript program to print the below pattern :
// 1 9 0
// 2 8 2
// 3 7 4
// 4 6 6
// 5 5 8
// 6 4 10

// let num1 = 1;    
// let num2 = 9;    
// let num3 = 0;    

// for (let i = 1; i <= 6; i++) {
//   console.log(num1 + " " + num2 + " " + num3);

//   num1++;        
//   num2--;        
//   num3 += 2;     
// }

// TASK 12.1:
//Print the numbers from 1 to 100 inclusive, each on their own line.
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// TASK 12.2:
// If, however, the number is a multiple of three then print Fizz instead, and if the number is a multiple of five then print Buzz.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// TASK 13:
//Print the numbers from 1 to 1,000 inclusive, 
//each on their own line.
// for (let i = 1; i <= 1000; i++) {
//   console.log(i);
// }

// TASK 14:
// If, however, the number is a multiple of two then 
//print Foo instead, if the number is a multiple of 
//three then print Fizz, 
// if the number is a multiple of five then print Buzz, 
// and if the number is a multiple 
//of seven then print Bar.

//  let i=15;

//   if (i % 2 === 0) {
//       console.log("Foo");
//   }
//   else if (i % 3 === 0) {
//       console.log("Fizz");
//   }
//   else if (i % 5 === 0) {
//      console.log("Buzz");
//   }
//   else if (i % 7 === 0) {
//      console.log("Bar");
//   }else {
//     console.log("Nothing");
//   }

// TASK 14.1:
// If multiple conditions hold true then all replacements
// should be printed, for example 15 should print 
// FizzBuzz.

// for (let i = 1; i <= 10; i++) {
//   let output = "";

//   if (i % 2 === 0) output += "Foo";
//   if (i % 3 === 0) output += "Fizz";
//   if (i % 5 === 0) output += "Buzz";
//   if (i % 7 === 0) output += "Bar";

//   console.log(output || i);
// }



// ASSIGNMENT: 


// 1. * * * * * 
  //  * * * *
  //  * * * 
  //  * *
  //  *

// for (let i = 5; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }


// 2.

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15

// let count = 1;  
// for (let i = 1; i <= 5; i++) {         
//   let line = "";
//   for (let j = 1; j <= i; j++) {       
//     line += count + " ";
//     count++;
//   }
//   console.log(line);
// }

// 3.

// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15

// let count = 1;  
// for (let i = 5; i >=1; i--) {         
//   let line = "";
//   for (let j = 1; j <= i; j++) {       
//     line += count + " ";
//     count++;
//   }
//   console.log(line);
// }
