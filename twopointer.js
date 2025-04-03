let arr = [1,3,5,7,9]
let diff = 4
let left = 0
let right = arr.length-1
let found = false
while(left<right){
    let finaldiff = arr[left] - arr[right]
    if(finaldiff === diff){
        found = true
        break
    }else if(arr[left] > finaldiff){
        left++

    }else{
        right--
    }
}
console.log(found ? true : false)