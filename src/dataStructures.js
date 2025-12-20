const arr = [1, 2, 3];

const obj = {
    name: 'khalaf',
    age: "12"
}

const map = new Map()
map.set("name", "khalaf")
map.set("age", 12)

const set = new Set();
set.add("khalaf")
set.add(12)

const stack = []
stack.push(1)
stack.pop()

const queue = []
queue.push()
queue.shift()

const deque = []
deque.push(1)
deque.unshift(2)
deque.pop()
deque.shift()

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const node = new Node(1)

const tree = {
    value: 1,
    children: [
        { value: 1, children: [] },
        { value: 2, children: [] },
    ]
}

const graph = {
    A: ["A", "B"],
    B: ["A", "C"],
}