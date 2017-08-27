var expect = chai.expect
var stack, node;

beforeEach(function(){
  stack = new Stack
  node = new Node(10)
})

describe("#Stack", function(){
  it("contains a first and list property", function(){
    expect(stack.first).toBe(null)
    expect(stack.last).toBe(null)
    expect(stack.hasOwnProperty('first')).toBe(true)
    expect(stack.hasOwnProperty('last')).toBe(true)
  });
  it("contains a size property that begins at 0", function(){
    expect(stack.size).toBe(0)
    expect(stack.hasOwnProperty('size')).toBe(true)
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

describe("#push", function(){
  it("returns the new size of the stack", function(){
    expect(stack.push(10)).toBe(1)
    expect(stack.size).toBe(1)
    expect(stack.push(100)).toBe(2)
    expect(stack.size).toBe(2)
    expect(stack.push(1000)).toBe(3)
    expect(stack.size).toBe(3)
  });
  it("places the value at the top of the stack", function(){
    expect(stack.push(10)).toBe(1)
    expect(stack.first.value).toBe(10)
    expect(stack.last.value).toBe(10)
    stack.push(100)
    expect(stack.first.value).toBe(100)
    expect(stack.last.value).toBe(10)
    stack.push(1000)
    expect(stack.first.value).toBe(1000)
    expect(stack.last.value).toBe(10)
  });
});

describe("#pop", function(){
  it("returns the value of the node removed", function(){
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    var removed = stack.pop()
    expect(removed).toBe(1000)
    expect(stack.size).toBe(2)
    stack.pop()
    stack.pop()
    expect(stack.size).toBe(0)
  });
});

describe("#peek", function(){
  it("returns the value at the top of the stack", function(){
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    expect(stack.peek()).toBe(1000)
  });
});
