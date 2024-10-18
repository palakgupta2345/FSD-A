let ar = [1,2,2,3,33,45];
// let newar = ar.map((x)=> x*2);
// console.log(newar)
// let newar= ar.filter((x)=> x%2==0);
// console.log(newar);
// let newar= ar.filter((x)=> x%2==0).map((x)=> x*3);
// let newar= ar.reduce((x,y) => x+y,0);
// console.log(newar);
// let newar = ar.filter((x)=>x%2==0).map((x)=>x*4).reduce((x,y)=> x+y,0);
// console.log(newar);
const students = [
    {name : "Alice", score : 61},
    {name : "Bob", score : 64},
    {name : "Rahul", score : 50},
    {name : "Rajesh", score : 45}
];
let newar = students.filter((x)=>x.score>60).map((x)=>x.score*2).reduce((x,y)=>x+y,0);
console.log(newar);