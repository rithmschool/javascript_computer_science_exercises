var expect = chai.expect
var binarySearchTree, node, arr;

beforeEach(function(){
  binarySearchTree = new BinarySearchTree
  node = new Node(15)
})

describe("#Binary Search Tree", function(){
  it("contains a root that is null", function(){
    expect(binarySearchTree.root).to.equal(null)
    expect(binarySearchTree.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#Node", function(){
  it("contains a value", function(){
    expect(node.value).to.equal(15)
    expect(node.hasOwnProperty('value')).to.equal(true)
  });
  it("has a left value initialized at null", function(){
    expect(node.left).to.equal(null)
    expect(node.hasOwnProperty('left')).to.equal(true)
  });
  it("has a right value initialized at null", function(){
    expect(node.right).to.equal(null)
    expect(node.hasOwnProperty('right')).to.equal(true)
  });
});

describe("#insertIteratively", function(){
  it("inserts a node at the root if there is nothing there", function(){
    binarySearchTree.insertIteratively(15)
    expect(binarySearchTree.root.value).to.deep.equal(15)
    expect(binarySearchTree.root.left).to.equal(null)
    expect(binarySearchTree.root.right).to.equal(null)
  });
  it("inserts a node at the correct position", function(){
    binarySearchTree.insertIteratively(15)
    binarySearchTree.insertIteratively(20)
    binarySearchTree.insertIteratively(10)
    binarySearchTree.insertIteratively(12)
    expect(binarySearchTree.root.value).to.deep.equal(15)
    expect(binarySearchTree.root.right.value).to.deep.equal(20)
    expect(binarySearchTree.root.left.right.value).to.deep.equal(12)
  });
  it("returns the binarySearchTree so that the method can be chained", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12)
    expect(binarySearchTree.root.value).to.equal(15)
    expect(binarySearchTree.root.right.value).to.equal(20)
    expect(binarySearchTree.root.left.right.value).to.equal(12)
  });
});

describe("#insertRecursively", function(){
  it("inserts a node at the root if there is nothing there", function(){
    binarySearchTree.insertRecursively(15)
    expect(binarySearchTree.root.value).to.equal(15)
    expect(binarySearchTree.root.left).to.equal(null)
    expect(binarySearchTree.root.right).to.equal(null)
  });
  it("inserts a node at the correct position", function(){
    binarySearchTree.insertRecursively(15)
    binarySearchTree.insertRecursively(20)
    binarySearchTree.insertRecursively(10)
    binarySearchTree.insertRecursively(12)
    expect(binarySearchTree.root.value).to.equal(node.value)
    expect(binarySearchTree.root.right.value).to.equal(20)
    expect(binarySearchTree.root.left.right.value).to.equal(12)
  });
  it("returns the binarySearchTree so that the method can be chained", function(){
    binarySearchTree.insertRecursively(15).insertRecursively(20).insertRecursively(10).insertRecursively(12)
    expect(binarySearchTree.root.value).to.equal(node.value)
    expect(binarySearchTree.root.right.value).to.equal(20)
    expect(binarySearchTree.root.left.right.value).to.equal(12)
  });
});

describe("#findIteratively", function(){
  it("finds a node correctly", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12)
    var foundNode = binarySearchTree.findIteratively(20)
    expect(foundNode.value).to.equal(20)
    expect(foundNode.left).to.equal(null)
    expect(foundNode.right).to.equal(null)
  });
  it("returns undefined if a node is not found", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12)
    var foundNode = binarySearchTree.findIteratively(120)
    expect(foundNode).to.equal(undefined)
  });
});

describe("#findRecursively", function(){

  it("finds a node correctly", function(){
    // insert four nodes
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12)
    var foundNode = binarySearchTree.findRecursively(20)
    expect(foundNode.value).to.equal(20)
    expect(foundNode.left).to.equal(null)
    expect(foundNode.right).to.equal(null)
  });
  it("returns undefined if a node is not found", function(){
    // insert four nodes
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12)
    var foundNode = binarySearchTree.findRecursively(120)
    expect(foundNode).to.equal(undefined)
  });
});

describe("#toArray", function(){
  it("returns an array of nodes in correct order", function(){

    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)

    expect(binarySearchTree.toArray()).to.deep.equal([1,5,10,12,15,20,50])
  });
});

describe("#DFSPreOrder", function(){


  it("returns an array of values found with DFS Pre Order", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
    expect(binarySearchTree.DFSPreOrder()).to.deep.equal([15, 10, 1, 5, 12, 20, 50])
  });
});

describe("#DFSInOrder", function(){


  it("returns an array of values found with DFS In Order", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
    expect(binarySearchTree.DFSInOrder()).to.deep.equal([1, 5, 10, 12, 15, 20, 50])
  });
});

describe("#DFSPostOrder", function(){


  it("returns an array of values found with DFS Post Order", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
    expect(binarySearchTree.DFSPostOrder()).to.deep.equal([5, 1, 12, 10, 50, 20, 15])
  });
});

describe("#BreadthFirstSearch", function(){
  it("returns an array of values found with Breadth First Search", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
    expect(binarySearchTree.breadthFirstSearch()).to.deep.equal([15, 10, 20, 1, 12, 50, 5])
  });
});


describe("#remove", function(){
  it("should correctly remove a node with no children", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
    binarySearchTree.remove(50)
    expect(binarySearchTree.root.right.value).to.equal(20)
    expect(binarySearchTree.root.right.right).to.equal(null)

    binarySearchTree.remove(5)
    expect(binarySearchTree.root.left.left.value).to.equal(1)
    expect(binarySearchTree.root.left.left.right).to.equal(null)
  });
  it("should correctly remove a node with one child", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)

    binarySearchTree.remove(1)
    expect(binarySearchTree.root.left.left.value).to.equal(5)
    expect(binarySearchTree.root.left.left.left).to.equal(null)
    expect(binarySearchTree.root.left.left.right).to.equal(null)

    binarySearchTree.remove(20)
    expect(binarySearchTree.root.right.value).to.equal(50)
    expect(binarySearchTree.root.right.right).to.equal(null)
    expect(binarySearchTree.root.right.left).to.equal(null)
  });
  it("should correctly remove a node with two children", function(){

    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50).insertIteratively(60).insertIteratively(30).insertIteratively(25).insertIteratively(23).insertIteratively(24).insertIteratively(70)

    binarySearchTree.remove(10)
    expect(binarySearchTree.root.left.value).to.equal(12)
    expect(binarySearchTree.root.left.left.value).to.equal(1)
    expect(binarySearchTree.root.left.left.right.value).to.equal(5)

    binarySearchTree.remove(50)
    expect(binarySearchTree.root.right.value).to.equal(20)
    expect(binarySearchTree.root.right.right.value).to.equal(60)
    expect(binarySearchTree.root.right.right.left.value).to.equal(30)
  });
});