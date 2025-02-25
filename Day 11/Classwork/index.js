// console.log(this);

// let obj={
//     name:"Shanti Kumari",
//     class:"B Tech",
//     myFunction:function(){
//         console.log(this)
//         console.log('i am a method inside object')
//     },
//     subjects:["DBMS","CH","AI","ML","DL"],
//     newObj:{
//         1:80,
//         nestedFunction:function(){
//             console.log(this)
//             console.log("nested function called")
//         },
//         nestedNewobj:{
//             myMethod:function(){
//                 console.log("another nested method")
//             }
//         }
//     }
// }

// obj.myFunction();
// obj.newObj.nestedFunction()

//CONDITIONS

// let num1 = 10, num2 = 20;
// if(num1<num2){
//     console.log(`${num1} is less than ${num2}`);
// }else if(num1=num2){
//     console.log(`${num1} is equal to ${num2}`);
// }else{
//     console.log(`${num1} is greater than ${num2}`);
// }

//Let suppose you have one num and you have to check for number like:
//if num will be multiple of 3 then print "Fizz"
//if num will be multiple of 5 then print "buzz"
//if num will be multiple of 3 and 5 then print "Fizz Buzz"

// let num = 9;
// if(num%3==0 && num%5==0){
//     console.log(`Fizz Buzz`);
// }
// else if(num%5==0){
//     console.log(`Buzz`);
// }
// else if(num%3==0){
//     console.log(`Fizz`);
// }
// else{
//     console.log(`not a multiple`)
// }

//FOR LOOP

// let num=10;

// for(let i=0;i<=num;i+=2){
//     console.log(i)
// }

// let arr=[1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }
//  let str="Rishita Maity"
//  for(let i =0;i<str.length;i++){
//     console.log("a"+str[i],"p")
//  }

//WHILE LOOP

// let num=5;
// while(num<10){

//     //logic

//     num++;
// }

let arr=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(`even`)
    }
    else{
        console.log(`odd`)
    }
}