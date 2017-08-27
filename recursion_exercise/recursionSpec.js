var expect = chai.expect

describe("#productOfArray", function(){
  it("returns the product of all the numbers in an array", function(){
    expect(productOfArray([1,2,3])).toBe(6)
    expect(productOfArray([0,1,2,3])).toBe(0)
    expect(productOfArray([1,-2,3])).toBe(-6)
  });
});

describe("#collectStrings", function(){
  it("returns all the strings in a nested object", function(){
    var obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }
    expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"])
  });
});

describe("#contains", function(){
  it("should return true if a value is found in an object", function(){
    var nestedObject = {
        data: {
            info: {
                stuff: {
                    thing: {
                        moreStuff: {
                            magicNumber: 44
                        }
                    }
                }
            }
        }
    }
    expect(contains(nestedObject, 44)).toBe(true) // true)
  });
});

describe("#search", function(){
  it("should find the index of a value in an array", function(){
    expect(search([1,2,3,4],4)).toBe(3)
    expect(search([1,2],1)).toBe(0)
    expect(search([1,2,3,4,5,6,7],6)).toBe(5)
  });
  it("should return -1 if the value is not found", function(){
    expect(search([1,2,3,4]),0).toBe(-1)
    expect(search([1,2]),11).toBe(-1)
  });
});

describe("#binarySearch", function(){
  it("should find the index of a value in an array", function(){
    expect(binarySearch([1,2,3,4],4)).toBe(3)
    expect(binarySearch([1,2],1)).toBe(0)
    expect(binarySearch([1,2,3,4,5,6,7],6)).toBe(5)
  });
  it("should return -1 if the value is not found", function(){
    expect(binarySearch([1,2,3,4],0)).toBe(-1)
    expect(binarySearch([1,2],11)).toBe(-1)
  });
});

describe("#stringifyNumbers", function(){
  it("should not modify an existing object", function(){
    var obj = {
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66
        }
      }
    }
    var answer = {
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66"
        }
      }
    }
    stringifyNumbers(obj)
    expect(typeof obj.num).toBe('number')
    expect(obj.num).toBe(1)
  });
  it("should convert all numbers in a nested object to strings", function(){
    var obj = {
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66
        }
      }
    }
    var answer = {
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66"
        }
      }
    }
    expect(stringifyNumbers(obj)).toEqual(answer)
  });
  it("should convert all numbers in a highly nested object to strings", function(){
    var obj = {
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66,
          nested: {
            inner: {
              nestedInner: {
                another: {
                  num: 10
                }
              }
            }
          }
        }
      }
    }
    var answer = {
       num: '1',
       test: [],
       data: {
         val: '4',
         info: {
           isRight: true,
           random: '66',
           nested: {
             inner: {
               nestedInner: {
                 another: {
                   num: '10'
                 }
               }
             }
           }
         }
       }
     }
    expect(stringifyNumbers(obj)).toEqual(answer)
  });
});