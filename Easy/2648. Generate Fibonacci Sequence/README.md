# 2648. Generate Fibonacci Sequence

## Problem Statement

Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation `Xn = Xn-1 + Xn-2`.

The first few numbers of the series are `0, 1, 1, 2, 3, 5, 8, 13`.

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
[LeetCode Problem](https://leetcode.com/problems/generate-fibonacci-sequence)

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
