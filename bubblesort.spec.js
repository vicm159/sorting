describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array of one element', function() {
    expect(bubbleSort([8])).toEqual([8]);
  });

  it('handles large arrary', function() {
    expect(bubbleSort([3, 5, 2, 9, 1])).toEqual([1, 2, 3, 5, 9]);
  });
});
