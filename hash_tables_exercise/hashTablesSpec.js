var expect = chai.expect
var hashTable;

beforeEach(function(){
  hashTable = new HashTable
})

describe("#hashTable", function(){
  it("contains a prev and next that are null", function(){
    expect(hashTable.prev).to.equal(null)
    expect(hashTable.next).to.equal(null)
    expect(hashTable.hasOwnProperty('prev')).to.equal(true)
    expect(hashTable.hasOwnProperty('next')).to.equal(true)
  });
  it("contains a length property that begins at 0", function(){
    expect(hashTable.length).to.equal(0)
    expect(hashTable.hasOwnProperty('length')).to.equal(true)
  });
});

describe("#set", function(){
  it("contains a value", function(){
    expect(node1.value).to.equal(15)
    expect(node1.hasOwnProperty('value')).to.equal(true)
  });
});

describe("#get", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#containsKey", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#remove", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#keys", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#values", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#setSeparateChaining", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#getSeparateChaining", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#setLinearProbing", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});

describe("#getLinearProbing", function(){
  it("contains a root that is null", function(){
    expect(hashTable.root).to.equal(null)
    expect(hashTable.hasOwnProperty('root')).to.equal(true)
  });
});