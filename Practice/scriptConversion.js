console.log(1 + '2');      // '12'   (string)
console.log('3' + 4 + 5);  // '345'  (string)
console.log('A' - 1); // → NaN
console.log(1 - 'A'); // → NaN
console.log('5' - 2);  // 3 (string coerced to number)
console.log('A' - 1);  // NaN (non-numeric string → NaN)
console.log(true + 1);   // 2
console.log(false * 10); // 0
console.log(null + 1);      // 1   (null becomes 0)
console.log(undefined + 1); // NaN (undefined can't become a number)


/*  Great! Let's break down **Type Coercion** in JavaScript — a key concept that can explain a lot of unexpected results.

---

## 🔄 What Is Type Coercion?

> **Type coercion** is when JavaScript **automatically converts** one data type into another during evaluation — especially in operations between different types (e.g. string and number).

---

## 🔑 Two Types of Coercion

| Type         | Example       | Result          |
| ------------ | ------------- | --------------- |
| **Implicit** | `1 + '2'`     | `'12'` (string) |
| **Explicit** | `Number('5')` | `5` (number)    |

---

## 🔍 Common Type Coercion Rules

### 1. 🔢 **Number + String = String**

```javascript
console.log(1 + '2');      // '12'   (string)
console.log('3' + 4 + 5);  // '345'  (string)
```

> If **either operand is a string** and you're using `+`, JavaScript treats everything as a string.

---

### 2. ➖ **String - Number = Number**

```javascript
console.log('5' - 2);  // 3 (string coerced to number)
console.log('A' - 1);  // NaN (non-numeric string → NaN)
```

> `-`, `*`, `/`, `%` always try to coerce **both sides to numbers**.

---

### 3. ❓ **Boolean to Number**

```javascript
console.log(true + 1);   // 2
console.log(false * 10); // 0
```

> `true` → `1`, `false` → `0`

---

### 4. 👻 **Null and Undefined**

```javascript
console.log(null + 1);      // 1   (null becomes 0)
console.log(undefined + 1); // NaN (undefined can't become a number)
```

---

### 5. 🧠 **Equality (`==`) vs Strict Equality (`===`)**

| Expression          | Result  | Why                                       |
| ------------------- | ------- | ----------------------------------------- |
| `'5' == 5`          | `true`  | Loose comparison (`==`) converts types    |
| `'5' === 5`         | `false` | Strict comparison (`===`) checks type too |
| `null == undefined` | `true`  | Special JS rule                           |

---

## 🧪 Example Summary:

| Expression      | Result    | Type Coercion Rule        |
| --------------- | --------- | ------------------------- |
| `'3' + 4`       | `'34'`    | String + Number → String  |
| `'10' - 2`      | `8`       | String - Number → Number  |
| `true + '1'`    | `'true1'` | Boolean + String → String |
| `null + 1`      | `1`       | Null → 0                  |
| `undefined + 1` | `NaN`     | Undefined → NaN           |

---

## 🔒 Best Practice: Use Strict Equality (`===`)

Always prefer `===` to avoid unintended type coercion:

```javascript
if (value === 5) {
  // safer check, no surprises
}
```

---

Would you like a quiz or interactive code to test your understanding of type coercion?



Excellent question! Let's break it down:

---

## 🔍 `console.log(1 + '2');`

This line outputs:

```javascript
'12'  // (a string)
```

---

## 🤔 Why is the **number** `1` treated like a **string** here?

Because of **JavaScript's type coercion rules** when using the `+` (plus) operator:

---

### ⚠️ Rule:

> If **either operand is a string**, the `+` operator performs **string concatenation**, **not addition**.

---

### ✅ Step-by-step:

1. You wrote:

   ```javascript
   1 + '2'
   ```

2. JavaScript sees a number (`1`) and a string (`'2'`).

3. Because one of the values is a **string**, it **converts the number to a string**:

   ```javascript
   '1' + '2'
   ```

4. Then it performs **string concatenation**, resulting in:

   ```javascript
   '12'
   ```

---

### 📌 Important:

This only happens with the `+` operator. Other math operators (`-`, `*`, `/`) **force both operands to numbers** instead.

---

### 🧪 Example Comparison:

```javascript
console.log('5' + 2);   // '52' → string
console.log('5' - 2);   // 3   → number
console.log('5' * 2);   // 10  → number
console.log('5' / 2);   // 2.5 → number
```

---

### 💡 Tip:

To avoid this, **explicitly convert types**:

```javascript
console.log(Number('2') + 1); // 3
console.log(1 + parseInt('2')); // 3
```

---

Would you like a cheatsheet of common coercion behaviors in JavaScript?



Great! Here's a **JavaScript Type Coercion Cheatsheet** to help you understand how different types behave when combined in operations.

---

## 🧾 **JavaScript Type Coercion Cheatsheet**

### 🔢 1. **String and Number with `+` (Concatenation if any is a string)**

| Expression   | Result    | Type   |
| ------------ | --------- | ------ |
| `'5' + 1`    | `'51'`    | String |
| `1 + '5'`    | `'15'`    | String |
| `true + '1'` | `'true1'` | String |

🔹 *Why?* → If either side is a string, JavaScript converts the other to a string and joins them.

---

### ➖✖️➗ 2. **Other Operators (`-`, `*`, `/`, `%`) → Force to Number**

| Expression    | Result | Type   |
| ------------- | ------ | ------ |
| `'5' - 2`     | `3`    | Number |
| `'10' * 2`    | `20`   | Number |
| `'100' / '4'` | `25`   | Number |
| `'hello' - 1` | `NaN`  | Number |

🔹 *Why?* → Non-`+` math operators force both operands into numbers.

---

### 🔁 3. **Boolean Coercion**

| Expression  | Result  | Explanation               |
| ----------- | ------- | ------------------------- |
| `true + 1`  | `2`     | `true → 1`                |
| `false + 1` | `1`     | `false → 0`               |
| `!!"hello"` | `true`  | non-empty string = truthy |
| `!!0`       | `false` | 0 is falsy                |

---

### 🧹 4. **Null & Undefined Coercion**

| Expression      | Result | Why?              |
| --------------- | ------ | ----------------- |
| `null + 1`      | `1`    | `null → 0`        |
| `undefined + 1` | `NaN`  | `undefined → NaN` |

---

### 🆚 5. **Loose (`==`) vs Strict (`===`) Comparison**

| Expression           | Result  | Explanation       |
| -------------------- | ------- | ----------------- |
| `'5' == 5`           | `true`  | `string → number` |
| `'5' === 5`          | `false` | different types   |
| `null == undefined`  | `true`  | special rule      |
| `null === undefined` | `false` | strict type check |

---

### 🔄 6. **Explicit Type Conversion**

| Code                    | Result  | Description     |
| ----------------------- | ------- | --------------- |
| `Number('5')`           | `5`     | string → number |
| `String(10)`            | `'10'`  | number → string |
| `Boolean(0)`            | `false` | 0 is falsy      |
| `parseInt('15px')`      | `15`    | extracts number |
| `parseFloat('3.14abc')` | `3.14`  | extracts float  |

---

### 📌 Falsy Values in JavaScript:

These values convert to `false` in boolean contexts:

```javascript
false, 0, -0, 0n, "", null, undefined, NaN
```

---

### ✅ Truthy Examples:

```javascript
"hello", 1, [], {}, function() {}, Infinity
```

---

Would you like this cheatsheet as a downloadable PDF or code snippets for quick practice?

 */