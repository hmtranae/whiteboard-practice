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
        this.insertAt(data, 0);
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        // if (!this.head) {
        //     return null;
        // }

        // let node = this.head;
        // while (node.next) {
        //     node = node.next;
        // }
        // return node;

        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // if (!this.head) {
        //     return;
        // }

        // this.head = this.head.next;
        this.removeAt(0);
    }

    removeLast() {
        // if (this.size() === 0) {
        //     return;
        // }
        // if (this.size() === 1) {
        //     this.head = null;
        //     return;
        // }
        // let previous = this.head;
        // let node = this.head.next;
        // while (node.next) {
        //     previous = previous.next;
        //     node = node.next;
        // }
        // previous.next = null;
        this.removeAt(this.size() - 1);
    }

    insertLast(data) {
        // let lastNode = this.getLast();
        // if (lastNode) {
        //     lastNode.next = new Node(data);
        // } else {
        //     this.head = new Node(data);
        // }
        this.insertAt(data, this.size());
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;
        while (counter !== index) {
            node = node.next;
            counter++;
        }
        return node;
    }

    // use the getAt method to retrieve the previous node and set that node's next property to be that of index + 1
    removeAt(index) {
        // if deleting first node, then set head to second node (index 1)
        if (index === 0) {
            this.head = this.getAt(1);
            return;
        }

        // if no nodes or index out of bounds, just return
        if (!this.head || index + 1 > this.size()) {
            return;
        }

        let previousNode = this.getAt(index - 1);
        previousNode.next = previousNode.next.next;
    }

    // if index if out of bounds, add the node to the end of the list
    insertAt(data, index) {
        if (index === 0 || !this.head) {
            this.head = new Node(data, this.getAt(0));
            return;
        }

        const numNodes = this.size();
        if (index > numNodes - 1) {
            this.getAt(numNodes - 1).next = new Node(data);
            return;
        }
        
        let previousNode = this.getAt(index - 1);
        previousNode.next = new Node(data, this.getAt(index));
    }
}

const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');

console.log(list.head.next.data)

module.exports = { Node, LinkedList };
