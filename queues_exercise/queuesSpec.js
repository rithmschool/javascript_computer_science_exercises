var expect = chai.expect
var queue, node;

beforeEach(function(){
  queue = new Queue
  node = new Node(10)
})

describe("#Queue", function(){
  it("contains a first and list property", function(){
    expect(queue.first).toBe(null)
    expect(queue.last).toBe(null)
    expect(queue.hasOwnProperty('first')).toBe(true)
    expect(queue.hasOwnProperty('last')).toBe(true)
  });
  it("contains a size property that begins at 0", function(){
    expect(queue.size).toBe(0)
    expect(queue.hasOwnProperty('size')).toBe(true)
  });
});

describe("#Node", function(){
  it("contains a value and next property", function(){
    expect(node.value).toBe(10)
    expect(node.next).toBe(null)
    expect(node.hasOwnProperty('value')).toBe(true)
    expect(node.hasOwnProperty('next')).toBe(true)
  });
});

describe("#enqueue", function(){
  it("returns the new size of the queue", function(){
    expect(queue.enqueue(10)).toBe(1)
    expect(queue.size).toBe(1)
    expect(queue.enqueue(100)).toBe(2)
    expect(queue.size).toBe(2)
    expect(queue.enqueue(1000)).toBe(3)
    expect(queue.size).toBe(3)
  });
  it("places the value at the end of the queue", function(){
    expect(queue.enqueue(10)).toBe(1)
    expect(queue.first.value).toBe(10)
    expect(queue.last.value).toBe(10)
    queue.enqueue(100)
    expect(queue.first.value).toBe(10)
    expect(queue.last.value).toBe(100)
    queue.enqueue(1000)
    expect(queue.first.value).toBe(10)
    expect(queue.last.value).toBe(1000)
  });
});

describe("#dequeue", function(){
  it("returns the value of the node removed", function(){
    queue.enqueue(10);
    queue.enqueue(100);
    queue.enqueue(1000);
    var removed = queue.dequeue()
    expect(removed).toBe(10)
    expect(queue.size).toBe(2)
    queue.dequeue()
    queue.dequeue()
    expect(queue.size).toBe(0)
  });
});

describe("#peek", function(){
  it("returns the first value in the queue", function(){
    queue.enqueue(10);
    queue.enqueue(100);
    queue.enqueue(1000);
    expect(queue.peek()).toBe(10)
  });
});
