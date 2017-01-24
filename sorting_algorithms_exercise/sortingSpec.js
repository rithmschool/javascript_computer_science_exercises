var expect = chai.expect
var unsorted, sorted, unsortedNegative, sortedNegative

beforeEach(function(){
  unsorted = [4,5,1,21,2,9,10,15];
  sorted = [1,2,4,5,9,10,15,21];
  unsortedNegative = [9,-2,0,35,4,-10,22,12];
  sortedNegative = [-10,-2,0,4,9,12,22,35];
})

describe("#bubbleSort", function(){
  it("should sort an array of positive and negative numbers ", function(){
    expect(bubbleSort(unsorted)).to.deep.equal(sorted)
    expect(bubbleSort(unsortedNegative)).to.deep.equal(sortedNegative)
  });
  it("should return an empty array if passed an empty array", function(){
    expect(bubbleSort([])).to.deep.equal([])
  });
});

describe("#selectionSort", function(){
  it("should sort an array of positive and negative numbers ", function(){
    expect(selectionSort(unsorted)).to.deep.equal(sorted)
    expect(selectionSort(unsortedNegative)).to.deep.equal(sortedNegative)
  });
  it("should return an empty array if passed an empty array", function(){
    expect(selectionSort([])).to.deep.equal([])
  });
});


describe("#insertionSort", function(){
  it("should sort an array of positive and negative numbers ", function(){
    expect(insertionSort(unsorted)).to.deep.equal(sorted)
    expect(insertionSort(unsortedNegative)).to.deep.equal(sortedNegative)
  });
  it("should return an empty array if passed an empty array", function(){
    expect(insertionSort([])).to.deep.equal([])
  });
});

describe("#mergeSort", function(){
  it("should sort an array of positive and negative numbers ", function(){
    expect(mergeSort(unsorted)).to.deep.equal(sorted)
    expect(mergeSort(unsortedNegative)).to.deep.equal(sortedNegative)
  });
  it("should return an empty array if passed an empty array", function(){
    expect(mergeSort([])).to.deep.equal([])
  });
});

describe("#quickSort", function(){
  it("should sort an array of positive and negative numbers ", function(){
    expect(quickSort(unsorted)).to.deep.equal(sorted)
    expect(quickSort(unsortedNegative)).to.deep.equal(sortedNegative)
  });
  it("should return an empty array if passed an empty array", function(){
    expect(quickSort([])).to.deep.equal([])
  });
});