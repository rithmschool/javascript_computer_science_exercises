var expect = chai.expect;
var unsorted, sorted, unsortedNegative, sortedNegative;

beforeEach(function(){
  unsorted = [4,5,1,21,2,9,10,15];
  sorted = [1,2,4,5,9,10,15,21];
  unsortedNegative = [9,-2,0,35,4,-10,22,12];
  sortedNegative = [-10,-2,0,4,9,12,22,35];
});

describe("#bubbleSort", function(){

  it("should sort an array of positive and negative numbers ", function(){
    expect(bubbleSort(unsorted)).to.deep.equal(sorted);
    expect(bubbleSort(unsortedNegative)).to.deep.equal(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(bubbleSort([])).to.deep.equal([]);
  });

});

describe("#selectionSort", function(){

  it("should sort an array of positive and negative numbers ", function(){
    expect(selectionSort(unsorted)).to.deep.equal(sorted);
    expect(selectionSort(unsortedNegative)).to.deep.equal(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(selectionSort([])).to.deep.equal([]);
  });

});


describe("#insertionSort", function(){

  it("should sort an array of positive and negative numbers ", function(){
    expect(insertionSort(unsorted)).to.deep.equal(sorted);
    expect(insertionSort(unsortedNegative)).to.deep.equal(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(insertionSort([])).to.deep.equal([]);
  });

});

describe("#mergeSort", function(){

  describe("#merge", function() {
    it("should merge two sorted arrays into one sorted array", function() {
      expect(merge([1, 3, 5, 7],[-2, 4, 6, 8])).to.deep.equal([-2, 1, 3, 4, 5, 6, 7, 8]);
    });

    it("should work for arrays of different sizes", function() {
      expect(merge([-5, 2],[0, 1, 2, 6])).to.deep.equal([-5, 0, 1, 2, 2, 6]);
    });
  })

  it("should sort an array of positive and negative numbers ", function(){
    expect(mergeSort(unsorted)).to.deep.equal(sorted);
    expect(mergeSort(unsortedNegative)).to.deep.equal(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(mergeSort([])).to.deep.equal([]);
  });

});

describe("#quickSort", function(){

  describe("#pivot", function() {
    it("should return the new index of the pivot element", function() {
      expect(pivot(unsorted)).to.equal(2);
      expect(pivot(unsortedNegative)).to.equal(4);
    });

    it("should mutate the input so that the pivot is in the right place", function() {
      pivot(unsorted);
      pivot(unsortedNegative);
      expect(unsorted.slice(0,2)).to.include.members(sorted.slice(0,2));
      expect(unsorted.slice(3)).to.include.members(sorted.slice(3));
      expect(unsortedNegative.slice(0,4)).to.include.members(sortedNegative.slice(0,4));
      expect(unsortedNegative.slice(5)).to.include.members(sortedNegative.slice(5));
    });
  });

  it("should sort an array of positive and negative numbers ", function(){
    expect(quickSort(unsorted)).to.deep.equal(sorted);
    expect(quickSort(unsortedNegative)).to.deep.equal(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(quickSort([])).to.deep.equal([]);
  });

});