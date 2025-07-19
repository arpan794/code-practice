let arr = [1,2,3,4];
let k = [];
k = arr.map((e)=> e>2);
console.log(k);



/*  Great question! Let's walk through this line-by-line:

---

### 👇 Your Code:

```javascript
let arr = [1, 2, 3, 4];
let k = [];
k = arr.forEach((e) => e > 2); 
console.log(k);
```

---

## 🧾 Output:

```
undefined
```

---

## 🧠 Explanation:

### ❗ Why?

`.forEach()` is a JavaScript **array method** used to **iterate over each element** in an array. However:

* It **does not return a new array**
* It **always returns `undefined`**

So, when you do:

```javascript
k = arr.forEach((e) => e > 2);
```

You’re assigning `k = undefined`, because `.forEach()` doesn’t return anything (it's for side effects like `console.log`, updating a variable, etc.).

---

### ✅ If You Want to Filter or Transform:

#### 👉 Use `.filter()` to get values > 2:

```javascript
let k = arr.filter((e) => e > 2);  // [3, 4]
```

#### 👉 Use `.map()` to transform values:

```javascript
let k = arr.map((e) => e * 2);     // [2, 4, 6, 8]
```

#### 👉 Use `.forEach()` for side-effects:

```javascript
let result = [];
arr.forEach((e) => {
  if (e > 2) result.push(e);
});
console.log(result);  // [3, 4]
```

---

### ✅ Summary:

| Method    | Returns a Value? | Purpose                  |
| --------- | ---------------- | ------------------------ |
| `forEach` | ❌ `undefined`    | Iterate, perform actions |
| `filter`  | ✅ new array      | Keep elements that match |
| `map`     | ✅ new array      | Transform each element   |

---

Let me know if you want examples combining these!
 */


// ----------------------------------------------------------------------------------



/* avaScript Array Methods Cheat Sheet

📋 Creating & Filling
- Array(), Array.of(), Array.from(), fill(), concat()

🔄 Adding / Removing
- push(), pop(), unshift(), shift(), splice(), slice()

🔍 Searching
- includes(), indexOf(), lastIndexOf()
- find(), findIndex(), some(), every()

🔁 Iteration & Transformation
- forEach(), map(), filter(), reduce(), reduceRight()
- flat(), flatMap()

🔧 Sorting / Reversing
- sort(), reverse()

📦 Conversion
- join(), toString()

📈 Utility
- length, isArray(), copyWithin()
- entries(), keys(), values()
"""  */



//----------------------------------------------------------------------


/*  Sure! Here’s a handy **JavaScript String Methods Cheat Sheet** for you:

---

# 📚 JavaScript String Methods Cheat Sheet

### 1. **Accessing Characters**

| Method              | Description                             |
| ------------------- | --------------------------------------- |
| `charAt(index)`     | Returns character at `index`            |
| `charCodeAt(index)` | Returns Unicode of character at `index` |
| `[index]`           | Bracket notation to get char            |

```js
"hello".charAt(1); // "e"
"hello"[1];        // "e"
```

---

### 2. **Searching**

| Method                   | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `indexOf(substring)`     | Returns first index of substring, or -1 if not found |
| `lastIndexOf(substring)` | Returns last index of substring                      |
| `includes(substring)`    | Returns `true` if substring exists                   |
| `startsWith(substring)`  | Returns `true` if string starts with substring       |
| `endsWith(substring)`    | Returns `true` if string ends with substring         |
| `search(regex)`          | Searches with regex, returns index or -1             |

```js
"hello world".includes("world");  // true
"hello".startsWith("he");         // true
```

---

### 3. **Extracting Substrings**

| Method                  | Description                                                     |
| ----------------------- | --------------------------------------------------------------- |
| `slice(start, end)`     | Extracts substring from `start` to `end` (not inclusive)        |
| `substring(start, end)` | Similar to slice, but swaps if `start > end`                    |
| `substr(start, length)` | Extracts substring from `start` for `length` chars (deprecated) |

```js
"hello world".slice(0, 5); // "hello"
```

---

### 4. **Modifying Strings**

| Method                              | Description                         |
| ----------------------------------- | ----------------------------------- |
| `toLowerCase()`                     | Converts entire string to lowercase |
| `toUpperCase()`                     | Converts entire string to uppercase |
| `trim()`                            | Removes whitespace from both ends   |
| `trimStart()` / `trimLeft()`        | Removes whitespace from start       |
| `trimEnd()` / `trimRight()`         | Removes whitespace from end         |
| `replace(searchValue, newValue)`    | Replaces first match                |
| `replaceAll(searchValue, newValue)` | Replaces all matches (ES2021+)      |

```js
" Hello ".trim();          // "Hello"
"Hello".replace("H", "J"); // "Jello"
```

---

### 5. **Splitting & Joining**

| Method                    | Description                              |
| ------------------------- | ---------------------------------------- |
| `split(separator, limit)` | Splits string into array using separator |
| `concat(str1, str2, ...)` | Joins multiple strings                   |

```js
"a,b,c".split(",");     // ["a", "b", "c"]
"Hello".concat(" ", "World"); // "Hello World"
```

---

### 6. **Padding**

| Method                              | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| `padStart(targetLength, padString)` | Pads string at start to reach target length |
| `padEnd(targetLength, padString)`   | Pads string at end to reach target length   |

```js
"5".padStart(3, "0"); // "005"
```

---

### 7. **Other Useful Methods**

| Method            | Description                            |
| ----------------- | -------------------------------------- |
| `repeat(count)`   | Repeats the string `count` times       |
| `localeCompare()` | Compares two strings respecting locale |
| `valueOf()`       | Returns primitive string value         |

```js
"abc".repeat(3);  // "abcabcabc"
```

---

### Bonus: Template Literals (not a method, but useful)

```js
const name = "Alice";
const greeting = `Hello, ${name}!`;  // "Hello, Alice!"
```

---

If you want, I can create an **image cheat sheet** for this too or help with examples for any method!
  */