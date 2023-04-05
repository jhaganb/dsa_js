import SinglyLinkedList from "./SinglyLinkedList.js";

const SLL = new SinglyLinkedList();
SLL.createSinglyLinkedList(5);
SLL.insertInlinkedList(6, 0);
SLL.insertInlinkedList(8, 5);
SLL.insertInlinkedList(4, 0);
SLL.insertInlinkedList(7, 1);
SLL.traverseSinglyLinkedList();
// SLL.searchNode(6);
// SLL.searchNode(7);
// SLL.searchNode(9);
SLL.deletionOfNode(0)
SLL.traverseSinglyLinkedList();
SLL.deletionOfNode(2)
SLL.traverseSinglyLinkedList();
SLL.deletionOfNode(8)
SLL.deleteSLL();
SLL.traverseSinglyLinkedList();

