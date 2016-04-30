/**
 * -- Queues --
 *
 * DESCRIPTION:
 * A JavaScript module providing implementations for various Queue data structures.
 *
 * SAMPLE USAGE:
 *     // Load the Queue factory.
 *     var Queues = require('@pxtrick/Queues');
 *
 *     // A FIFO Queue.
 *     var queue = Queues.newSimpleQueue();
 *     queue.push( {id:'firstItem'} );
 *     queue.push( {id:'secondItem'} );
 *     queue.push( {id:'thirdItem'} );
 *     queue.size();  // 3
 *     queue.pop();  // 'firstItem'
 *     queue.pop();  // 'secondItem'
 *     queue.pop();  // 'thirdItem'
 *
 *     // A LIFO Stack.
 *     var stack = Queues.newStack();
 *     stack.push( {id:'firstItem'} );
 *     stack.push( {id:'secondItem'} );
 *     stack.push( {id:'thirdItem'} );
 *     stack.pop();  // 'thirdItem'
 *     stack.pop();  // 'secondItem'
 *     stack.pop();  // 'firstItem'
 *
 *     // A Priority Queue.
 *     var priorityQueue = Queues.newPriorityQueue();
 *     priorityQueue.push( {id:'firstItem', priority:5} );
 *     priorityQueue.push( {id:'secondItem', priority:1} );
 *     priorityQueue.push( {id:'thirdItem': priority:10} );
 *     priorityQueue.pop();  // 'thirdItem'
 *     priorityQueue.pop();  // 'firstItem'
 *     priorityQueue.pop();  // 'secondItem'
 *
 *     // A Circular Queue/Buffer.
 *     var circularQueue = Queues.newCircularQueue();
 *     circularQueue.push( {id:'firstItem'} );
 *     circularQueue.push( {id:'secondItem'} );
 *     circularQueue.push( {id:'thirdItem'} );
 *     circularQueue.next();  // 'firstItem'
 *     circularQueue.next();  // 'secondItem'
 *     circularQueue.next();  // 'thirdItem'
 *     circularQueue.next();  // 'firstItem'
 *     circularQueue.next();  // 'secondItem'
 *
 * AUTHOR: Patrick Seda @pxtrick
 */

// +----------------------------------------------------------+
// |  Factory method to create a Simple (FIFO) Queue object.  |
// +----------------------------------------------------------+
exports.newSimpleQueue = function() {
    var items = [];

    function size() {
        return items.length;
    }

    function push(item) {
        if (item) {
            items.unshift(item);
        }
    }

    function pop() {
        if (size() > 0) {
            return items.pop();
        }
        return null;
    }

    function peek() {
        if (size() > 0) {
            return items[size() - 1];
        }
        return null;
    }

    function empty() {
        items = [];
    }

    var publicApi = {
        size: size,
        push: push,
        pop: pop,
        peek: peek,
        empty: empty
    };
    return publicApi;
};


// +---------------------------------------------------+
// |  Factory method to create a (LIFO) Stack object.  |
// +---------------------------------------------------+
exports.newStack = function() {
    var items = [];

    function size() {
        return items.length;
    }

    function push(item) {
        if (item) {
            items.push(item);
        }
    }

    function pop() {
        if (size() > 0) {
            return items.pop();
        }
        return null;
    }

    function peek() {
        if (size() > 0) {
            return items[size() - 1];
        }
        return null;
    }

    function empty() {
        items = [];
    }

    var publicApi = {
        size: size,
        push: push,
        pop: pop,
        peek: peek,
        empty: empty
    };
    return publicApi;
};


// +-----------------------------------------------------+
// |  Factory method to create a Priority Queue object.  |
// +-----------------------------------------------------+
exports.newPriorityQueue = function(customComparator) {
    var items = [];
    function defaultComparator(a, b) {
        if (a.priority > b.priority) { return 1; }
        if (a.priority < b.priority) { return -1; }
        return 0;
    }
    var comparator = (typeof customComparator === 'function') ? customComparator : defaultComparator;

    function size() {
        return items.length;
    }

    function push(item) {
        if (item) {
            items.unshift(item);
            items.sort(comparator);
        }
    }

    function pop() {
        if (size() > 0) {
            return items.pop();
        }
        return null;
    }

    function peek() {
        if (size() > 0) {
            return items[0];
        }
        return null;
    }

    function empty() {
        items = [];
    }

    var publicApi = {
        size: size,
        push: push,
        pop: pop,
        peek: peek,
        empty: empty
    };
    return publicApi;
};


// +-----------------------------------------------------+
// |  Factory method to create a Circular Queue object.  |
// +-----------------------------------------------------+
exports.newCircularQueue = function() {
    var items = [];
    var currentIndex = 0;

    function incrementIndex() {
        ++currentIndex;
        if (currentIndex > (size() - 1)) {
            currentIndex = 0;
        }
    }

    function size() {
        return items.length;
    }

    function reset() {
        currentIndex = 0;
    }

    function setIndex(value) {
        if ((value >= 0) && (value <= (size()-1))) {
            currentIndex = value;
        } else {
            console.error('[CircularQueue] - setIndex() - Invalid value (' + value + '), ignoring request.');
        }
    }

    function push(item) {
        if (item) {
            items.push(item);
        }
    }

    function pop() {
        if (size() > 0) {
            var result = items.pop();
            if (currentIndex > (size() - 1)) {
                reset();
            }
            return result;
        }
        return null;
    }

    function peek() {
        if (size() > 0) {
            return items[currentIndex];
        }
        return null;
    }

    function next() {
        if (size() > 0) {
            var result = items[currentIndex];
            incrementIndex();
            return result;
        }
        return null;
    }

    function empty() {
        items = [];
    }

    var publicApi = {
        size: size,
        push: push,
        pop: pop,
        peek: peek,
        next: next,
        reset: reset,
        setIndex: setIndex,
        empty: empty
    };
    return publicApi;
};
