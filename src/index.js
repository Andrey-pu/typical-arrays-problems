
exports.min = function min (array) {
	if (array === undefined || array === null || array.length <= 0){
		return 0
	}	
	else{
		var min = array[0]
		for(i of array){
			if (min > i){min = i}
		}
		return min 
	}
	
}

exports.max = function max (array) {
  if (array === undefined || array === null || array.length <= 0){
		return 0
	}	
	else{
		var max = array[0]
		for(i of array){
			if (max < i){max = i}
		}
		return max 
	}
}

exports.avg = function avg (array) {
  if (array === undefined || array === null || array.length <= 0){
		return 0
	}	
	else{
		var result = 0
		var count = 0
		for(i of array){
			result += i
			count += 1
		}
		return result / count 
	}
}
