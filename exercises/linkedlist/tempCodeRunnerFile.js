// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        // while (this.head)
    }
}

const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');

console.log(list.head.next.data)

module.exports = { Node, LinkedList };
