```javascript
// 1. Определение класса ListNode
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 2. Создание связного списка
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

// 3. Итерация по связному списку
function* listIterator(head) {
  let current = head;
  while (current !== null) {
    yield current.val;
    current = current.next;
  }
}

// 4. Использование генератора для итерации
const gen = listIterator(node1);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined (конец списка)

// 5. Добавление нового узла в конец списка
function append(head, val) {
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = new ListNode(val);
}

append(node1, 4);
console.log([...listIterator(node1)]); // [1, 2, 3, 4]

// 6. Удаление узла по значению
function remove(head, val) {
  let dummy = new ListNode(0, head); // Фиктивный узел для упрощения удаления
  let current = dummy;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next; // Пропускаем узел с нужным значением
    } else {
      current = current.next;
    }
  }

  return dummy.next; // Возвращаем обновлённый список
}

const newHead = remove(node1, 2);
console.log([...listIterator(newHead)]); // [1, 3, 4]

// 7. Реверс связного списка
function reverse(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const reversedHead = reverse(newHead);
console.log([...listIterator(reversedHead)]); // [4, 3, 1]
```


---

### **Объяснение:**

1. **Класс `ListNode`**:
    - Узел связного списка содержит значение (`val`) и ссылку на следующий узел (`next`).

2. **Создание связного списка**:
    - Создаём узлы и связываем их через свойство `next`.

3. **Итерация по списку**:
    - Используем генератор (`function*`) для итерации по узлам списка и возврата их значений.

4. **Добавление узла в конец**:
    - Проходим до последнего узла и добавляем новый узел.

5. **Удаление узла по значению**:
    - Используем фиктивный узел для упрощения удаления первого узла.

6. **Реверс списка**:
    - Меняем направление ссылок между узлами, чтобы развернуть список.

---

### **Результаты:**

- Итерация по списку: `[1, 2, 3]`.
- После добавления `4`: `[1, 2, 3, 4]`.
- После удаления `2`: `[1, 3, 4]`.
- После реверса: `[4, 3, 1]`.

---

Этот код демонстрирует основные операции с `ListNode` и использование генераторов для итерации по связному списку.