var expect = chai.expect
var doublyLinkedList;
var node1, node2, node3, node4;

beforeEach(function(){
  doublyLinkedList = new DoublyLinkedList
  node1 = new Node(15)
  node2 = new Node(20)
  node3 = new Node(10)
  node4 = new Node(12)
})

describe("#DoublyLinkedList", function(){
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
    expect(node1.value).to.equal(15)
    expect(node1.hasOwnProperty('value')).to.equal(true)
  });
});

describe("#push", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#pop", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#unshift", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#shift", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#set", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#_get", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#_insert", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#toString", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#remove", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#reverse", function(){
  it("contains a root that is null", function(){
    expect(doublyLinkedList.root).to.equal(null)
    expect(doublyLinkedList.hasOwnProperty('root')).to.equal(true)
  });
});