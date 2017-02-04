var expect = chai.expect
var hashTable;

beforeEach(function() {
  hashTable = new HashTable;
});

describe("#HashTable", function() {
  it("is initialized correctly", function() {
    expect(hashTable.hasOwnProperty('keyMap')).to.equal(true);
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
  it("removes keys and values from the hash table", function() {
    hashTable.set('a', 'Matt');
    hashTable.set('b', 'Tim');
    hashTable.set('c', 'Elie');
    hashTable.remove('a')
    expect(hashTable.containsKey('a')).to.equal(false);
    hashTable.remove('b')
    expect(hashTable.containsKey('b')).to.equal(false);
    hashTable.remove('c')
    expect(hashTable.containsKey('c')).to.equal(false);
  })
});

describe("#keys", function() {
  it("lists all the keys in an array", function() {
    hashTable.set('123', 'awesome');
    hashTable.set('foo', 'bar');
    hashTable.set('done!', 'nice!');
    expect(hashTable.keys()).to.deep.equal(['123', 'foo', 'done!']);
  })
});

describe("#values", function() {
  it("lists all the values in an array", function() {
    hashTable.set('123', 'awesome');
    hashTable.set('foo', 'bar');
    hashTable.set('done!', 'nice!');
    expect(hashTable.values()).to.deep.equal(['awesome', 'bar', 'nice!']);
  })
});

describe("#setSeparateChaining", function(){
  it("can handle collisions using separate chaining", function() {

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

    hashTable.setSeparateChaining('0', 'Elie')
    hashTable.setSeparateChaining('5', 'Matt')
    hashTable.setSeparateChaining('10', 'Tim')

    expect(hashTable.getSeparateChaining('0')).to.deep.equal('Elie')
    expect(hashTable.getSeparateChaining('5')).to.deep.equal('Matt')
    expect(hashTable.getSeparateChaining('10')).to.deep.equal('Tim')

  });
});

describe("#setLinearProbing", function(){
  it("can handle collisions using separate chaining", function() {

    hashTable.setLinearProbing('0', 'Elie')
    hashTable.setLinearProbing('5', 'Matt')
    hashTable.setLinearProbing('10', 'Tim')

    expect(hashTable.containsKey('0')).to.equal(true)
    expect(hashTable.containsKey('5')).to.equal(true)
    expect(hashTable.containsKey('10')).to.equal(true)
  });
});

describe("#getLinearProbing", function(){
  it("can handle collisions using separate chaining", function() {

    hashTable.setLinearProbing('0', 'Elie')
    hashTable.setLinearProbing('5', 'Matt')
    hashTable.setLinearProbing('10', 'Tim')

    expect(hashTable.getLinearProbing('0')).to.deep.equal('Elie')
    expect(hashTable.getLinearProbing('5')).to.deep.equal('Matt')
    expect(hashTable.getLinearProbing('10')).to.deep.equal('Tim')

  });
});
