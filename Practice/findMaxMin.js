

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



// different ways

/*const arr = [5, 1, 9, 3];

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min, max); // Output: 1 9 */


// Use of reduce funtion


/* Example: Sum of Array

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 10
Here:

acc starts as 0 (the initial value)

Iteration steps:

acc = 0 + 1 → 1

acc = 1 + 2 → 3

acc = 3 + 3 → 6

acc = 6 + 4 → 10

 */