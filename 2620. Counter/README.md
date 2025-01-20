# 2620. Counter

## Problem Statement

Given an integer `n`, return a `counter` function.
This `counter` function initially returns `n` and then returns 1 more
than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

### Examples
```javascript
/**
* @param {number} n
* @return {Function} counter
  */
  var createCounter = function(n) {

      return function() {
    
      };
  };

```

#### Example 1:

```javascript
/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```


#### Example 2:
```javascript
/**
 * const counter = createCounter(-2)
 * counter() // -2
 * counter() // -1
 * counter() //  0
 * counter() //  1
 */
```

### Constraints:

- `1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`

### Problem Link
[LeetCode Problem 2620 - Counter](https://leetcode.com/problems/counter)

---

## Solution


### Code:
```javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
    return function() {
        return n++;
    };
}
```

### Example Usage:
```javascript

```

---

## Project Structure

```
└── 2620. Counter/
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

