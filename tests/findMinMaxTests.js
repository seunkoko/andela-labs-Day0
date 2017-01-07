'use strict';

var findMinMax = require('../labs.js').findMinMax;

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });

    it('should return [5, 17] for [5, 17, 5, 5, 5, 5, 17]', function () 
     {
       expect(findMinMax([5, 17, 5, 5, 5, 5, 17])).toEqual([5, 17]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
    });

  });

  describe('Return the number in the list in a new list follows `[min, max]` when the array consists of negative numbers', function () {

    it('should return [-25, -1] for [-4, -3, -9, -20, -25, -1]', function () {
      expect(findMinMax([-4, -3, -9, -20, -25, -1])).toEqual([-25, -1]);
    });

     it('should return [-9, -4] for [-4, -5, -6, -7, -8, -9]', function () {
      expect(findMinMax([-4, -5, -6, -7, -8, -9])).toEqual([-9, -4]);
    });

  });

   describe('Return the number in the list in a new list follows `[min, max]` when the array consists of both positive and negative numbers', function () {

    it('should return [-2, 7] for [-1, 4, 3, -2, 5, 7]', function () {
      expect(findMinMax([-1, 4, 3, -2, 5, 7])).toEqual([-2, 7]);
    });

     it('should return [-34, 77] for [-4, -34, 10, 77, -8, 9]', function () {
      expect(findMinMax([-4, -34, 10, 77, -8, 9])).toEqual([-34, 77]);
    });

    it('should return [-4, 1] for [-4, -3, -2, -1, -0, 1]', function () {
      expect(findMinMax([-4, -34, 10, 77, -8, 9])).toEqual([-34, 77]);
    });

  });

});
