
let arr = [[1, 2], [3, 4, 5], [6, [7, 8]]]
let flat = [];

for (let i = 0; i <arr; i++) {
    if (Array.isArray(arr[i])) {
        for (let j = 0; j <  arr[i].length; j++) {
            if (Array.isArray( arr[i][j])) {
                for (let k = 0; k <  arr[i][j].length; k++) {
                    flat.push( arr[i][j][k])
                }
            } else {
                flat.push( arr[i][j])
            }
        }
    }
    
}




console.log(flat);


