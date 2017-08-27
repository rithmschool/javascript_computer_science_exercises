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
    expect(bubbleSort(unsorted)).toEqual(sorted);
    expect(bubbleSort(unsortedNegative)).toEqual(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(bubbleSort([])).toEqual([]);
  });

});

describe("#selectionSort", function(){

  it("should sort an array of positive and negative numbers ", function(){
    expect(selectionSort(unsorted)).toEqual(sorted);
    expect(selectionSort(unsortedNegative)).toEqual(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(selectionSort([])).toEqual([]);
  });

});


describe("#insertionSort", function(){

  it("should sort an array of positive and negative numbers ", function(){
    expect(insertionSort(unsorted)).toEqual(sorted);
    expect(insertionSort(unsortedNegative)).toEqual(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(insertionSort([])).toEqual([]);
  });

});

describe("#mergeSort", function(){

  describe("#merge", function() {
    it("should merge two sorted arrays into one sorted array", function() {
      expect(merge([1, 3, 5, 7],[-2, 4, 6, 8])).toEqual([-2, 1, 3, 4, 5, 6, 7, 8]);
    });

    it("should work for arrays of different sizes", function() {
      expect(merge([-5, 2],[0, 1, 2, 6])).toEqual([-5, 0, 1, 2, 2, 6]);
    });
  })

  it("should sort an array of positive and negative numbers ", function(){
    expect(mergeSort(unsorted)).toEqual(sorted);
    expect(mergeSort(unsortedNegative)).toEqual(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(mergeSort([])).toEqual([]);
  });

});

describe("#quickSort", function(){

  describe("#pivot", function() {
    it("should return the new index of the pivot element", function() {
      expect(pivot(unsorted)).toBe(2);
      expect(pivot(unsortedNegative)).toBe(4);
    });

    it("should mutate the input so that the pivot is in the right place", function() {
      pivot(unsorted);
      pivot(unsortedNegative);
      expect(unsorted.slice(0,2)).toEqual(sorted.slice(0,2));
      expect(unsorted.slice(3)).toEqual(sorted.slice(3));
      expect(unsortedNegative.slice(0,4)).toEqual(sorted.slice(0,4));
      expect(unsortedNegative.slice(5)).toEqual(sorted.slice(5));
    });
  });

  it("should sort an array of positive and negative numbers ", function(){
    expect(quickSort(unsorted)).toEqual(sorted);
    expect(quickSort(unsortedNegative)).toEqual(sortedNegative);
  });

  it("should return an empty array if passed an empty array", function(){
    expect(quickSort([])).toEqual([]);
  });

});