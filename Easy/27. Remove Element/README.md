# 27. Remove Element

## Problem Statement

Given an integer array `nums`  and an integer `val`, remove all occurrences of `val` in `nums`  in-place. The order of the elements may be changed. Then return the number of elements in `nums`  which are not equal to `val`.

Consider the number of elements in `nums`  which are not equal to `val` be `k` , to get accepted, you need to do the following things:

Change the array `nums`  such that the first `k`  elements of `nums`  contain the elements which are not equal to `val`. The remaining elements of `nums`  are not important as well as the size of `nums` .
Return `k` .
Custom Judge:

The judge will test your solution with the following code:
```
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
assert nums[i] == expectedNums[i];
}
```
If all assertions pass, then your solution will be accepted.

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


### Problem Link
[LeetCode Problem](https://leetcode.com/problems/remove-element)

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
