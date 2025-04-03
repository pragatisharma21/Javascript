let arr = [1, 3, 5, 7, 9]
let diff = 4
let left = 0
let right = 1

while(right < arr.length){
    let current = arr[right]-arr[left]
    if(current === diff){
        console.log(arr[left], arr[right])
        break
        
    }else if(current < diff){
        right ++

    }else{
        left--
    }
    
    
}