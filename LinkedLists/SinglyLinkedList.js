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
      let tempNode = this.head;
      let index = 0;
      while (index < location - 1) {
        tempNode = tempNode.next;
        index++;
      }
      let nextNode = tempNode.next;
      tempNode.next = node;
      node.next = nextNode;
    }
    this.size++;
  }

  traverseSinglyLinkedList() {
    let linkedListString = "";
    if (this.head === null) {
      console.log(`SLL does not exist!`);
    } else {
      let tempNode = this.head;
      for (let i = 0; i < this.size; i++) {
        linkedListString += `${tempNode.value}${
          i != this.size - 1 ? " -> " : ""
        }`;
        tempNode = tempNode.next;
      }
    }
    console.log(linkedListString);
  }

  searchNode(nodeValue) {
    if (this.head != null) {
      let tempNode = this.head;
      for (let i = 0; i < this.size; i++) {
        if (tempNode.value === nodeValue) {
          console.log(`Found the node at location: ${i}`);
          return true;
        }
        tempNode = tempNode.next;
      }
    }
    console.log(`Node not found! `);
    return false;
  }

  deletionOfNode(location) {
    if (this.head === null) {
      console.log(`The SLL does not exist`);
      return;
    } else if (location === 0) {
      this.head = this.head.next;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
    } else if (location >= this.size) {
      let tempNode = this.head;
      for (let i = 0; i < this.size - 1; i++) {
        tempNode = tempNode.next;
      }
      if (tempNode === this.head) {
        this.tail = this.head = null;
        this.size--;
        return;
      }
      tempNode.next = null;
      this.tail = tempNode;
      this.size--;
    } else {
      let tempNode = this.head;
      for (let i = 0; i < location - 1; i++) {
        tempNode = tempNode.next;
      }
      tempNode.next = tempNode.next.next;
      this.size--;
    }
  }

  deleteSLL(){
    this.head = null;
    this.tail = null;
    console.log(`The SLL deleted! `);
  }
}

export default SinglyLinkedList;
