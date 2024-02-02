let arr = [1,2,2,3,45,45];
for(let i = 0;i<arr.length;i++){
   if(arr[i]===arr[i+1]){
       return
    } if (arr[i] === arr[i + 2]) {
        return
    }
    if (arr[i] === arr[i + 3]) {
        return
    }
    if (arr[i] === arr[i + 4]) {
        return
    }
    console.log(arr[i]);
}
