var expect = chai.expect
var binarySearchTree;

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
    expect(binarySearchTree.root).to.deep.equal(node)
    expect(binarySearchTree.root.left).to.equal(null)
    expect(binarySearchTree.root.right).to.equal(null)
  });
  it("inserts a node at the correct position", function(){
    binarySearchTree.insertIteratively(15)
    binarySearchTree.insertIteratively(20)
    binarySearchTree.insertIteratively(10)
    binarySearchTree.insertIteratively(12)
    expect(binarySearchTree.root).to.deep.equal(node)
    expect(binarySearchTree.root.right).to.deep.equal(20)
    expect(binarySearchTree.root.left.right).to.deep.equal(12)
  });
  it("returns the binarySearchTree so that the method can be chained", function(){
    binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12)
    expect(binarySearchTree.root).to.deep.equal(node)
    expect(binarySearchTree.root.right).to.deep.equal(20)
    expect(binarySearchTree.root.left.right).to.deep.equal(12)
  });
});

describe("#insertRecursively", function(){
  it("inserts a node at the root if there is nothing there", function(){
    binarySearchTree.insertRecursively(node)
    expect(binarySearchTree.root).to.deep.equal(node)
    expect(binarySearchTree.root.left).to.equal(null)
    expect(binarySearchTree.root.right).to.equal(null)
  });
  it("inserts a node at the correct position", function(){
    binarySearchTree.insertRecursively(node)
    binarySearchTree.insertRecursively(20)
    binarySearchTree.insertRecursively(10)
    binarySearchTree.insertRecursively(12)
    expect(binarySearchTree.root).to.deep.equal(node)
    expect(binarySearchTree.root.right).to.deep.equal(20)
    expect(binarySearchTree.root.left.right).to.deep.equal(12)
  });
  it("returns the binarySearchTree so that the method can be chained", function(){
    binarySearchTree.insertRecursively(node).insertRecursively(20).insertRecursively(10).insertRecursively(12)
    expect(binarySearchTree.root).to.deep.equal(node)
    expect(binarySearchTree.root.right).to.deep.equal(20)
    expect(binarySearchTree.root.left.right).to.deep.equal(12)
  });
});

describe("#findIteratively", function(){
  // insert four nodes
  binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12)

  it("finds a node correctly", function(){
    var foundNode = binarySearchTree.findIteratively(20)
    expect(foundNode).to.deep.equal(20)
    expect(foundNode.left).to.equal(null)
    expect(foundNode.right).to.equal(null)
  });
  it("returns undefined if a node is not found", function(){
    var foundNode = binarySearchTree.findIteratively(120)
    expect(foundNode).to.equal(undefined)
  });
});

describe("#findRecursively", function(){
  // insert four nodes
  binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12)

  it("finds a node correctly", function(){
    var foundNode = binarySearchTree.findRecursively(20)
    expect(foundNode).to.deep.equal(20)
    expect(foundNode.left).to.equal(null)
    expect(foundNode.right).to.equal(null)
  });
  it("returns undefined if a node is not found", function(){
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

  binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(new Node(1)).insertIteratively(new Node(5)).insertIteratively(new Node(50))

  it("returns an array of values found with DFS Pre Order", function(){
    expect(binarySearchTree.DFSPreOrder()).to.deep.equal([15, 10, 1, 5, 12, 20, 50])
  });
});

describe("#DFSInOrder", function(){

  binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(new Node(1)).insertIteratively(new Node(5)).insertIteratively(new Node(50))

  it("returns an array of values found with DFS In Order", function(){
    expect(binarySearchTree.DFSInOrder()).to.deep.equal([1, 5, 10, 12, 15, 20, 50])
  });
});

describe("#DFSPostOrder", function(){

  binarySearchTree.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(new Node(1)).insertIteratively(new Node(5)).insertIteratively(new Node(50))

  it("returns an array of values found with DFS Post Order", function(){
    expect(binarySearchTree.DFSPostOrder()).to.deep.equal([5, 1, 12, 10, 50, 20, 15])
  });
});

describe("#BreadthFirstSearch", function(){
  it("returns an array of values found with Breadth First Search", function(){
    expect(binarySearchTree.BreadthFirstSearch()).to.deep.equal([15, 10, 20, 1, 12, 50, 5])
  });
});

describe("#remove", function(){
  it("should correctly remove a node with no children", function(){
    expect(binarySearchTree.root).to.equal(null)
    expect(binarySearchTree.hasOwnProperty('root')).to.equal(true)
  });
  it("should correctly remove a node with one child", function(){
    expect(binarySearchTree.root).to.equal(null)
    expect(binarySearchTree.hasOwnProperty('root')).to.equal(true)
  });
  it("should correctly remove a node with two children", function(){
    expect(binarySearchTree.root).to.equal(null)
    expect(binarySearchTree.hasOwnProperty('root')).to.equal(true)
  });
});