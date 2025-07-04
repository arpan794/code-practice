function reverseString(str) {

    let reversedString = "";

    for (let i = str.length-1; i >= 0 ; i--) {
         reversedString += str[i];
    }
    return reversedString;
}

let str = "hello world";
console.log(reverseString(str));






function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example
  console.log(reverseString("hello")); // Output: "olleh"