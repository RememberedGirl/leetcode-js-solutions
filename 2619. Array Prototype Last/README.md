# 2619. Array Prototype Last

## Problem Statement

Write code that enhances all arrays so that you can call the `array.last()` method on any array, and it will return the last element. If the array is empty, it should return `-1`.

You may assume the array is the output of `JSON.parse`.

### Examples

#### Example 1:
```javascript
const nums = [null, {}, 3];
console.log(nums.last()); // Output: 3
```

#### Example 2:
```javascript
const nums = [];
console.log(nums.last()); // Output: -1
```

### Constraints:
- `arr` is a valid JSON array.
- `0 <= arr.length <= 1000`.

### Problem Link
[LeetCode Problem 2619 - Array Prototype Last](https://leetcode.com/problems/array-prototype-last/)

---

## Solution

The solution enhances the `Array.prototype` by adding a `last` method, which checks the length of the array. If the array is not empty, it returns the last element. Otherwise, it returns `-1`.

### Code:
```javascript
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1;
};
```

### Example Usage:
```javascript
const arr = [1, 2, 3];
console.log(arr.last()); // Output: 3

const emptyArr = [];
console.log(emptyArr.last()); // Output: -1
```

---

## Project Structure

```
└── 2619. Array Prototype Last/
    ├── solution.js    # Implementation of the solution
    ├── index.html     # HTML file for browser testing
    └── README.md      # Documentation for the problem and solution
```

---

## How to Run

1. Open `index.html` in any modern web browser.
2. The results of the example arrays will be displayed on the webpage.
3. You can modify the `solution.js` file to test other arrays.

---

## Notes

- This solution follows the constraints provided in the problem statement.
- The approach is efficient with a time complexity of \(O(1)\), as it only accesses the last element of the array.
- Extending prototypes can have unintended side effects, so use this enhancement carefully in larger projects.
