# 1. Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`,
return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Examples
```javascript


```

#### Example 1:

```javascript

```


#### Example 2:
```javascript

```

### Constraints:
- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

**Follow-up:** Can you come up with an algorithm that is less than `O(n2)` time complexity?

### Problem Link
[LeetCode Problem](https://leetcode.com/problems/two-sum)

---

## Solution


### Code:
```javascript

```

### Example Usage:
```javascript

```

---

## Project Structure

```
└── /
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

```javascript
function* customSequence() {
    let a = 5; // Начальное значение a
    let b = 8; // Начальное значение b

    while (true) {
        yield (b = a + b) - (a = b - a); // Вычисляем и возвращаем значение
    }
}
```
### Как это работает:
Первый шаг:

`b = a + b = 5 + 8 = 13`

`a = b - a = 13 - 5 = 8`

Возвращаемое значение: `13 - 8 = 5`

Второй шаг:

`b = a + b = 8 + 13 = 21`

`a = b - a = 21 - 8 = 13`

Возвращаемое значение: `21 - 13 = 8`

И так далее...


### Объяснение:
Начальные значения:

`a = 5`

`b = 8`

Формула:

`yield (b = a + b) - (a = b - a)`

Порядок вычислений:

На каждом шаге:

b обновляется до `a + b`.

a обновляется до `b - a`.

Возвращается разность `(новое значение b) - (новое значение a)`.
