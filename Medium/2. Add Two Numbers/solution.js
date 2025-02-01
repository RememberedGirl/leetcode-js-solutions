
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)

}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Создаём фиктивный узел для упрощения кода
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0; // Переменная для переноса

    // Итерируем по обоим спискам
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Получаем значения текущих узлов
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Вычисляем сумму и перенос
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Переносим 1, если сумма >= 10
        const digit = sum % 10; // Оставляем только последнюю цифру

        // Создаём новый узел для результата
        current.next = new ListNode(digit);
        current = current.next;

        // Переходим к следующим узлам
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // Возвращаем результат, начиная с первого узла после фиктивного
    return dummy.next;
};

// Создаём списки для примера
function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Преобразуем список в массив для проверки
function listToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Пример использования
const l1 = createList([2, 4, 3]);
const l2 = createList([9, 9, 9]);
const l3 = createList([0, 0, 0 ,0 ,0 ,0 ,9 ,9 ,9 ,9 ]);
const l4 = createList([]);



// // Additional setup for browser testing
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (l1,l2) => {
        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        const result = addTwoNumbers(l1, l2);
        div.textContent = `
        l1: ${JSON.stringify(listToArray(l1))},
        l2: ${JSON.stringify(listToArray(l2))}
         -> ${JSON.stringify(listToArray(result))}`
        output.appendChild(div);
    };

    displayResult(l1,l2);
    displayResult(l1,l3);
    displayResult(l2,l4);
}
