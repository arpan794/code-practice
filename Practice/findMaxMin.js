

function findMaxMin(arr) {

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++){
        const element = arr[i];
        if (arr[i] > max) max=arr[i];
        if (arr[i] < min) min=arr[i];
      
    }
  return {max,min}
    
}

let arr = [3,5,7,2,8];
let result = findMaxMin(arr);
console.log("Max:",result.max, "Min:",result.min);

