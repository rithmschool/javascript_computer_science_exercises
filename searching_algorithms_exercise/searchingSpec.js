var expect = chai.expect

describe("#linearSearch", function(){
  it("should find the index of a value in an array", function(){
    expect(linearSearch([1,2,3,4],4)).to.equal(3)
    expect(linearSearch([1,2],1)).to.equal(0)
    expect(linearSearch([1,2,3,4,5,6,7],6)).to.equal(5)
  });
  it("should return -1 if the value is not found", function(){
    expect(linearSearch([1,2,3,4],0)).to.equal(-1)
    expect(linearSearch([1,3,4],2)).to.equal(-1)
    expect(linearSearch([1,2],11)).to.equal(-1)
  });
});

describe("#linearSearchRecursive", function(){
  it("should find the index of a value in an array", function(){
    expect(linearSearchRecursive([1,2,3,4],4)).to.equal(3)
    expect(linearSearchRecursive([1,2],1)).to.equal(0)
    expect(linearSearchRecursive([1,2,3,4,5,6,7],6)).to.equal(5)
  });
  it("should return -1 if the value is not found", function(){
    expect(linearSearchRecursive([1,2,3,4],0)).to.equal(-1)
    expect(linearSearchRecursive([1,3,4],2)).to.equal(-1)
    expect(linearSearchRecursive([1,2],11)).to.equal(-1)
  });
});

describe("#binarySearch", function(){
  it("should find the index of a value in an array", function(){
    expect(binarySearch([1,2,3,4],4)).to.equal(3)
    expect(binarySearch([1,2],1)).to.equal(0)
    expect(binarySearch([1,2,3,4,5,6,7],6)).to.equal(5)
  });
  it("should return -1 if the value is not found", function(){
    expect(binarySearch([1,2,3,4],0)).to.equal(-1)
    expect(binarySearch([1,3,4],2)).to.equal(-1)
    expect(binarySearch([1,2],11)).to.equal(-1)
  });
});

describe("#binarySearchRecursive", function(){
  it("should find the index of a value in an array", function(){
    expect(binarySearchRecursive([1,2,3,4],4)).to.equal(3)
    expect(binarySearchRecursive([1,2],1)).to.equal(0)
    expect(binarySearchRecursive([1,2,3,4,5,6,7],6)).to.equal(5)
  });
  it("should return -1 if the value is not found", function(){
    expect(binarySearchRecursive([1,2,3,4],0)).to.equal(-1)
    expect(binarySearchRecursive([1,3,4],2)).to.equal(-1)
    expect(binarySearchRecursive([1,2],11)).to.equal(-1)
  });
});