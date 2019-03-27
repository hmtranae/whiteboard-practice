// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(child => {
            return child.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // array contains root node of tree
    // grab children of root node, push into array and perform fn on first ele
    // continue as long as array has ele
    traverseBF(func) {
        let array = [this.root];
        while (array.length) {
            array.push(...array[0].children);
            let ele = array.shift();
            func(ele);
        }
    }

    // very similar to bfs but instead of adding to end, ADD TO BEGINNING
    traverseDF(func) {
        let array = [this.root];
        while (array.length) {
            let ele = array.shift();
            func(ele);
            array.unshift(...ele.children);
        }
    }
}

module.exports = { Tree, Node };