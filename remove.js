let arr = [1,2,3,4,5]
let narr = []
let input = 3
console.log(arr);
for(let i=0;i<arr.length;i++){
    if(i!=input){
    narr.push(arr[i])
    }
}
console.log(narr);