var expect = chai.expect
var hashTable;

var hashTable;

beforeEach(function() {
  hashTable = new HashTable;
});

HashTable.prototype.RANDOM_VAL = 1;

describe("#HashTable", function() {
  it("is initialized correctly", function() {
    expect(hashTable.hasOwnProperty('keyMap')).to.equal(true);
  });
});

describe("#set", function() {
  it("sets and gets a simple key", function() {
    hashTable.set('Hello', 'World')
    hashTable.set({}, 'object! remember this is a reference type...')
    hashTable.set(true, 'primitives!')
    expect(hashTable.size).to.equal(3);
  });
});

describe("#get", function() {
  it("sets and gets a simple key", function() {
    hashTable.set(1, 'test');
    expect(hashTable.get(1)).to.deep.equal('test');
  });
});

describe("#containsKey", function() {
 it("should return true if a key exists in the hash and return false if it does not", function() {
   expect(hashTable.containsKey('NO CHANCE!')).to.equal(false);
   hashTable.set(123, 'awesome');
   expect(hashTable.containsKey(123)).to.equal(true);
 });
});

describe("#remove", function() {
  xit("", function() {
    expect("").to.equal(0);
  })
});

describe("#keys", function() {
  xit("", function() {
    expect("").to.equal(0);
  })
});

describe("#values", function() {
  xit("", function() {
    expect("").to.equal(0);
  })
});

describe("#setSeparateChaining", function(){
  it("can handle collisions using separate chaining", function() {

    // generate similar keys with our hashing function to test for collisions
    var firstKey = 0;
    var secondKey = 5;
    var thirdKey = 10;

    hashTable.setSeparateChaining(0, 'Elie')
    hashTable.setSeparateChaining(5, 'Matt')
    hashTable.setSeparateChaining(10, 'Tim')

    expect(hashTable.containsKey(0)).to.equal(true)
    expect(hashTable.containsKey(5)).to.equal(true)
    expect(hashTable.containsKey(10)).to.equal(true)

  });
});

describe("#getSeparateChaining", function(){
  it("can retrieve values in a hash table using separate chaining", function() {

    // generate the same key with the hashing function
    var firstKey = 0;
    var secondKey = 5;
    var thirdKey = 10;

    hashTable.setSeparateChaining(0, 'Elie')
    hashTable.setSeparateChaining(5, 'Matt')
    hashTable.setSeparateChaining(10, 'Tim')

    expect(hashTable.getSeparateChaining(0)).to.deep.equal('Elie')
    expect(hashTable.getSeparateChaining(5)).to.deep.equal('Matt')
    expect(hashTable.getSeparateChaining(10)).to.deep.equal('Tim')

  });
});

describe("#setLinearProbing", function(){
  it("can handle collisions using separate chaining", function() {

    // generate the same key with the hashing function
    var firstKey = 0;
    var secondKey = 5;
    var thirdKey = 10;

    hashTable.setLinearProbing(0, 'Elie')
    hashTable.setLinearProbing(5, 'Matt')
    hashTable.setLinearProbing(10, 'Tim')

    expect(hashTable.containsKey(0)).to.equal(true)
    expect(hashTable.containsKey(5)).to.equal(true)
    expect(hashTable.containsKey(10)).to.equal(true)

  });
});

describe("#getLinearProbing", function(){
  it("can handle collisions using separate chaining", function() {

    // generate the same key with the hashing function
    var firstKey = 0;
    var secondKey = 5;
    var thirdKey = 10;

    hashTable.setLinearProbing(0, 'Elie')
    hashTable.setLinearProbing(5, 'Matt')
    hashTable.setLinearProbing(10, 'Tim')

    expect(hashTable.getLinearProbing(0)).to.deep.equal('Elie')
    expect(hashTable.getLinearProbing(5)).to.deep.equal('Matt')
    expect(hashTable.getLinearProbing(10)).to.deep.equal('Tim')

  });
});
