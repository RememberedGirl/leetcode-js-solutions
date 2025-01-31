```javascript
// 1. Объявление генератора
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// 2. Создание объекта генератора
const gen = myGenerator();

// 3. Использование next() для получения значений
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined (завершено)

// 4. Возврат значения через return
function* generatorWithReturn() {
  yield 1;
  return 2; // Завершает генератор
  yield 3; // Не будет выполнено
}

const genWithReturn = generatorWithReturn();
console.log(genWithReturn.next().value); // 1
console.log(genWithReturn.next().value); // 2
console.log(genWithReturn.next().value); // undefined

// 5. Передача значений в генератор через next()
function* generatorWithInput() {
  const x = yield 1;
  const y = yield x + 2;
  yield y + 3;
}

const genWithInput = generatorWithInput();
console.log(genWithInput.next().value); // 1
console.log(genWithInput.next(10).value); // 12 (x = 10)
console.log(genWithInput.next(20).value); // 23 (y = 20)

// 6. Использование yield* для делегирования другому генератору
function* innerGenerator() {
  yield 2;
  yield 3;
}

function* outerGenerator() {
  yield 1;
  yield* innerGenerator(); // Делегирует выполнение innerGenerator
  yield 4;
}

const genOuter = outerGenerator();
console.log(genOuter.next().value); // 1
console.log(genOuter.next().value); // 2
console.log(genOuter.next().value); // 3
console.log(genOuter.next().value); // 4

// 7. Обработка ошибок через throw()
function* generatorWithError() {
  try {
    yield 1;
    yield 2;
  } catch (error) {
    yield `Ошибка: ${error.message}`;
  }
}

const genWithError = generatorWithError();
console.log(genWithError.next().value); // 1
console.log(genWithError.throw(new Error("Что-то пошло не так")).value); // "Ошибка: Что-то пошло не так"

// 8. Использование return() для завершения генератора
function* generatorWithEarlyReturn() {
  yield 1;
  yield 2;
  yield 3;
}

const genEarlyReturn = generatorWithEarlyReturn();
console.log(genEarlyReturn.next().value); // 1
console.log(genEarlyReturn.return("Завершено").value); // "Завершено"
console.log(genEarlyReturn.next().value); // undefined

```