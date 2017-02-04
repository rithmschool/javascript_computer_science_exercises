var expect = chai.expect
var queue, node;

beforeEach(function(){
  queue = new Queue
  node = new Node(10)
})

describe("#Queue", function(){
  it("contains a first and list property", function(){
    expect(queue.first).to.equal(null)
    expect(queue.last).to.equal(null)
    expect(queue.hasOwnProperty('first')).to.equal(true)
    expect(queue.hasOwnProperty('last')).to.equal(true)
  });
  it("contains a size property that begins at 0", function(){
    expect(queue.size).to.equal(0)
    expect(queue.hasOwnProperty('size')).to.equal(true)
  });
});

describe("#Node", function(){
  it("contains a value and next property", function(){
    expect(node.value).to.equal(10)
    expect(node.next).to.equal(null)
    expect(node.hasOwnProperty('value')).to.equal(true)
    expect(node.hasOwnProperty('next')).to.equal(true)
  });
});

describe("#enqueue", function(){
  it("returns the new size of the queue", function(){
    expect(queue.enqueue(10)).to.equal(1)
    expect(queue.size).to.equal(1)
    expect(queue.enqueue(100)).to.equal(2)
    expect(queue.size).to.equal(2)
    expect(queue.enqueue(1000)).to.equal(3)
    expect(queue.size).to.equal(3)
  });
  it("places the value at the end of the queue", function(){
    expect(queue.enqueue(10)).to.equal(1)
    expect(queue.first.value).to.equal(10)
    expect(queue.last.value).to.equal(10)
    queue.enqueue(100)
    expect(queue.first.value).to.equal(10)
    expect(queue.last.value).to.equal(100)
    queue.enqueue(1000)
    expect(queue.first.value).to.equal(10)
    expect(queue.last.value).to.equal(1000)
  });
});

describe("#dequeue", function(){
  it("returns the value of the node removed", function(){
    queue.enqueue(10);
    queue.enqueue(100);
    queue.enqueue(1000);
    var removed = queue.dequeue()
    expect(removed).to.equal(10)
    expect(queue.size).to.equal(2)
    queue.dequeue()
    queue.dequeue()
    expect(queue.size).to.equal(0)
  });
});

describe("#peek", function(){
  it("returns the first value in the queue", function(){
    queue.enqueue(10);
    queue.enqueue(100);
    queue.enqueue(1000);
    expect(queue.peek()).to.equal(10)
  });
});
