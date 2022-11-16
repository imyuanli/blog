class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}


class NodeList {
    constructor() {
        this.size = 0
        this.head = new Node('head')
        this.currentNode = ""
    }

    // 在单链表中寻找item元素
    find(item) {
        let currentNode = this.head
        while (currentNode && currentNode.data !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    // 向单链表中插入元素
    insert(element, item) {
        let currentNode
        const newNode = new Node(element)
        if (item) {
            currentNode = this.find(item)
            newNode.prev = currentNode.data
            newNode.next = currentNode.next
            currentNode.next = newNode

        } else {
            currentNode = this.findLast()
            newNode.prev = currentNode.data
            currentNode.next = newNode
        }
        this.currentNode = currentNode
        this.size++
    }

    // 在单链表中删除一个节点
    remove(item) {
        let currentNode = this.find(item)
        if(!currentNode){
            return
        }

        let nextNode = currentNode.next
        let prevNode = this.find(currentNode.prev)
        prevNode.next = nextNode
    }

    // 获取单链表的最后一个节点
    findLast() {
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    // 判断单链表是否为空
    isEmpty() {
        return this.head.next ? true : false
    }

    // 显示当前节点
    show() {
        return this.currentNode
    }

    // 获取单链表的长度
    getLength() {
        return this.size
    }

    // 从当前节点向前移动n个位置
    advance(n, currNode = this.head) {
        this.currNode = currNode;

        while ((n--) && this.currNode.next) {
            this.currNode = this.currNode.next;
        }

        return this.currNode;
    }

    // 单链表的遍历显示
    display() {
        let result = ""
        let currentNode = this.head
        while (currentNode) {
            result += currentNode.data
            currentNode = currentNode.next
            if (currentNode) {
                result += "=>"
            }
        }
        console.log(result)
    }

    // 清空单链表
    clear() {
        let currentNode = this.head
        currentNode.next = ""
    }

}

const node = new NodeList()
// console.log(node.findLast())
node.insert(1)
node.insert(3)
node.insert(12)
node.insert(4)
node.insert(9)
node.insert(13)
node.insert(0, 12)
node.display()
// node.remove(12)
// node.display()
node.advance(3,12)
node.display()

// node.clear()
// console.log(node.isEmpty())
// console.log(node.getLength())
// console.log(node.getLength())
// console.log(node.find(3))