let str= "SV University"
console.log(str.length)

console.log(str.length-1)
console.log(str[2])

console.log(str[str.length-1])

let arr=[1,2,3,"Rishita",1.12,true,false,null,undefined,""]
console.log(arr[arr.length-2])
console.log(arr[3])

//arr.push("Ipsita")

arr[4]="Ipsita"
console.log(arr)
arr.pop();
console.log(arr)

let obj={
    dipankar:{className:"B Tech",rn:195,subject:["NM","DBMS","DSA","RM"] },
    iman:{className:"B Tech",rn:196,subject:["NM","DBMS","DSA","RM"] },
    1:undefined
}
console.log(obj)
console.log(obj.dipankar)

obj.dipankar="My Name"
console.log(obj.dipankar)
// console.log(obj.dipankar.subject[1]);

delete obj.dipankar
console.log(obj);

obj.rishita={rn:123,hobbies:["drawing","reading"]}
obj.rishita={rn:1983,hobbies:["drawing","reading"]}
console.log(obj)

let name="Amar Mahato";
let Class="B Tech";
let hobbies=["Games","Singing"]

let newObj={
    name,Class,hobbies
}
console.log(newObj);

let ans=[1,2,3,[9,4,6,[5,1,9]]];
console.log(ans[3][3][0])

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}
console.log(superHeroes["1"].villains[0].health)
console.log(superHeroes["2"].power[0])
console.log(superHeroes["2"].villains[1].name)
console.log(superHeroes["2"].metadata.age)
console.log(superHeroes["1"].metadata.favouriteColor)
