describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles large arrary', function() {
    expect(bubbleSort([3, 5, 2, 1])).toEqual([1, 2, 3, 5]);
  });
});
