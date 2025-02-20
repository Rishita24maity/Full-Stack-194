document.getElementById("parent").style.backgroundColor="blue"

document.getElementById("parent").style.border="1px solid black"

document.getElementById("parent").style.height="300px"

document.getElementById("parent").style.width="80%"

let element = document.createElement("button")

element.innerText="Submit"
element.style.backgroundColor="gray"
element.style.padding="10px"

document.getElementById("parent").append(element)

// var num=10;//assignment
 
// num=15;//re-assignment
// console.log(num)
console.log(num)
var num=10;

function myFunction(){
    
    console.log(num)
}
myFunction()
console.log(num)