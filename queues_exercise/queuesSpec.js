var expect = chai.expect
var queue;

beforeEach(function(){
  queue = new Queue
})

describe("#Queue", function(){
  it("contains a prev and next that are null", function(){
    expect(queue.prev).to.equal(null)
    expect(queue.next).to.equal(null)
    expect(queue.hasOwnProperty('prev')).to.equal(true)
    expect(queue.hasOwnProperty('next')).to.equal(true)
  });
  it("contains a length property that begins at 0", function(){
    expect(queue.length).to.equal(0)
    expect(queue.hasOwnProperty('length')).to.equal(true)
  });
});

describe("#enqueue", function(){
  it("contains a value", function(){
    expect(node1.value).to.equal(15)
    expect(node1.hasOwnProperty('value')).to.equal(true)
  });
});

describe("#dequeue", function(){
  it("contains a root that is null", function(){
    expect(queue.root).to.equal(null)
    expect(queue.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#peek", function(){
  it("contains a root that is null", function(){
    expect(queue.root).to.equal(null)
    expect(queue.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#print", function(){
  it("contains a root that is null", function(){
    expect(queue.root).to.equal(null)
    expect(queue.hasOwnProperty('root')).to.equal(true)
  });
});
