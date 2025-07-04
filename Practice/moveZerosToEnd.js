function moveZerosToEnd(nums) {
    let count = 0;
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] === 0) {
          count++;
       } else {
          result.push(nums[i]);
       }
    }
  
    while (count > 0) {
       result.push(0);
       count--;
    }
  
    return result;
 }
  
 // Example usage:
 const nums = [0, 1, 0, 3, 12];
 console.log(moveZerosToEnd(nums)); // output = [1,3,12,0,0]
  