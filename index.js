
// Load the Queue factory.
var Queues = require('@pxtrick/Queues');

// Create a Simple (FIFO) Queue.
var simpleQueue = Queues.newSimpleQueue();
simpleQueue.push({id:'firstItem'});
simpleQueue.push({id:'secondItem'});
simpleQueue.push({id:'thirdItem'});
simpleQueue.push({id:'fourthItem'});
console.log('--------');
console.log('- simpleQueue.size()=', simpleQueue.size()); // 4
console.log('- simpleQueue.pop()=', simpleQueue.pop()); // 'firstItem'
console.log('- simpleQueue.pop()=', simpleQueue.pop()); // 'secondItem'
console.log('- simpleQueue.pop()=', simpleQueue.pop()); // 'thirdItem'
console.log('- simpleQueue.pop()=', simpleQueue.pop()); // 'fourthItem'
console.log('- simpleQueue.pop()=', simpleQueue.pop()); // null
simpleQueue.empty();
console.log('- simpleQueue.size()=', simpleQueue.size()); // 0


// Create a Stack.
var stack = Queues.newStack();
stack.push({id:'firstItem'});
stack.push({id:'secondItem'});
stack.push({id:'thirdItem'});
stack.push({id:'fourthItem'});
console.log('--------');
console.log('- stack.size()=', stack.size()); // 4
console.log('- stack.pop()=', stack.pop()); // 'fourthItem'
console.log('- stack.pop()=', stack.pop()); // 'thirdItem'
console.log('- stack.pop()=', stack.pop()); // 'secondItem'
console.log('- stack.pop()=', stack.pop()); // 'firstItem'
console.log('- stack.pop()=', stack.pop()); // null
stack.empty();
console.log('- stack.size()=', stack.size()); // 0


// Create a Priority Queue.
function ageComparator(a, b) {
    if (a.age > b.age) { return 1; }
    if (a.age < b.age) { return -1; }
    return 0;
}
var priorityQueue = Queues.newPriorityQueue(ageComparator);
priorityQueue.push({name:'Mr. Two', age:2});
priorityQueue.push({name:'Ms. Four', age:4});
priorityQueue.push({name:'Mr. One', age:1});
priorityQueue.push({name:'Ms. Three', age:3});
console.log('--------');
console.log('- priorityQueue.size()=', priorityQueue.size()); // 4
console.log('- priorityQueue.pop()=', priorityQueue.pop()); // 'Ms. Four'
console.log('- priorityQueue.pop()=', priorityQueue.pop()); // 'Ms. Three'
console.log('- priorityQueue.pop()=', priorityQueue.pop()); // 'Mr. Two'
console.log('- priorityQueue.pop()=', priorityQueue.pop()); // 'Mr. One'
console.log('- priorityQueue.pop()=', priorityQueue.pop()); // null
priorityQueue.empty();
console.log('- priorityQueue.size()=', priorityQueue.size()); // 0


// Create a Circular Queue.
var circularQueue = Queues.newCircularQueue();
circularQueue.push(20);
circularQueue.push(40);
circularQueue.push(10);
circularQueue.push(30);
console.log('--------');
console.log('- circularQueue.size()=', circularQueue.size()); // 4
console.log('- circularQueue.next()=', circularQueue.next()); // 20
console.log('- circularQueue.next()=', circularQueue.next()); // 40
console.log('- circularQueue.next()=', circularQueue.next()); // 10
console.log('- circularQueue.next()=', circularQueue.next()); // 30
console.log('- circularQueue.next()=', circularQueue.next()); // 20
console.log('- circularQueue.next()=', circularQueue.next()); // 40
