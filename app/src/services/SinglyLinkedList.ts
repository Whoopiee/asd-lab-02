export class _Node<T> {
  data: T;
  next: _Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class SingleLinkedList<T> {
  head: _Node<T> | null;

  constructor(head: _Node<T> | null) {
    this.head = head;
  }

  isEmpty(): boolean {
    if (this.head === null) {
      return true;
    }

    return false;
  }

  push(data: T): void {
    const newNode = new _Node(data);
    newNode.next = null;
    this.head = newNode;
  }

  unshift(data: T): void {
    const newNode = new _Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }
}
