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

