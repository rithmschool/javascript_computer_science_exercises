var expect = chai.expect
var doublyLinkedList;
var node;

beforeEach(function(){
  doublyLinkedList = new doublyLinkedList
  node = new Node(15)
})

describe("#doublyLinkedList", function(){
  it("contains a prev and next that are null", function(){
    expect(doublyLinkedList.prev).to.equal(null)
    expect(doublyLinkedList.next).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('prev')).to.equal(true)
    expect(doublyLinkedList.hasOwnProperty('next')).to.equal(true)
  });
  it("contains a length property that begins at 0", function(){
    expect(doublyLinkedList.length).to.equal(0)
    expect(doublyLinkedList.hasOwnProperty('length')).to.equal(true)
  });
});

describe("#Node", function(){
  it("contains a value", function(){
    expect(node.val).to.equal(15)
    expect(node.hasOwnProperty('value')).to.equal(true)
    expect(node.hasOwnProperty('next')).to.equal(true)
    expect(node.hasOwnProperty('prev')).to.equal(true)
  });
});

describe("#push", function(){
  it("inserts a node at the end of the list and increments the length of the list", function(){
    doublyLinkedList.push(5)
    expect(doublyLinkedList.length).to.equal(1)
    expect(doublyLinkedList.head.val).to.equal(5)
    doublyLinkedList.push(10)
    expect(doublyLinkedList.length).to.equal(2)
    expect(doublyLinkedList.head.next.val).to.equal(10)
    doublyLinkedList.push(15)
    expect(doublyLinkedList.length).to.equal(3)
    expect(doublyLinkedList.head.next.next.val).to.equal(15)
  });
  it("returns the doublyLinkedList so that the method can be chained", function(){
    doublyLinkedList.push(5).push(10).push(15)
    expect(doublyLinkedList.length).to.equal(3)
    expect(doublyLinkedList.head.next.next.val).to.equal(15)
  });
});

describe("#pop", function(){
  it("removes a node at the end of the list and decrements the length of the list", function(){
    doublyLinkedList.push(5).push(10).push(15).push(20)
    expect(doublyLinkedList.length).to.equal(4)
    expect(doublyLinkedList.pop()).to.equal(20)
    expect(doublyLinkedList.length).to.equal(3)
  });
  it("returns undefined if there are no nodes to remove", function(){
    expect(doublyLinkedList.pop()).to.equal(undefined)
    expect(doublyLinkedList.length).to.equal(0)
  });
});

describe("#unshift", function(){
 it("inserts a node at the beginning of the list and increments the length of the list", function(){
   doublyLinkedList.unshift(5)
   expect(doublyLinkedList.length).to.equal(1)
   expect(doublyLinkedList.head.val).to.equal(5)
   doublyLinkedList.unshift(10)
   expect(doublyLinkedList.length).to.equal(2)
   expect(doublyLinkedList.head.val).to.equal(10)
   expect(doublyLinkedList.head.next.val).to.equal(5)
   doublyLinkedList.unshift(15)
   expect(doublyLinkedList.length).to.equal(3)
   expect(doublyLinkedList.head.val).to.equal(15)
   expect(doublyLinkedList.head.next.val).to.equal(10)
   expect(doublyLinkedList.head.next.next.val).to.equal(5)
 });
 it("returns the doublyLinkedList so that the method can be chained", function(){
   doublyLinkedList.unshift(5).unshift(10).unshift(15)
   expect(doublyLinkedList.length).to.equal(3)
   expect(doublyLinkedList.head.next.next.val).to.equal(5)
 });
});

describe("#shift", function(){
  it("removes a node at the beginning of the list and decrements the length of the list", function(){
    doublyLinkedList.push(5).push(10).push(15).push(20)
    expect(doublyLinkedList.length).to.equal(4)
    expect(doublyLinkedList.shift()).to.equal(5)
    expect(doublyLinkedList.length).to.equal(3)
    expect(doublyLinkedList.shift()).to.equal(5)
    expect(doublyLinkedList.length).to.equal(2)
  });
  it("returns undefined if there are no nodes to remove", function(){
    expect(doublyLinkedList.shift()).to.equal(undefined)
    expect(doublyLinkedList.length).to.equal(0)
  });
});

describe("#set", function(){
  it("finds a node and replaces its value or returns undefined if the node is not found", function(){
    doublyLinkedList.push(5).push(10).push(15).push(20)
    expect(doublyLinkedList.length).to.equal(4)
    doublyLinkedList.set(0,10)
    expect(doublyLinkedList.length).to.equal(4)
    expect(doublyLinkedList.head.val).to.equal(10)
    doublyLinkedList.set(10,10)
    expect(doublyLinkedList.length).to.equal(4)
    expect(doublyLinkedList.head.val).to.equal(10)
    doublyLinkedList.set(2,100)
    expect(doublyLinkedList.length).to.equal(4)
    expect(doublyLinkedList.head.next.nextval).to.equal(100)
  });
});

describe("#_get", function(){
  it("finds a node and returns its value ", function(){
    doublyLinkedList.push(5).push(10).push(15).push(20)
    expect(doublyLinkedList.get(0)).to.equal(5)
    expect(doublyLinkedList.get(1)).to.equal(10)
    expect(doublyLinkedList.get(2)).to.equal(15)
    expect(doublyLinkedList.get(3)).to.equal(20)
    expect(doublyLinkedList.get(4)).to.equal(undefined)
  });
});

describe("#_insert", function(){
  it("inserts a node and correct adjusts the next properties of other nodes", function(){
    doublyLinkedList.push(5).push(10).push(15).push(20)
    doublyLinkedList.insert(2,12)
    expect(doublyLinkedList.length).to.equal(5)
    expect(doublyLinkedList.head.val).to.equal(5)
    expect(doublyLinkedList.head.next.val).to.equal(10)
    expect(doublyLinkedList.head.next.next.val).to.equal(12)
    expect(doublyLinkedList.head.next.next.next.val).to.equal(15)
    expect(doublyLinkedList.head.next.next.next.next.val).to.equal(20)
  });
});

describe("#remove", function(){
  it("contains a root that is null", function(){
    doublyLinkedList.push(5).push(10).push(15).push(20)
    doublyLinkedList.remove(2)
    expect(doublyLinkedList.length).to.equal(3)
    expect(doublyLinkedList.head.val).to.equal(5)
    expect(doublyLinkedList.head.next.val).to.equal(10)
    expect(doublyLinkedList.head.next.next.val).to.equal(20)
  });
});

describe("#reverse", function(){
  it("reverses all of the nodes", function(){
    doublyLinkedList.push(5).push(10).push(15).push(20)
    doublyLinkedList.reverse()
    expect(doublyLinkedList.length).to.equal(4)
    expect(doublyLinkedList.head.val).to.equal(20)
    expect(doublyLinkedList.head.next.val).to.equal(15)
    expect(doublyLinkedList.head.next.next.val).to.equal(10)
    expect(doublyLinkedList.head.next.next.next.val).to.equal(5)
  });
});