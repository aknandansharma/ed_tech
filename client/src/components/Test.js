// 1. Check the number whether it’s a prime or not ?

// function isPrime(number) {
//     if(number <= 1) {
//         return false;
//     }

//     for(let i=2; i <= Math.sqrt(number); i++) { //
//         if(number%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(14));

// 2. Given two sorted arrays A and B, find the merged sorted array C by   merging A and B.
// A: [1, 2, 3, 4, 4]
// B: [2, 4, 5, 5]
// C: [1, 2, 2, 3, 4, 4, 4, 5, 5]

// let a = [1, 2, 3, 4, 4];
// let b = [2, 4, 5, 5]

// let c = [...a, ...b]

// let result = c.sort((a, b) => a - b)

// console.log(result)

// let obj1 = { }
// let obj2 = obj1
// console.log(obj1 === obj2, obj1 == obj2)

// const arr = [
//     {name:"ram", age:20, id: 1}, 
//     {name: "rahul", age: 25, id: 2},
//     {name: 'sammer', age: 12, id: 3},
//     {name: 'kapish', age: 10, id: 3}
//     ]

// const arrData = arr.map((i) => {
//     console.log(i.age <= 12)
// })

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
    
//   }


