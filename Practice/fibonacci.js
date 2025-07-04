// Function to print Fibonacci series up to a certain number of terms
function printFibonacci(n) {
    // First two terms of Fibonacci series
    let a = 0, b = 1;
    
    // If the number of terms is less than 1, return an empty array
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    // Print the first Fibonacci number (0)
    console.log(a);
    
    // Print the Fibonacci series
    for (let i = 1; i < n; i++) {
        console.log(b);
        let nextTerm = a + b; // Calculate next Fibonacci number
        a = b; // Update a to the previous Fibonacci number
        b = nextTerm; // Update b to the next Fibonacci number
    }
}

// Example usage
let numberOfTerms = 5; // You can change this to print more or fewer terms
printFibonacci(numberOfTerms);




// program to generate fibonacci series up to a certain number

// take input from the user
// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }
