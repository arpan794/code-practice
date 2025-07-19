function countAllChars(str) {
    const charMap = new Map();

    str = str.toLowerCase().replace(/\s/g, '');

    for (let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    return charMap;
}

// Usage
const input = "Hello World 14423";
const result = countAllChars(input);
console.log(Object.fromEntries(result)); // Convert Map to object for readable output

// Print counts preserving insertion order
for (let [char, count] of result) {
    console.log(`${char}: ${count}`);
}






function countAllChars(str) {
    const charCount = {};
    str.toLowerCase().replace(/\s/g, '').split('').forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1;
    });
    return charCount;
}

console.log(countAllChars("Hello World"));
