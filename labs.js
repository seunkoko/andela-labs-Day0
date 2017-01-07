
	'use strict'

	module.exports = {

		findMinMax: function (arr) {
			let max = arr[0];
			let min = arr[0];

			for (let i = 1; i < arr.length; i++) {
				if (max < arr[i]) {
					max = arr[i];
				} else if (min > arr[i]) {
					min = arr[i];
				}
			}
			
			if (min === max){
				return [min];
			} else {
				return [min, max];
			}
		},

		fizzBuzz: function (num) {
			if ((num % 3 === 0) && (num % 5 === 0)) {
				return "FizzBuzz";
			} else if (num % 3 === 0) {
				return "Fizz";
			} else if (num % 5 === 0) {
				return "Buzz";
			} else {
				return num;
			}
		},

		aritGeo: function (arr) {
			if (Array.isArray(arr)) {
				if (arr.length > 0) {
					let isArithmetic = true;
					let isGeometric = true;
					let arithmeticDiff = arr[1] - arr[0];
					let geometricDiff = arr[1] / arr[0];
					
					for (let i = 1; i < arr.length; i++) {
						let testArithmetic = arr[i] - arr[i-1];
						let testGeometric = arr[i] / arr[i-1];
						
						if (testArithmetic != arithmeticDiff) {
							isArithmetic = false;
						}
						
						if (testGeometric != geometricDiff) {
							isGeometric = false;
						}
					}
					
					if (isArithmetic) {
						return "Arithmetic";
					} else if (isGeometric) {
						return "Geometric";
					} else {
						return -1;
					}
				} else {
					return 0;
				}
			} else {
				return "input not an array";
			}		
		}
	}
