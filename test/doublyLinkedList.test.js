const assert = require('chai').assert;
const DoublyLinkedList = require('../doublyLinkedList.js'); // Adjust the path as needed

describe('Doubly Linked List', function() {
  let list;

  beforeEach(function() {
    // Create a new Doubly Linked List before each test
    list = new DoublyLinkedList();
  });

  it('should handle an empty list', function() {
    assert.strictEqual(list.size, 0, 'Size should be 0 for an empty list');
    assert.isNull(list.head, 'Head should be null');
    assert.isNull(list.tail, 'Tail should be null');
  });

  it('should handle a list with one element', function() {
    list.insertStart(42);
    assert.strictEqual(list.size, 1, 'Size should be 1');
    assert.strictEqual(list.head.data, 42, 'Head should contain 42');
    assert.strictEqual(list.tail.data, 42, 'Tail should contain 42');
  });

  it('should handle a list with multiple elements', function() {
    list.insertStart(10);
    list.insertEnd(20);
    list.insertEnd(30);
    assert.strictEqual(list.size, 3, 'Size should be 3');
    assert.strictEqual(list.head.data, 10, 'Head should contain 10');
    assert.strictEqual(list.tail.data, 30, 'Tail should contain 30');
  });

  it('should handle adding and removing at the start', function() {
    list.insertStart(10);
    list.insertStart(20);
    list.deleteStart();
    assert.strictEqual(list.size, 1, 'Size should be 1 after adding and removing');
    assert.strictEqual(list.head.data, 10, 'Head should contain 10');
    assert.strictEqual(list.tail.data, 10, 'Tail should contain 10');
  });

  it('should handle adding and removing at the end', function() {
    list.insertEnd(10);
    list.insertEnd(20);
    list.deleteEnd();
    assert.strictEqual(list.size, 1, 'Size should be 1 after adding and removing');
    assert.strictEqual(list.head.data, 10, 'Head should contain 10');
    assert.strictEqual(list.tail.data, 10, 'Tail should contain 10');
  });

  it('should handle inserting at specific positions', function() {
    list.insertStart(10);
    list.insertEnd(30);
    list.insertAt(20, 1);
    assert.strictEqual(list.size, 3, 'Size should be 3 after inserting at a specific position');
    assert.strictEqual(list.head.data, 10, 'Head should contain 10');
    assert.strictEqual(list.head.next.data, 20, 'Next should be 20');
    assert.strictEqual(list.tail.data, 30, 'Tail should contain 30');
  });

  it('should handle error cases', function() {
    // Test error cases like inserting at an invalid index
    list.insertStart(10);
    list.insertStart(20);

    // Trying to insert at an invalid index (should not change the list)
    list.insertAt(30, 3);
    assert.strictEqual(list.size, 2, 'Size should be 2');
    assert.strictEqual(list.head.data, 20, 'Head should contain 20');
    assert.strictEqual(list.tail.data, 10, 'Tail should contain 10');

    // Trying to delete from an empty list (should not change the list)
    const emptyList = new DoublyLinkedList();
    emptyList.deleteStart();
    assert.strictEqual(emptyList.size, 0, 'Size of an empty list should remain 0');
  });

  it('should handle a reset', function() {
    list.insertStart(10);
    list.insertEnd(20);
    list.reset();
    assert.strictEqual(list.size, 0, 'Size should be 0 after resetting');
    assert.isNull(list.head, 'Head should be null');
    assert.isNull(list.tail, 'Tail should be null');
  });

  it('should handle more complex scenarios', function() {
    list.insertStart(10);
    list.insertEnd(20);
    list.insertAt(15, 1);
    list.insertStart(5);
    list.deleteEnd();
    list.insertAt(25, 10); // Insert at an invalid index (should not change the list)
    list.deleteAt(3);
    assert.strictEqual(list.size, 3, 'Size should be 3');
    assert.strictEqual(list.head.data, 5, 'Head should contain 5');
    assert.strictEqual(list.head.next.data, 10, 'Next should be 10');
    assert.strictEqual(list.tail.data, 15, 'Tail should contain 20');
  });
});
