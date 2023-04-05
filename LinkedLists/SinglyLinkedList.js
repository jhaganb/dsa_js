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
  //check2
  insertInlinkedList(nodeValue, location) {
    const node = new NodeS();
    node.value = nodeValue;
    if (this.head === null) {
      createSinglyLinkedList(nodeValue);
      return;
    } else if (location === 0) {
      node.next = this.head;
      this.head = node;
    } else if (location >= this.size) {
      node.next = null;
      this.tail.next = node;
      this.tail = node;
    } else {
      const tempNode = new NodeS();
      let index = 0 ;
      while(index < location - 1){
        tempNode = tempNode.next;
        index++;
      }
      const nextNode = new NodeS();
      tempNode.next = node;
      node.next = nextNode;
    }
    this.size++;
  }
}

export default SinglyLinkedList;
