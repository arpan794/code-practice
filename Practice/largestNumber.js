function findLargestNumber(arr) {
    return Math.max(...arr);
  }
  
  // Example
  console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8




  /*  Great question!

You're using the **spread operator (`...`)** in this function:

```javascript
function findLargestNumber(arr) {
    return Math.max(...arr);
}
```

Let's break down **why** it’s needed.

---

### 🔧 What `Math.max()` expects:

The `Math.max()` function expects **individual numbers** as arguments:

```javascript
Math.max(3, 5, 7, 2, 8); // ✅ Works
Math.max([3, 5, 7, 2, 8]); // ❌ Doesn't work – returns NaN
```

If you pass an array directly (`Math.max([3, 5, 7, 2, 8])`), it **doesn't work** because `Math.max()` doesn't know how to handle an array — it expects values like `Math.max(1, 2, 3)`.

---

### ✅ What the spread operator does:

The spread operator `...arr` takes an array and **"spreads"** it into individual values:

```javascript
const arr = [3, 5, 7, 2, 8];
Math.max(...arr); // becomes Math.max(3, 5, 7, 2, 8)
```

So this makes it compatible with `Math.max()`.

---

### 🧠 Summary:

* `Math.max(...arr)` ➜ Correct ✅
* `Math.max(arr)` ➜ Incorrect ❌ (returns `NaN`)

---

Let me know if you’d like to see how it behaves with very large arrays or how it compares to `.reduce()` performance-wise!
 */



/* Awesome! Let’s explore how `Math.max(...arr)` behaves with **very large arrays**, and compare it to `.reduce()` for finding the maximum.

---

## ⚠️ `Math.max(...arr)` with Large Arrays

### 🔥 The Issue:

The spread operator `...arr` expands the array into individual arguments. JavaScript has a **limit** on how many arguments a function can take (usually around **100,000 to 500,000**, depending on the engine).

### ❌ Example of a potential crash:

```javascript
const bigArr = Array(1_000_000).fill().map(() => Math.random());
Math.max(...bigArr); // ❗ May throw "Maximum call stack size exceeded"
```

### ✅ Safe alternative: `.reduce()`

```javascript
const bigArr = Array(1_000_000).fill().map(() => Math.random());

const max = bigArr.reduce((a, b) => Math.max(a, b));

console.log(max);
```

`.reduce()` processes one element at a time and doesn't hit the argument limit — **safe for huge arrays**.

---

## ⚖️ Performance Comparison

Let’s compare the **two methods** for performance:

### 🧪 Code:

```javascript
const arr = Array(100_000).fill().map(() => Math.floor(Math.random() * 100000));

console.time('spread');
Math.max(...arr);
console.timeEnd('spread');

console.time('reduce');
arr.reduce((a, b) => Math.max(a, b));
console.timeEnd('reduce');
```

### ⏱️ Results:

Typical run might show:

```
spread: 5ms
reduce: 8ms
```

* For **small to medium arrays**: `Math.max(...arr)` is slightly faster.
* For **large arrays** (over 100K): `.reduce()` is safer and more reliable.

---

## ✅ Conclusion:

| Method             | Fast?              | Safe for big arrays? | Recommended for                  |
| ------------------ | ------------------ | -------------------- | -------------------------------- |
| `Math.max(...arr)` | ✅                  | ❌ No (stack limit)   | Small arrays                     |
| `arr.reduce()`     | ⚠️ Slightly slower | ✅ Yes                | All sizes, especially large ones |

---

Let me know if you want a reusable utility that automatically chooses the best method based on array size!
  */