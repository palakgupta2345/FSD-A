// sayhello = () => {
//     console.log("hello function");
// }

// console.log("start");
// setTimeout(sayhello,4000);
// console.log("end");

// console.log("start");
// setTimeout(()=>{
//     console.log("first task completed");
//     setTimeout(()=>{
//         console.log("second task completed");
//         setTimeout(()=>{
//             console.log("third task completed");
//         },3000);
//     },2000);
// },1000);
// console.log("end");

// const myPromise = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success){
//         resolve("Data send success");
//     }
//     else{
//         reject("Data failed to send");
//     }
// });
// myPromise
//    .then(message => console.log(message))
//    .catch((error) => console.log("error fetching data"+error));

function task(message, delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("first task completed",1000)
   .then(() => task("second task completed",2000))
   .then(() => task("third task completed",3000));
