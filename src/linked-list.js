const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.previous = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if(this._head) return this._head.data;
        else return null;
    }

    tail() {
        if(this._tail) return this._tail.data;
        else return null;
    }

    at(index) {
        var current = this._head;
        for (var currentIndex = 0; currentIndex < this.length; currentIndex++)
        {
            if (currentIndex === index) return current.data;
            current = current.next;
        }
    }

    insertAt(index, data) {
        var node = new Node(data);
        var current = this._head, currentIndex = 0;
        while (current != null && currentIndex != index) {
            current = current.next;
            currentIndex++;
        }
        current.previous.next = node;
        node.previous = current.previous;
        current.previous = node;
        node.next = current;
        this.length++;
        return node.data;
    }

    isEmpty() {
        if (this.length != 0) return false;
        else return true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var current = this._head, currentIndex = 0;
        while ( current != null && currentIndex != index) {
            current = current.next;
            currentIndex++;
        }
        current.previous.next = current.next;
        current.next.previou = current.previous;
        this.length--;
        return this;
    }

    reverse() {
        var help, nextNode, previousNode;
        var current;
        current = this._head;
        while (current) {
            nextNode = current.next;
            previousNode = current.previous;
            current.previous = nextNode;
            current.next = previousNode;
            current = nextNode;
        }
        help = this._head;
        this._head = this._tail;
        this._tail = help;
    }

    indexOf(data) {
        var current = this._head, index = 0;
        while (current) {
            if (current.data === data)
                return index;
            current = current.next;
            index++;
        }
        return -1 ;
    }
}

module.exports = LinkedList;
