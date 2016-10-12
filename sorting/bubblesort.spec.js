var array = [44,38,5,6,8,34,26,12];

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with multiple elements', function() {
		expect( bubbleSort(array)).toEqual([5,6,8,12,26,34,38,44]);
	})
});
