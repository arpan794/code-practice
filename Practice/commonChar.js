function mostCommonChar(str) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;

    // Convert to lowercase to ignore case differences and remove spaces
    str = str.toLowerCase().replace(/\s/g, '');

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;

        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return { character: maxChar, count: maxCount };
}

// Example usage
const input = "Hello World";
const result = mostCommonChar(input);
console.log(`The most common character is '${result.character}' and it appears ${result.count} times.`);




function mostCommonChar(str) {
    const charCount = new Map();

    // Preprocess string: lowercase and remove spaces
    str = str.toLowerCase().replace(/\s/g, '');

    // Convert to array and use map to populate the Map

    // more correct to write
    [...str].forEach(char => {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    });

//  [...str].map(char => {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     });

    
    // Find the most common character
    let maxChar = '';
    let maxCount = 0;

    for (let [char, count] of charCount) {
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
    }

    return { character: maxChar, count: maxCount };
}

// Example usage
const input1 = "Hello World";
const result1 = mostCommonChar(input1);
console.log(`The most common character is '${result1.character}' and it appears ${result1.count} times.`);


