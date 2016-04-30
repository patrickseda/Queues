## Queues
A JavaScript module providing the implementations of various **Queue** data structures.

<hr />

### Simple Queue
A simple _(first-in, first-out)_ Queue. Items are removed in the order in which they were added.
#### Methods
- `push(item)` - Adds a new item to the Queue.
- `pop()` - Removes and returns the next item from the Queue.
- `peek()` - Returns, but does not remove, the next item in the Queue.
- `size()` - Returns the number of items in the Queue.
- `empty()` - Empties the Queue of all items.

#### Sample Usage
```javascript
// Load the Queue factory.
var Queues = require('@pxtrick/Queues');

// Create a new (FIFO) Queue object.
var queue = Queues.newSimpleQueue();
queue.push( {id:'firstItem'} );
queue.push( {id:'secondItem'} );
queue.push( {id:'thirdItem'} );
queue.size();  // 3

queue.pop();  // 'firstItem'
queue.pop();  // 'secondItem'
queue.pop();  // 'thirdItem'
```

<hr />

### Stack
A simple _(last-in, first-out)_ Stack. Items are removed in the reverse order in which they were added.
#### Methods
- `push(item)` - Adds a new item to the Queue.
- `pop()` - Removes and returns the next item from the Queue.
- `peek()` - Returns, but does not remove, the next item in the Queue.
- `size()` - Returns the number of items in the Queue.
- `empty()` - Empties the Queue of all items.

#### Sample Usage
```javascript
// Load the Queue factory.
var Queues = require('@pxtrick/Queues');

// Create a new Stack object.
var stack = Queues.newStack();
stack.push( {id:'firstItem'} );
stack.push( {id:'secondItem'} );
stack.push( {id:'thirdItem'} );

stack.pop();  // 'thirdItem'
stack.pop();  // 'secondItem'
stack.pop();  // 'firstItem'
```

<hr />

### Priority Queue
A Queue in which items are stored sorted by priority, and which are removed in the order of highest priority.
<br />
_**NOTE**: Larger numerical values will have a higher priority than smaller values. It is possible to create a custom comparator function (specific to sorting your own data) and pass it to the factory function: _`Queues.newPriorityQueue(customComparator)`_._
#### Methods
- `push(item)` - Adds a new item to the Queue.
- `pop()` - Removes and returns the next highest priority item from the Queue.
- `peek()` - Returns, but does not remove, the next highest priority item in the Queue.
- `size()` - Returns the number of items in the Queue.
- `empty()` - Empties the Queue of all items.

#### Sample Usage
```javascript
// Load the Queue factory.
var Queues = require('@pxtrick/Queues');

// Create a new Priority Queue object.
var priorityQueue = Queues.newPriorityQueue();
priorityQueue.push( {name:'Priority 2', priority:2} );
priorityQueue.push( {name:'Priority 4', priority:4} );
priorityQueue.push( {name:'Priority 1', priority:1} );
priorityQueue.push( {name:'Priority 3', priority:3} );

priorityQueue.pop();  // 'Priority 4'
priorityQueue.pop();  // 'Priority 3'
priorityQueue.pop();  // 'Priority 2'
priorityQueue.pop();  // 'Priority 1'
```

<hr />

### Circular Queue
A Queue in which items can be iterated in a circular fashion. i.e when the "end" of the queue is encountered, the next item will be the one positioned at the "start" of the queue.
#### Methods
- `push(item)` - Adds a new item to the end of the Queue, regardless of the iterator position.
- `next()` - Returns, but does not remove, the next item in the Queue. This also advances the iterator position.
- `pop()` - Removes and returns the last item from the Queue, regardless of the iterator position.
- `peek()` - Returns, but does not remove, the next item in the Queue. _This does **not** advance the iterator position_
- `reset()` - Resets the iterator such that the next item requested will be the first one in the Queue.
- `size()` - Returns the number of items in the Queue.
- `empty()` - Empties the Queue of all items.

#### Sample Usage
```javascript
// Load the Queue factory.
var Queues = require('@pxtrick/Queues');

// Create a new Circular Queue object.
var circularQueue = Queues.newCircularQueue();
circularQueue.push( {id:'firstItem'} );
circularQueue.push( {id:'secondItem'} );
circularQueue.push( {id:'thirdItem'} );
circularQueue.size();  // 3

circularQueue.next();  // 'firstItem'
circularQueue.next();  // 'secondItem'
circularQueue.next();  // 'thirdItem'
circularQueue.next();  // 'firstItem'
circularQueue.next();  // 'secondItem'
```
