var expect = chai.expect
var stack, node;

beforeEach(function(){
  stack = new Stack
  node = new Node(10)
})

describe("#Stack", function(){
  it("contains a first and list property", function(){
    expect(stack.first).to.equal(null)
    expect(stack.last).to.equal(null)
    expect(stack.hasOwnProperty('first')).to.equal(true)
    expect(stack.hasOwnProperty('last')).to.equal(true)
  });
  it("contains a size property that begins at 0", function(){
    expect(stack.size).to.equal(0)
    expect(stack.hasOwnProperty('size')).to.equal(true)
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

describe("#push", function(){
  it("returns the new size of the stack", function(){
    expect(stack.push(10)).to.equal(1)
    expect(stack.size).to.equal(1)
    expect(stack.push(100)).to.equal(2)
    expect(stack.size).to.equal(2)
    expect(stack.push(1000)).to.equal(3)
    expect(stack.size).to.equal(3)
  });
  it("places the value at the top of the stack", function(){
    expect(stack.push(10)).to.equal(1)
    expect(stack.first.value).to.equal(10)
    expect(stack.last.value).to.equal(10)
    stack.push(100)
    expect(stack.first.value).to.equal(100)
    expect(stack.last.value).to.equal(10)
    stack.push(1000)
    expect(stack.first.value).to.equal(1000)
    expect(stack.last.value).to.equal(10)
  });
});

describe("#pop", function(){
  it("returns the value of the node removed", function(){
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    var removed = stack.pop()
    expect(removed).to.equal(1000)
    expect(stack.size).to.equal(2)
    stack.pop()
    stack.pop()
    expect(stack.size).to.equal(0)
  });
});

describe("#peek", function(){
  it("returns the value at the top of the stack", function(){
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    expect(stack.peek()).to.equal(1000)
  });
});
