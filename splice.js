let arr = [1, 2, 3, 4, 5,6]
let res = []

const test = (ind, val) => {
    let neres = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i == ind) {
            let rea = arr[i]
            res.push(arr[i] = val)
            res.push(rea)
        } else {
            res.push(arr[i])
        }
    }
    if(ind>neres){
        res.push(val)  
    }
    return res
}
let ans = test(1, 79)
console.log(ans);
for (let j = 0; j < res.length; j++) {
    console.log('index = ',j, " val = " + res[j]);
}

