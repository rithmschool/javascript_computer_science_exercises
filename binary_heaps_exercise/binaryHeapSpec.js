var expect = chai.expect
var binaryHeap

beforeEach(function(){
  binaryHeap = new BinaryHeap
})

describe("#insert", function(){
  it("inserts a value at the correct position", function(){
    binaryHeap.insert(1)
    expect(binaryHeap.values[0]).to.equal(1)
    binaryHeap.insert(2)
    expect(binaryHeap.values[0]).to.equal(2)
    expect(binaryHeap.values).to.deep.equal([2, 1])
    binaryHeap.insert(3)
    expect(binaryHeap.values[0]).to.equal(3)
    expect(binaryHeap.values).to.deep.equal([3, 1, 2])
    binaryHeap.insert(4)
    expect(binaryHeap.values[0]).to.equal(4)
    expect(binaryHeap.values).to.deep.equal([4, 3, 2, 1])
    binaryHeap.insert(5)
    expect(binaryHeap.values[0]).to.equal(5)
    expect(binaryHeap.values).to.deep.equal([5, 4, 2, 1, 3])
    binaryHeap.insert(6)
    expect(binaryHeap.values[0]).to.equal(6)
    expect(binaryHeap.values).to.deep.equal([6, 4, 5, 1, 3, 2])
  });
});

describe("#remove", function(){
  it("removes a value at the correct position", function(){
    binaryHeap.insert(1)
    binaryHeap.insert(2)
    binaryHeap.insert(3)
    binaryHeap.insert(4)
    binaryHeap.insert(5)
    binaryHeap.insert(6)
    binaryHeap.remove()
    expect(binaryHeap.values[0]).to.equal(5)
    expect(binaryHeap.values).to.deep.equal([5,4,2,1,3])
    binaryHeap.remove()
    expect(binaryHeap.values).to.deep.equal([4,3,2,1])
    binaryHeap.remove()
    expect(binaryHeap.values).to.deep.equal([3,1,2])
  });
});

describe("#maxHeapify", function(){
  it("turns an array into a max binary heap", function(){
    var arr = [1,2,3,4,5,6,7,8,9,10]
    var arr2 = [5,-10,15,20,35,-2,-15,40,3,8,9]
    expect(maxHeapify(arr)).to.deep.equal([10, 9, 7, 8, 5, 6, 3, 1, 4, 2])
    expect(maxHeapify(arr2)).to.deep.equal([40, 35, 15, 20, 9, -2, -15, -10, 3, 8, 5])
  });
});

