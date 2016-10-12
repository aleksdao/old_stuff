describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        var arr1 = [1,3,5,8,9];
        var arr2 = [2,4,6];
        expect(merge(arr1, arr2)).toEqual( [1,2,3,4,5,6,8,9] );

        // test the merging algorithm
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    var arr = [3,5,6,1,4,2,7]
    expect(split(arr)).toEqual([[3,5,6],[1,4,2,7]]);// your code here 
  });
});