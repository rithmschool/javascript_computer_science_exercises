var expect = chai.expect
var singlyLinkedList;
var node;

beforeEach(function(){
  singlyLinkedList = new SinglyLinkedList
  node = new Node(15)
})

describe("#singlyLinkedList", function(){
  it("contains a head that is null", function(){
    expect(singlyLinkedList.head).toBe(null)
    expect(singlyLinkedList.tail).toBe(null)
    expect(singlyLinkedList.hasOwnProperty('head')).toBe(true)
    expect(singlyLinkedList.hasOwnProperty('tail')).toBe(true)
  });
  it("contains a length property that begins at 0", function(){
    expect(singlyLinkedList.length).toBe(0)
    expect(singlyLinkedList.hasOwnProperty('length')).toBe(true)
  });
});

describe("#Node", function(){
  it("contains a value", function(){
    expect(node.val).toBe(15)
    expect(node.hasOwnProperty('val')).toBe(true)
    expect(node.hasOwnProperty('next')).toBe(true)
  });
});

describe("#push", function(){
  it("inserts a node at the end of the list and increments the length of the list", function(){
    singlyLinkedList.push(5)
    expect(singlyLinkedList.length).toBe(1)
    expect(singlyLinkedList.head.val).toBe(5)
    singlyLinkedList.push(10)
    expect(singlyLinkedList.length).toBe(2)
    expect(singlyLinkedList.head.next.val).toBe(10)
    singlyLinkedList.push(15)
    expect(singlyLinkedList.length).toBe(3)
    expect(singlyLinkedList.head.next.next.val).toBe(15)
  });
  it("returns the singlyLinkedList so that the method can be chained", function(){
    singlyLinkedList.push(5).push(10).push(15)
    expect(singlyLinkedList.length).toBe(3)
    expect(singlyLinkedList.head.next.next.val).toBe(15)
  });
});

describe("#pop", function(){
  it("removes a node at the end of the list and decrements the length of the list", function(){
    singlyLinkedList.push(5).push(10).push(15).push(20)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.pop()).toBe(20)
    expect(singlyLinkedList.length).toBe(3)
  });
  it("returns undefined if there are no nodes to remove", function(){
    expect(singlyLinkedList.pop()).toBe(undefined)
    expect(singlyLinkedList.length).toBe(0)
  });
});

describe("#unshift", function(){
 it("inserts a node at the beginning of the list and increments the length of the list", function(){
   singlyLinkedList.unshift(5)
   expect(singlyLinkedList.length).toBe(1)
   expect(singlyLinkedList.head.val).toBe(5)
   singlyLinkedList.unshift(10)
   expect(singlyLinkedList.length).toBe(2)
   expect(singlyLinkedList.head.val).toBe(10)
   expect(singlyLinkedList.head.next.val).toBe(5)
   singlyLinkedList.unshift(15)
   expect(singlyLinkedList.length).toBe(3)
   expect(singlyLinkedList.head.val).toBe(15)
   expect(singlyLinkedList.head.next.val).toBe(10)
   expect(singlyLinkedList.head.next.next.val).toBe(5)
 });
 it("returns the singlyLinkedList so that the method can be chained", function(){
   singlyLinkedList.unshift(5).unshift(10).unshift(15)
   expect(singlyLinkedList.length).toBe(3)
   expect(singlyLinkedList.head.next.next.val).toBe(5)
 });
});

describe("#shift", function(){
  it("removes a node at the beginning of the list and decrements the length of the list", function(){
    singlyLinkedList.push(5).push(10).push(15).push(20)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.shift()).toBe(5)
    expect(singlyLinkedList.length).toBe(3)
    expect(singlyLinkedList.shift()).toBe(10)
    expect(singlyLinkedList.length).toBe(2)
    expect(singlyLinkedList.shift()).toBe(15)
    expect(singlyLinkedList.length).toBe(1)
    expect(singlyLinkedList.shift()).toBe(20)
    expect(singlyLinkedList.length).toBe(0)
  });
  it("returns undefined if there are no nodes to remove", function(){
    expect(singlyLinkedList.shift()).toBe(undefined)
    expect(singlyLinkedList.length).toBe(0)
  });
});

describe("#set", function(){
  it("finds a node and replaces its value or returns undefined if the node is not found", function(){
    singlyLinkedList.push(5).push(10).push(15).push(20)
    expect(singlyLinkedList.length).toBe(4)
    singlyLinkedList.set(0,10)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.head.val).toBe(10)
    singlyLinkedList.set(10,10)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.head.val).toBe(10)
    singlyLinkedList.set(2,100)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.head.next.next.val).toBe(100)
  });
});

describe("#_get", function(){
  it("finds a node and returns its value ", function(){
    singlyLinkedList.push(5).push(10).push(15).push(20)
    expect(singlyLinkedList.get(0)).toBe(5)
    expect(singlyLinkedList.get(1)).toBe(10)
    expect(singlyLinkedList.get(2)).toBe(15)
    expect(singlyLinkedList.get(3)).toBe(20)
    expect(singlyLinkedList.get(4)).toBe(null)
  });
});

describe("#_insert", function(){
  it("inserts a node and correct adjusts the next properties of other nodes", function(){
    singlyLinkedList.push(5).push(10).push(15).push(20)
    singlyLinkedList.insert(2,12)
    expect(singlyLinkedList.length).toBe(5)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.head.next.val).toBe(10)
    expect(singlyLinkedList.head.next.next.val).toBe(12)
    expect(singlyLinkedList.head.next.next.next.val).toBe(15)
    expect(singlyLinkedList.head.next.next.next.next.val).toBe(20)
  });
});

describe("#remove", function(){
  it("contains a root that is null", function(){
    singlyLinkedList.push(5).push(10).push(15).push(20)
    singlyLinkedList.remove(2)
    expect(singlyLinkedList.length).toBe(3)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.head.next.val).toBe(10)
    expect(singlyLinkedList.head.next.next.val).toBe(20)
  });
});

describe("#reverse", function(){
  it("reverses all of the nodes", function(){
    singlyLinkedList.push(5).push(10).push(15).push(20)
    singlyLinkedList.reverse()
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.head.val).toBe(20)
    expect(singlyLinkedList.head.next.val).toBe(15)
    expect(singlyLinkedList.head.next.next.val).toBe(10)
    expect(singlyLinkedList.head.next.next.next.val).toBe(5)
  });
});