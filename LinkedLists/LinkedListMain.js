import SinglyLinkedList from "./SinglyLinkedList.js";

const SLL = new SinglyLinkedList();
SLL.createSinglyLinkedList(5);
SLL.insertInlinkedList(6, 0);
console.log(SLL.head.value);
console.log(SLL.head.next.value);
