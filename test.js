let arr = [1,2,3,4,5,6,7,8];
let ind = 3
let val = 10;
let val2 = 105;

for (let i = arr.length+1;i>ind;i--){
    arr[i] = arr[i-2]
}

console.log(arr,'arr');
arr[ind]=val;
arr[ind+1]=val2;

console.log(arr);




// for(let i=0;i<5;i++){
//     for (let j = 0; j < 5; j++) {
//      console.log(j);
//     } 
// }
















// let arr = [1,2,3,4,5];

// console.log(arr,'before');
// arr.map((val,ind)=>{
//     console.log("val = " + val, " ind = " + ind);
// })
// arr.splice(2,1)
// console.log(arr,'after');
// arr.map((val, ind) => {
//     console.log("val = " + val, " ind = " + ind);
// })





















// let arr = [34, 5, 5, 32, 2, 2, 56, 568, 235, 6, 56, 5, 5, 78, 34, 7, 87, 6]
// let max = arr[0]
// for (let i = 0; i < 1; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             max = arr[j]
//         };
//     };
// };
// console.log(max, 'minimum');