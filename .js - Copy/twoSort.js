let arr1 = [3, 2, 1, 4, 40]
let arr2 = [8, 5, 4]
let res = []
let max = 0
let min = 0
for (let i = 0; i < arr1.length; i++) {
    for (j = i; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            let temp = arr1[i]
            arr1[i] = arr1[j]
            arr1[j] = temp
        }
    }
}
for (let i = 0; i < arr2.length; i++) {
    for (j = i; j < arr2.length; j++) {
        if (arr2[i] > arr2[j]) {
            let temp = arr2[i]
            arr2[i] = arr2[j]
            arr2[j] = temp
        }
    }
}
for (let k = 0; k < arr1.length; k++) {
    res.push(arr1[k]);
}
for (let k = 0; k < arr2.length; k++) {
    res.push(arr2[k]);
}

if(res.length!=0){
for (let l = 0; l < res.length; l++) {
        if (res[l] > max) {
            max = res[l]
        };
}
for (let l = 0; l < res.length; l++) {
    if(res[l]<min){
        min=res[l];
    }
}
} 
console.log(res);
console.log(max,'max');
console.log(min,'min');