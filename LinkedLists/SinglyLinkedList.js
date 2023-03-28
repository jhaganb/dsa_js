import NodeS from "./NodeS.js";

class SinglyLinkedList {
  constructor() {
    this.head = new NodeS();
    this.tail = new NodeS();
    this.size = 0;
  }

  createSinglyLinkedList(nodeValue) {
    const node = new NodeS();
    node.value = nodeValue;
    node.next = null;
    this.head = node;
    this.tail = node;
    this.size = 1;
    return this.head;
  }

  //change?
}

export default SinglyLinkedList;
