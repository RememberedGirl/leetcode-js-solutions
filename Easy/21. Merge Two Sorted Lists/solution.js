// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let dummy = new ListNode()
    let current = dummy

    while (list1 || list2) {
        const val1 = list1 ? list1.val : 101;
        const val2 = list2 ? list2.val : 101;

        if (val1 < val2 ){
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next

    }

    return dummy.next;
};




function createList(arr) {
    let dummy = new ListNode(0)
    let current = dummy
    for (const val of arr){
        current.next = new ListNode(val)
        current = current.next
    }
    return dummy.next
}

function listToArray(head){
    const result = []
    while (head !== null) {
        result.push(head.val)
        head = head.next
    }

    return result
}
const l1 = [1, 2, 3]
const l2 = [1, 3, 4]
const l3 = [0, 0, 0 ,0 ,0 ,0 ,9 ,9 ,9 ,9 ]
const l4 = []




console.log()
if (typeof document !== 'undefined') {
    const output = document.getElementById('output');


    const displayResult = (arr1, arr2) => {

        const l1 = createList(arr1)
        const l2 = createList(arr2)

        const div = document.createElement('div');
        // `n: ${n}, fn: ${fn.toString()} -> ${JSON.stringify(result)}`
        // Array.from(
        //     { length: n },
        //     (_, index) => index
        // );

        const result = mergeTwoLists(l1, l2);
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
