//  LOOPS IN JAVA SCRIPT:

// looping is nothing but to excute a statment or set of statments in mutliple times

// there are 3 loops in js 

// 1 . for loop statement 
// when you know how many times it will print and where it stopeed .

// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }

// Expression 1 sets a variable before the loop starts (let i = 0). it nothing but initialization that means starting point

// Expression 2 defines the condition for the loop to run (i must be less than 5).it nothing but ending point

// Expression 3 increases a value (i++) each time the code block in the loop has been executed.

// problem 1
//  for (i=10; i<=100; i+=10){
//     console.log(i)
//  }

// problem 2
// for(var i=1; i<=3; i++){
//     console.log(" 3 x " + i + " = " +(3*i))
// }

// problem 3
// let x="naresh"
// for (var a=1; a<=100; a++){
//     console.log(x)
// }

// problem 4

// for (var i=1; i<=3; i++){
//     // console.log("3 + " + i + " = " + (i+3) ) // Normal way
//     console.log(`3 + ${i} =  ${i+3}`)  //template literal  (``)
//         }



//  2. while loop statement 


// while loop statement is same as for loop but the main difference in syntax 
// in for loop we write initialization, conditon, increment in one line , in between the ().between
// but in
// while loop 
// first we write the initialiazation , then condtion inside the (), and the increment in side the block 
// these is way of while loop syntax

// let x=1;                       //initialiazation
// while(x<=10)                   //condtion
//     {
//     console.log(x+ ". "+ "Mr Naresh")
//     x++                        //increment
// }b 


//  3 do-while loop statement 

// it is totallu differ from the for and while loop statement 
// in for , while loop first we write initialization and conditon and increment but in do while we wrote at the last condtion 

//  do{

//  }while()

    //  this is syntax of do-while
    // in other loop statement first we condtion and if the condtion is ture then only the it give output
    // but in do-while if the condtion is false then also it will print output at least one time 
    // let y=1;
    // do{
    //     console.log("hello")
    //     y++
    // } while(y>20)
        // from above the given condtion is y>20 is false then it will print atleast one this is the do-while loop statement

    //  let y=1;
    // do{
    //     console.log("hello")
    //     // document.write("heelo")
    //     y++
    // } while(y<=20)

        //  if the condtionis true it will print based on condtion 
//  let i=0;
//  do{
//     i++;
//     console.log(i)
//  }while(i<9)