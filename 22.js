let arr =[1, 2, 3, 4, 6]
let target= 6
let left = 0
let right = arr.length


while(left<right){
    let sum = arr[left]+arr[right]
    if(sum === target){
        console.log(arr[left],arr[right])
            break;

    }else if(sum < target   ){
        left++
    }else{
        right--
    }

    }



