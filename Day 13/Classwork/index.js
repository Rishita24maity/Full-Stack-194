//foreach

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

// let ans=arr.forEach((el,i)=>{
//     return el
// });
// console.log(ans)

// let ans=arr.map((el,i)=>{
//     return el
// })
// console.log(ans);

//filter
// let output=arr.filter((el,i)=>{
//     return el%5==0;
// }).map((el,index)=>{
//     return el*2;
// }).reduce((acc,el)=>{
//     return acc+el;
// })
// console.log(output)

//reduce
// let output=arr.reduce((acc,el)=>{
//     return acc*el
// },1);
// console.log(output)

// let arr =[3,5,1,8,5,34,90,67,45,34,89,100,93]
// let ans=arr.sort((a,b)=>{return b-a});
// console.log(ans)

let data=[
    {name:"watch",price:2000,desc:"Good watch",rating:4},
    {name:"shoe",price:1200,desc:"Good shoe",rating:4.5},
    {name:"car",price:10000,desc:"Good car",rating:5},
    {name:"phone",price:1999,desc:"Good phone",rating:4.2},
    {name:"laptop",price:70000,desc:"Good laptop",rating:4.8},
    {name:"headphone",price:6000,desc:"Good headphone",rating:3},
    {name:"laptop bag",price:3000,desc:"Good bag",rating:5},
]
// data.sort((a,b)=>{return b.price-a.price})
// console.log(data);

data.sort((a,b)=>{
    let nameA=a.name.toUpperCase();
    let nameB=b.name.toUpperCase();

    if(nameA<nameB){
        return -1;
    }
    if(nameA>nameB){
        return 1;
    }
})
console.log(data);

