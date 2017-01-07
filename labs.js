'use strict'

module.exports = {

    findMinMax: function (arr) {
		let max = arr[0];
		let min = arr[0];

		for (let i = 1; i < arr.length; i++){
			if(max < arr[i]){
				max = arr[i];
			}else if(min > arr[i]){
				min = arr[i];
			}
		}
		
		if (min === max){
			return [min];
		}else{
			return [min, max];
		}
    },

    fizzBuzz: function (n) {
        // TODO
	return '';
    },

    aritGeo: function (arr) {
        // TODO
	return 0;
    }
}
