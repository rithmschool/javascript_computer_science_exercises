var expect = chai.expect
var stack;

beforeEach(function(){
  stack = new Stack
})

describe("#stack", function(){
  it("contains a prev and next that are null", function(){
    expect(stack.prev).to.equal(null)
    expect(stack.next).to.equal(null)
    expect(stack.hasOwnProperty('prev')).to.equal(true)
    expect(stack.hasOwnProperty('next')).to.equal(true)
  });
  it("contains a length property that begins at 0", function(){
    expect(stack.length).to.equal(0)
    expect(stack.hasOwnProperty('length')).to.equal(true)
  });
});

describe("#push", function(){
  it("contains a value", function(){
    expect(node1.value).to.equal(15)
    expect(node1.hasOwnProperty('value')).to.equal(true)
  });
});

describe("#pop", function(){
  it("contains a root that is null", function(){
    expect(stack.root).to.equal(null)
    expect(stack.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#peek", function(){
  it("contains a root that is null", function(){
    expect(stack.root).to.equal(null)
    expect(stack.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#print", function(){
  it("contains a root that is null", function(){
    expect(stack.root).to.equal(null)
    expect(stack.hasOwnProperty('root')).to.equal(true)
  });
});
