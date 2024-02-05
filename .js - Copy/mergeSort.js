let arr = [3,5,6,77,1]
let start = 0
let end = arr.length-1;
let ans = []

function divide(arr,start,end){
 if(start<end){
    let mid = Math.round((start+end)/2)
    let left = []
    for(let i =0;i<mid;i++){
      left.push(arr[i])
    }
    let ls=0
    let le=left.length-1;

     let right = []
     for (let j = mid; j < arr.length; j++) {
        right.push(arr[j])
     }
     let rs = 0
     let re = right.length - 1;

     divide(left,ls,le)
     divide(right,rs,re)

     function merge(l,r){
            if(left[0]>right[0]){
            let temp = left[0]
            left[0]=right[0]
            right[0]=temp
            }
            if(left.length===1){
             ans.push(left[0])
            } 
            if(right.length===1){
            ans.push(right[0])
            }
    }merge()
}
}
divide(arr,start,end);
console.log(ans);